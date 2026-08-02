const https = require('https');

const GIST_ID = process.env.GIST_ID;
const GH_PAT = process.env.GH_PAT;
const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK;

if (!GIST_ID || !GH_PAT || !DISCORD_WEBHOOK) {
  console.error("Erro: Variáveis de ambiente GIST_ID, GH_PAT ou DISCORD_WEBHOOK não configuradas.");
  process.exit(1);
}

// 1. Fetch State from Gist
const options = {
  hostname: 'api.github.com',
  path: `/gists/${GIST_ID}`,
  method: 'GET',
  headers: {
    'User-Agent': 'GitHub-Actions-Bot',
    'Authorization': `token ${GH_PAT}`,
    'Accept': 'application/vnd.github.v3+json'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    if (res.statusCode !== 200) {
      console.error(`Erro ao carregar Gist. Status: ${res.statusCode}`);
      process.exit(1);
    }
    
    try {
      const gistData = JSON.parse(data);
      const fileContent = gistData.files['repertorio_cultural.json'].content;
      const state = JSON.parse(fileContent);
      
      sendDiscordReport(state);
    } catch (e) {
      console.error("Erro ao processar JSON:", e);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error("Erro de requisição:", error);
  process.exit(1);
});

req.end();

// 2. Format and Send Discord Message
function sendDiscordReport(state) {
  const artist = state.musicActiveArtist;
  
  let content = "🌅 **Bom dia! Aqui está o seu status cultural para hoje:**\n\n";
  
  if (artist) {
    content += `🎵 **Artista Ativo:** __${artist.name}__ (${artist.genre})\n`;
    content += "💿 **Álbuns da Discografia:**\n";
    
    artist.albums.forEach(al => {
      if (al.rating !== null) {
        content += `* 🟢 **${al.title}** (${al.year}) — *Escutado (Nota: ${al.rating}/10)*\n`;
      } else {
        content += `* ⚪ **${al.title}** (${al.year}) — *Pendente*\n`;
      }
    });
    
    const rated = artist.albums.filter(a => a.rating !== null);
    if (rated.length > 0) {
      const sum = rated.reduce((acc, curr) => acc + curr.rating, 0);
      const avg = (sum / rated.length).toFixed(1);
      content += `📊 **Média Atual do Artista:** ★ ${avg}/10\n`;
    }
  } else {
    content += "🎵 **Artista Ativo:** Nenhum selecionado.\n";
  }

  if (state.showsCurrentShow) {
    content += `\n📺 **Série Atual:** __${state.showsCurrentShow}__\n`;
    if (state.showsQueue && state.showsQueue.length > 0) {
      content += `⏭️ *Próxima da fila:* ${state.showsQueue[0]}\n`;
    }
  }

  if (state.comicsCurrentTitle) {
    content += `\n📚 **Lendo Atualmente:** __${state.comicsCurrentTitle}__\n`;
    content += `📖 *Edições lidas deste título:* ${state.comicsIssuesRead}\n`;
  }

  const payload = JSON.stringify({
    content: content
  });

  const webhookUrl = new URL(DISCORD_WEBHOOK);
  const postOptions = {
    hostname: webhookUrl.hostname,
    path: webhookUrl.pathname + webhookUrl.search,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const postReq = https.request(postOptions, (postRes) => {
    console.log(`Envio para o Discord concluído. Status: ${postRes.statusCode}`);
  });

  postReq.on('error', (err) => {
    console.error("Erro ao enviar para o Discord:", err);
  });

  postReq.write(payload);
  postReq.end();
}
