// Base de Dados de Filmes (25 por década de 1950 a 2020 = 200 filmes)
const MOVIES_DATABASE = [
  // 1950s
  { id: 'm_50_1', title: '12 Angry Men (12 Homens e uma Sentença)', year: 1957, director: 'Sidney Lumet', genre: 'Drama', decade: '1950' },
  { id: 'm_50_2', title: 'Seven Samurai (Os Sete Samurais)', year: 1954, director: 'Akira Kurosawa', genre: 'Ação/Drama', decade: '1950' },
  { id: 'm_50_3', title: 'Rear Window (Janela Indiscreta)', year: 1954, director: 'Alfred Hitchcock', genre: 'Suspense', decade: '1950' },
  { id: 'm_50_4', title: 'Vertigo (Um Corpo que Cai)', year: 1958, director: 'Alfred Hitchcock', genre: 'Suspense/Mistério', decade: '1950' },
  { id: 'm_50_5', title: 'Sunset Boulevard (Crepúsculo dos Deuses)', year: 1950, director: 'Billy Wilder', genre: 'Drama/Noir', decade: '1950' },
  { id: 'm_50_6', title: 'Singin\' in the Rain (Cantando na Chuva)', year: 1952, director: 'Gene Kelly, Stanley Donen', genre: 'Musical/Comédia', decade: '1950' },
  { id: 'm_50_7', title: 'Tokyo Story (Era uma Vez em Tóquio)', year: 1953, director: 'Yasujiro Ozu', genre: 'Drama', decade: '1950' },
  { id: 'm_50_8', title: 'The 400 Blows (Os Incompreendidos)', year: 1959, director: 'François Truffaut', genre: 'Drama', decade: '1950' },
  { id: 'm_50_9', title: 'North by Northwest (Intriga Internacional)', year: 1959, director: 'Alfred Hitchcock', genre: 'Suspense/Aventura', decade: '1950' },
  { id: 'm_50_10', title: 'Some Like It Hot (Quanto Mais Quente Melhor)', year: 1959, director: 'Billy Wilder', genre: 'Comédia/Romance', decade: '1950' },
  { id: 'm_50_11', title: 'Paths of Glory (Glória Feita de Sangue)', year: 1957, director: 'Stanley Kubrick', genre: 'Guerra/Drama', decade: '1950' },
  { id: 'm_50_12', title: 'The Seventh Seal (O Sétimo Selo)', year: 1957, director: 'Ingmar Bergman', genre: 'Fantasia/Drama', decade: '1950' },
  { id: 'm_50_13', title: 'Wild Strawberries (Morangos Silvestres)', year: 1957, director: 'Ingmar Bergman', genre: 'Drama', decade: '1950' },
  { id: 'm_50_14', title: 'Touch of Evil (A Marca da Maldade)', year: 1958, director: 'Orson Welles', genre: 'Noir/Suspense', decade: '1950' },
  { id: 'm_50_15', title: 'Rashomon', year: 1950, director: 'Akira Kurosawa', genre: 'Drama/Mistério', decade: '1950' },
  { id: 'm_50_16', title: 'Orpheus (Orfeu)', year: 1950, director: 'Jean Cocteau', genre: 'Fantasia/Drama', decade: '1950' },
  { id: 'm_50_17', title: 'The Night of the Hunter (O Mensageiro do Diabo)', year: 1955, director: 'Charles Laughton', genre: 'Noir/Suspense', decade: '1950' },
  { id: 'm_50_18', title: 'Rebel Without a Cause (Juventude Transviada)', year: 1955, director: 'Nicholas Ray', genre: 'Drama', decade: '1950' },
  { id: 'm_50_19', title: 'A Streetcar Named Desire (Uma Rua Chamada Pecado)', year: 1951, director: 'Elia Kazan', genre: 'Drama', decade: '1950' },
  { id: 'm_50_20', title: 'High Noon (Matar ou Morrer)', year: 1952, director: 'Fred Zinnemann', genre: 'Faroeste', decade: '1950' },
  { id: 'm_50_21', title: 'Ugetsu (Contos da Lua Vaga)', year: 1953, director: 'Kenji Mizoguchi', genre: 'Drama/Fantasia', decade: '1950' },
  { id: 'm_50_22', title: 'The Wages of Fear (O Salário do Medo)', year: 1953, director: 'Henri-Georges Clouzot', genre: 'Suspense/Aventura', decade: '1950' },
  { id: 'm_50_23', title: 'Diabolique (As Diabólicas)', year: 1955, director: 'Henri-Georges Clouzot', genre: 'Suspense/Terror', decade: '1950' },
  { id: 'm_50_24', title: 'Sweet Smell of Success (A Embriaguez do Sucesso)', year: 1957, director: 'Alexander Mackendrick', genre: 'Drama/Noir', decade: '1950' },
  { id: 'm_50_25', title: 'Anatomy of a Murder (Anatomia de um Crime)', year: 1959, director: 'Otto Preminger', genre: 'Drama/Tribunal', decade: '1950' },

  // 1960s
  { id: 'm_60_1', title: 'Psycho (Psicose)', year: 1960, director: 'Alfred Hitchcock', genre: 'Terror/Suspense', decade: '1960' },
  { id: 'm_60_2', title: '2001: A Space Odyssey (2001: Uma Odisseia no Espaço)', year: 1968, director: 'Stanley Kubrick', genre: 'Ficção Científica', decade: '1960' },
  { id: 'm_60_3', title: 'Lawrence of Arabia (Lawrence da Arábia)', year: 1962, director: 'David Lean', genre: 'Aventura/Biografia', decade: '1960' },
  { id: 'm_60_4', title: 'The Good, the Bad and the Ugly (Três Homens em Conflito)', year: 1966, director: 'Sergio Leone', genre: 'Faroeste', decade: '1960' },
  { id: 'm_60_5', title: 'Persona (Quando Duas Vidas se Encontram)', year: 1966, director: 'Ingmar Bergman', genre: 'Drama/Mistério', decade: '1960' },
  { id: 'm_60_6', title: 'Breathless (Acossado)', year: 1960, director: 'Jean-Luc Godard', genre: 'Drama/Romance', decade: '1960' },
  { id: 'm_60_7', title: '8½ (Oito e Meio)', year: 1963, director: 'Federico Fellini', genre: 'Drama/Fantasia', decade: '1960' },
  { id: 'm_60_8', title: 'Harakiri', year: 1962, director: 'Masaki Kobayashi', genre: 'Drama/Ação', decade: '1960' },
  { id: 'm_60_9', title: 'The Graduate (A Primeira Noite de um Homem)', year: 1967, director: 'Mike Nichols', genre: 'Drama/Comédia', decade: '1960' },
  { id: 'm_60_10', title: 'Playtime (Tempo de Diversão)', year: 1967, director: 'Jacques Tati', genre: 'Comédia', decade: '1960' },
  { id: 'm_60_11', title: 'High and Low (Céu e Inferno)', year: 1963, director: 'Akira Kurosawa', genre: 'Policial/Suspense', decade: '1960' },
  { id: 'm_60_12', title: 'Rosemary\'s Baby (O Bebê de Rosemary)', year: 1968, director: 'Roman Polanski', genre: 'Terror/Drama', decade: '1960' },
  { id: 'm_60_13', title: 'Dr. Strangelove (Como Aprendi a Amar a Bomba)', year: 1964, director: 'Stanley Kubrick', genre: 'Comédia/Sátira', decade: '1960' },
  { id: 'm_60_14', title: 'The Battle of Algiers (A Batalha de Argel)', year: 1966, director: 'Gillo Pontecorvo', genre: 'Guerra/Histórico', decade: '1960' },
  { id: 'm_60_15', title: 'Andrei Rublev', year: 1966, director: 'Andrei Tarkovsky', genre: 'Drama/Biografia', decade: '1960' },
  { id: 'm_60_16', title: 'La Dolce Vita (A Doce Vida)', year: 1960, director: 'Federico Fellini', genre: 'Drama', decade: '1960' },
  { id: 'm_60_17', title: 'Repulsion (Repulsa ao Sexo)', year: 1965, director: 'Roman Polanski', genre: 'Terror/Suspense', decade: '1960' },
  { id: 'm_60_18', title: 'Le Samouraï (O Samurai)', year: 1967, director: 'Jean-Pierre Melville', genre: 'Policial/Drama', decade: '1960' },
  { id: 'm_60_19', title: 'Belle de Jour (A Bela da Tarde)', year: 1967, director: 'Luis Buñuel', genre: 'Drama', decade: '1960' },
  { id: 'm_60_20', title: 'Once Upon a Time in the West (Era uma Vez no Oeste)', year: 1968, director: 'Sergio Leone', genre: 'Faroeste', decade: '1960' },
  { id: 'm_60_21', title: 'Night of the Living Dead (A Noite dos Mortos-Vivos)', year: 1968, director: 'George A. Romero', genre: 'Terror', decade: '1960' },
  { id: 'm_60_22', title: 'Easy Rider (Sem Destino)', year: 1969, director: 'Dennis Hopper', genre: 'Drama/Aventura', decade: '1960' },
  { id: 'm_60_23', title: 'The Wild Bunch (Meu Ódio Será Sua Herança)', year: 1969, director: 'Sam Peckinpah', genre: 'Faroeste/Ação', decade: '1960' },
  { id: 'm_60_24', title: 'Butch Cassidy and the Sundance Kid', year: 1969, director: 'George Roy Hill', genre: 'Faroeste/Aventura', decade: '1960' },
  { id: 'm_60_25', title: 'The Manchurian Candidate (Sob o Domínio do Mal)', year: 1962, director: 'John Frankenheimer', genre: 'Suspense/Político', decade: '1960' },

  // 1970s
  { id: 'm_70_1', title: 'The Godfather (O Poderoso Chefão)', year: 1972, director: 'Francis Ford Coppola', genre: 'Policial/Drama', decade: '1970' },
  { id: 'm_70_2', title: 'The Godfather: Part II (O Poderoso Chefão 2)', year: 1974, director: 'Francis Ford Coppola', genre: 'Policial/Drama', decade: '1970' },
  { id: 'm_70_3', title: 'Taxi Driver', year: 1976, director: 'Martin Scorsese', genre: 'Drama/Policial', decade: '1970' },
  { id: 'm_70_4', title: 'Apocalypse Now', year: 1979, director: 'Francis Ford Coppola', genre: 'Guerra/Drama', decade: '1970' },
  { id: 'm_70_5', title: 'Chinatown', year: 1974, director: 'Roman Polanski', genre: 'Policial/Mistério', decade: '1970' },
  { id: 'm_70_6', title: 'Star Wars: Ep. IV - A New Hope (Uma Nova Esperança)', year: 1977, director: 'George Lucas', genre: 'Ficção Científica', decade: '1970' },
  { id: 'm_70_7', title: 'Alien (Alien, o Oitavo Passageiro)', year: 1979, director: 'Ridley Scott', genre: 'Ficção/Terror', decade: '1970' },
  { id: 'm_70_8', title: 'One Flew Over the Cuckoo\'s Nest (Um Estranho no Ninho)', year: 1975, director: 'Milos Forman', genre: 'Drama', decade: '1970' },
  { id: 'm_70_9', title: 'A Clockwork Orange (Laranja Mecânica)', year: 1971, director: 'Stanley Kubrick', genre: 'Ficção Científica/Drama', decade: '1970' },
  { id: 'm_70_10', title: 'Barry Lyndon', year: 1975, director: 'Stanley Kubrick', genre: 'Drama/Histórico', decade: '1970' },
  { id: 'm_70_11', title: 'Stalker', year: 1979, director: 'Andrei Tarkovsky', genre: 'Ficção Científica/Drama', decade: '1970' },
  { id: 'm_70_12', title: 'Mirror (O Espelho)', year: 1975, director: 'Andrei Tarkovsky', genre: 'Drama/Poético', decade: '1970' },
  { id: 'm_70_13', title: 'Jeanne Dielman, 23, quai du Commerce, 1080 Bruxelles', year: 1975, director: 'Chantal Akerman', genre: 'Drama', decade: '1970' },
  { id: 'm_70_14', title: 'Halloween (Halloween: A Noite do Terror)', year: 1978, director: 'John Carpenter', genre: 'Terror/Slasher', decade: '1970' },
  { id: 'm_70_15', title: 'The Texas Chain Saw Massacre (O Massacre da Serra Elétrica)', year: 1974, director: 'Tobe Hooper', genre: 'Terror', decade: '1970' },
  { id: 'm_70_16', title: 'Eraserhead', year: 1977, director: 'David Lynch', genre: 'Terror/Surrealista', decade: '1970' },
  { id: 'm_70_17', title: 'The Rocky Horror Picture Show', year: 1975, director: 'Jim Sharman', genre: 'Musical/Comédia/Cult', decade: '1970' },
  { id: 'm_70_18', title: 'Jaws (Tubarão)', year: 1975, director: 'Steven Spielberg', genre: 'Suspense/Aventura', decade: '1970' },
  { id: 'm_70_19', title: 'Monty Python and the Holy Grail (Em Busca do Cálice Sagrado)', year: 1975, director: 'T. Gilliam, T. Jones', genre: 'Comédia', decade: '1970' },
  { id: 'm_70_20', title: 'Dog Day Afternoon (Um Dia de Cão)', year: 1975, director: 'Sidney Lumet', genre: 'Policial/Drama', decade: '1970' },
  { id: 'm_70_21', title: 'Network (Rede de Intrigas)', year: 1976, director: 'Sidney Lumet', genre: 'Drama', decade: '1970' },
  { id: 'm_70_22', title: 'Suspiria', year: 1977, director: 'Dario Argento', genre: 'Terror/Cult', decade: '1970' },
  { id: 'm_70_23', title: 'Dawn of the Dead (Despertar dos Mortos)', year: 1978, director: 'George A. Romero', genre: 'Terror/Ficção', decade: '1970' },
  { id: 'm_70_24', title: 'Days of Heaven (Cinzas no Paraíso)', year: 1978, director: 'Terrence Malick', genre: 'Drama/Romance', decade: '1970' },
  { id: 'm_70_25', title: 'The Deer Hunter (O Franco Atirador)', year: 1978, director: 'Michael Cimino', genre: 'Drama/Guerra', decade: '1970' },

  // 1980s
  { id: 'm_80_1', title: 'Blade Runner (O Caçador de Androides)', year: 1982, director: 'Ridley Scott', genre: 'Ficção/Cyberpunk', decade: '1980' },
  { id: 'm_80_2', title: 'The Shining (O Iluminado)', year: 1980, director: 'Stanley Kubrick', genre: 'Terror/Suspense', decade: '1980' },
  { id: 'm_80_3', title: 'Come and See (Vá e Veja)', year: 1985, director: 'Elem Klimov', genre: 'Guerra/Drama', decade: '1980' },
  { id: 'm_80_4', title: 'Raging Bull (Touro Indomável)', year: 1980, director: 'Martin Scorsese', genre: 'Drama/Esporte', decade: '1980' },
  { id: 'm_80_5', title: 'Back to the Future (De Volta para o Futuro)', year: 1985, director: 'Robert Zemeckis', genre: 'Ficção/Aventura', decade: '1980' },
  { id: 'm_80_6', title: 'Blue Velvet (Veludo Azul)', year: 1986, director: 'David Lynch', genre: 'Mistério/Suspense', decade: '1980' },
  { id: 'm_80_7', title: 'Do the Right Thing (Faça a Coisa Certa)', year: 1989, director: 'Spike Lee', genre: 'Drama', decade: '1980' },
  { id: 'm_80_8', title: 'Paris, Texas', year: 1984, director: 'Wim Wenders', genre: 'Drama', decade: '1980' },
  { id: 'm_80_9', title: 'Ran', year: 1985, director: 'Akira Kurosawa', genre: 'Ação/Drama', decade: '1980' },
  { id: 'm_80_10', title: 'Akira', year: 1988, director: 'Katsuhiro Otomo', genre: 'Animação/Cyberpunk', decade: '1980' },
  { id: 'm_80_11', title: 'Grave of the Fireflies (Túmulo dos Vagalumes)', year: 1988, director: 'Isao Takahata', genre: 'Animação/Guerra/Drama', decade: '1980' },
  { id: 'm_80_12', title: 'The Thing (O Enigma de Outro Mundo)', year: 1982, director: 'John Carpenter', genre: 'Terror/Ficção', decade: '1980' },
  { id: 'm_80_13', title: 'Amadeus', year: 1984, director: 'Milos Forman', genre: 'Drama/Música', decade: '1980' },
  { id: 'm_80_14', title: 'Scarface', year: 1983, director: 'Brian De Palma', genre: 'Policial/Drama', decade: '1980' },
  { id: 'm_80_15', title: 'Raiders of the Lost Ark (Os Caçadores da Arca Perdida)', year: 1981, director: 'Steven Spielberg', genre: 'Aventura', decade: '1980' },
  { id: 'm_80_16', title: 'Star Wars: Ep. V - The Empire Strikes Back (O Império Contra-Ataca)', year: 1980, director: 'Irvin Kershner', genre: 'Ficção Científica', decade: '1980' },
  { id: 'm_80_17', title: 'Brazil (Brazil: O Filme)', year: 1985, director: 'Terry Gilliam', genre: 'Ficção/Distopia', decade: '1980' },
  { id: 'm_80_18', title: 'This Is Spinal Tap', year: 1984, director: 'Rob Reiner', genre: 'Comédia/Mocumentário', decade: '1980' },
  { id: 'm_80_19', title: 'Full Metal Jacket (Nascido para Matar)', year: 1987, director: 'Stanley Kubrick', genre: 'Guerra/Drama', decade: '1980' },
  { id: 'm_80_20', title: 'Wings of Desire (As Asas do Desejo)', year: 1987, director: 'Wim Wenders', genre: 'Fantasia/Drama', decade: '1980' },
  { id: 'm_80_21', title: 'My Neighbor Totoro (Meu Vizinho Totoro)', year: 1988, director: 'Hayao Miyazaki', genre: 'Animação/Fantasia', decade: '1980' },
  { id: 'm_80_22', title: 'Die Hard (Duro de Matar)', year: 1988, director: 'John McTiernan', genre: 'Ação/Suspense', decade: '1980' },
  { id: 'm_80_23', title: 'Possession (Possessão)', year: 1981, director: 'Andrzej Żuławski', genre: 'Terror/Drama/Cult', decade: '1980' },
  { id: 'm_80_24', title: 'Videodrome (Videodrome: A Síndrome do Vídeo)', year: 1983, director: 'David Cronenberg', genre: 'Terror/Ficção', decade: '1980' },
  { id: 'm_80_25', title: 'Evil Dead II (Uma Noite Alucinante 2)', year: 1987, director: 'Sam Raimi', genre: 'Terror/Comédia', decade: '1980' },

  // 1990s
  { id: 'm_90_1', title: 'Pulp Fiction (Tempo de Violência)', year: 1994, director: 'Quentin Tarantino', genre: 'Policial/Drama', decade: '1990' },
  { id: 'm_90_2', title: 'The Shawshank Redemption (Um Sonho de Liberdade)', year: 1994, director: 'Frank Darabont', genre: 'Drama', decade: '1990' },
  { id: 'm_90_3', title: 'Schindler\'s List (A Lista de Schindler)', year: 1993, director: 'Steven Spielberg', genre: 'Guerra/Histórico', decade: '1990' },
  { id: 'm_90_4', title: 'Fight Club (Clube da Luta)', year: 1999, director: 'David Fincher', genre: 'Drama/Cult', decade: '1990' },
  { id: 'm_90_5', title: 'The Matrix', year: 1999, director: 'L. Wachowski, L. Wachowski', genre: 'Ficção Científica', decade: '1990' },
  { id: 'm_90_6', title: 'Se7en (Se7en: Os Sete Crimes Capitais)', year: 1995, director: 'David Fincher', genre: 'Policial/Suspense', decade: '1990' },
  { id: 'm_90_7', title: 'Goodfellas (Os Bons Companheiros)', year: 1990, director: 'Martin Scorsese', genre: 'Policial/Drama', decade: '1990' },
  { id: 'm_90_8', title: 'The Silence of the Lambs (O Silêncio dos Inocentes)', year: 1991, director: 'Jonathan Demme', genre: 'Suspense/Terror', decade: '1990' },
  { id: 'm_90_9', title: 'Chungking Express (Amores Expressos)', year: 1994, director: 'Wong Kar-wai', genre: 'Romance/Drama', decade: '1990' },
  { id: 'm_90_10', title: 'La Haine (O Ódio)', year: 1995, director: 'Mathieu Kassovitz', genre: 'Drama', decade: '1990' },
  { id: 'm_90_11', title: 'Fargo (Fargo: Uma Comédia de Erros)', year: 1996, director: 'Joel Coen, Ethan Coen', genre: 'Policial/Comédia', decade: '1990' },
  { id: 'm_90_12', title: 'Trainspotting (Sem Limites)', year: 1996, director: 'Danny Boyle', genre: 'Drama/Comédia', decade: '1990' },
  { id: 'm_90_13', title: 'Magnolia', year: 1999, director: 'Paul Thomas Anderson', genre: 'Drama', decade: '1990' },
  { id: 'm_90_14', title: 'Princess Mononoke (Princesa Mononoke)', year: 1997, director: 'Hayao Miyazaki', genre: 'Animação/Fantasia', decade: '1990' },
  { id: 'm_90_15', title: 'Perfect Blue', year: 1997, director: 'Satoshi Kon', genre: 'Animação/Suspense/Cult', decade: '1990' },
  { id: 'm_90_16', title: 'The Big Lebowski (O Grande Lebowski)', year: 1998, director: 'Joel Coen, Ethan Coen', genre: 'Comédia/Cult', decade: '1990' },
  { id: 'm_90_17', title: 'Office Space (Como Enlouquecer seu Chefe)', year: 1999, director: 'Mike Judge', genre: 'Comédia/Cult', decade: '1990' },
  { id: 'm_90_18', title: 'Twin Peaks: Fire Walk with Me', year: 1992, director: 'David Lynch', genre: 'Mistério/Terror', decade: '1990' },
  { id: 'm_90_19', title: 'Beau Travail', year: 1999, director: 'Claire Denis', genre: 'Drama', decade: '1990' },
  { id: 'm_90_20', title: 'Close-Up', year: 1990, director: 'Abbas Kiarostami', genre: 'Drama/Documentário', decade: '1990' },
  { id: 'm_90_21', title: 'Hoop Dreams', year: 1994, director: 'Steve James', genre: 'Documentário/Esporte', decade: '1990' },
  { id: 'm_90_22', title: 'Heat (Fogo Contra Fogo)', year: 1995, director: 'Michael Mann', genre: 'Ação/Policial', decade: '1990' },
  { id: 'm_90_23', title: 'Eyes Wide Shut (De Olhos Bem Fechados)', year: 1999, director: 'Stanley Kubrick', genre: 'Drama/Mistério', decade: '1990' },
  { id: 'm_90_24', title: 'Safe (Mal do Século)', year: 1995, director: 'Todd Haynes', genre: 'Drama/Suspense', decade: '1990' },
  { id: 'm_90_25', title: 'Rosetta', year: 1999, director: 'Jean-Pierre Dardenne, Luc Dardenne', genre: 'Drama', decade: '1990' },

  // 2000s
  { id: 'm_00_1', title: 'Spirited Away (A Viagem de Chihiro)', year: 2001, director: 'Hayao Miyazaki', genre: 'Animação/Fantasia', decade: '2000' },
  { id: 'm_00_2', title: 'Mulholland Drive (Cidade dos Sonhos)', year: 2001, director: 'David Lynch', genre: 'Mistério/Suspense', decade: '2000' },
  { id: 'm_00_3', title: 'Eternal Sunshine of the Spotless Mind', year: 2004, director: 'Michel Gondry', genre: 'Romance/Ficção', decade: '2000' },
  { id: 'm_00_4', title: 'City of God (Cidade de Deus)', year: 2002, director: 'Fernando Meirelles, Kátia Lund', genre: 'Policial/Drama', decade: '2000' },
  { id: 'm_00_5', title: 'No Country for Old Men (Onde os Fracos não Têm Vez)', year: 2007, director: 'Joel Coen, Ethan Coen', genre: 'Policial/Suspense', decade: '2000' },
  { id: 'm_00_6', title: 'There Will Be Blood (Sangue Negro)', year: 2007, director: 'Paul Thomas Anderson', genre: 'Drama', decade: '2000' },
  { id: 'm_00_7', title: 'Donnie Darko', year: 2001, director: 'Richard Kelly', genre: 'Ficção Científica/Cult', decade: '2000' },
  { id: 'm_00_8', title: 'In the Mood for Love (Amor à Flor da Pele)', year: 2000, director: 'Wong Kar-wai', genre: 'Romance/Drama', decade: '2000' },
  { id: 'm_00_9', title: 'Memento (Amnésia)', year: 2000, director: 'Christopher Nolan', genre: 'Suspense/Mistério', decade: '2000' },
  { id: 'm_00_10', title: 'Requiem for a Dream (Réquiem para um Sonho)', year: 2000, director: 'Darren Aronofsky', genre: 'Drama/Cult', decade: '2000' },
  { id: 'm_00_11', title: 'Yi Yi (As Coisas da Vida)', year: 2000, director: 'Edward Yang', genre: 'Drama', decade: '2000' },
  { id: 'm_00_12', title: 'Oldboy', year: 2003, director: 'Park Chan-wook', genre: 'Suspense/Ação', decade: '2000' },
  { id: 'm_00_13', title: 'Lost in Translation (Encontros e Desencontros)', year: 2003, director: 'Sofia Coppola', genre: 'Drama/Romance', decade: '2000' },
  { id: 'm_00_14', title: 'Caché (Caché / Escondido)', year: 2005, director: 'Michael Haneke', genre: 'Drama/Mistério', decade: '2000' },
  { id: 'm_00_15', title: 'Children of Men (Filhos da Esperança)', year: 2006, director: 'Alfonso Cuarón', genre: 'Ficção/Distopia', decade: '2000' },
  { id: 'm_00_16', title: 'The Dark Knight (Batman: O Cavaleiro das Trevas)', year: 2008, director: 'Christopher Nolan', genre: 'Ação/Policial', decade: '2000' },
  { id: 'm_00_17', title: 'Synecdoche, New York (Sinédoque, Nova York)', year: 2008, director: 'Charlie Kaufman', genre: 'Drama/Cult', decade: '2000' },
  { id: 'm_00_18', title: 'Inglourious Basterds (Bastardos Inglórios)', year: 2009, director: 'Quentin Tarantino', genre: 'Guerra/Aventura', decade: '2000' },
  { id: 'm_00_19', title: 'Pan\'s Labyrinth (O Labirinto do Fauno)', year: 2006, director: 'Guillermo del Toro', genre: 'Fantasia/Drama', decade: '2000' },
  { id: 'm_00_20', title: 'Brokeback Mountain (O Segredo de Brokeback Mountain)', year: 2005, director: 'Ang Lee', genre: 'Drama/Romance', decade: '2000' },
  { id: 'm_00_21', title: 'Punch-Drunk Love (Embriagado de Amor)', year: 2002, director: 'Paul Thomas Anderson', genre: 'Romance/Comédia/Drama', decade: '2000' },
  { id: 'm_00_22', title: 'The Lord of the Rings: Fellowship of the Ring', year: 2001, director: 'Peter Jackson', genre: 'Fantasia/Aventura', decade: '2000' },
  { id: 'm_00_23', title: 'WALL-E', year: 2008, director: 'Andrew Stanton', genre: 'Animação/Ficção', decade: '2000' },
  { id: 'm_00_24', title: 'Memories of Murder (Memórias de um Assassino)', year: 2003, director: 'Bong Joon Ho', genre: 'Policial/Mistério/Drama', decade: '2000' },
  { id: 'm_00_25', title: '28 Days Later (Extermínio)', year: 2002, director: 'Danny Boyle', genre: 'Terror/Ficção', decade: '2000' },

  // 2010s
  { id: 'm_10_1', title: 'Parasite (Parasita)', year: 2019, director: 'Bong Joon Ho', genre: 'Suspense/Drama', decade: '2010' },
  { id: 'm_10_2', title: 'Mad Max: Fury Road (Mad Max: Estrada da Fúria)', year: 2015, director: 'George Miller', genre: 'Ação/Ficção', decade: '2010' },
  { id: 'm_10_3', title: 'Whiplash (Whiplash: Em Busca da Perfeição)', year: 2014, director: 'Damien Chazelle', genre: 'Drama/Música', decade: '2010' },
  { id: 'm_10_4', title: 'Her (Ela)', year: 2013, director: 'Spike Jonze', genre: 'Romance/Ficção', decade: '2010' },
  { id: 'm_10_5', title: 'The Grand Budapest Hotel (O Grande Hotel Budapeste)', year: 2014, director: 'Wes Anderson', genre: 'Comédia/Drama', decade: '2010' },
  { id: 'm_10_6', title: 'Scott Pilgrim vs. the World (Scott Pilgrim Contra o Mundo)', year: 2010, director: 'Edgar Wright', genre: 'Ação/Comédia/Cult', decade: '2010' },
  { id: 'm_10_7', title: 'Portrait of a Lady on Fire (Retrato de uma Jovem em Chamas)', year: 2019, director: 'Céline Sciamma', genre: 'Drama/Romance', decade: '2010' },
  { id: 'm_10_8', title: 'Get Out (Corra!)', year: 2017, director: 'Jordan Peele', genre: 'Terror/Suspense', decade: '2010' },
  { id: 'm_10_9', title: 'Drive', year: 2011, director: 'Nicolas Winding Refn', genre: 'Ação/Policial/Cult', decade: '2010' },
  { id: 'm_10_10', title: 'Blade Runner 2049', year: 2017, director: 'Denis Villeneuve', genre: 'Ficção/Cyberpunk', decade: '2010' },
  { id: 'm_10_11', title: 'Interstellar (Interestelar)', year: 2014, director: 'Christopher Nolan', genre: 'Ficção/Aventura', decade: '2010' },
  { id: 'm_10_12', title: 'Roma', year: 2018, director: 'Alfonso Cuarón', genre: 'Drama', decade: '2010' },
  { id: 'm_10_13', title: 'Moonlight (Moonlight: Sob a Luz do Luar)', year: 2016, director: 'Barry Jenkins', genre: 'Drama', decade: '2010' },
  { id: 'm_10_14', title: 'The Social Network (A Rede Social)', year: 2010, director: 'David Fincher', genre: 'Drama/Biografia', decade: '2010' },
  { id: 'm_10_15', title: 'Shoplifters (Assunto de Família)', year: 2018, director: 'Hirokazu Kore-eda', genre: 'Drama', decade: '2010' },
  { id: 'm_10_16', title: 'Under the Skin (Sob a Pele)', year: 2013, director: 'Jonathan Glazer', genre: 'Ficção/Terror/Cult', decade: '2010' },
  { id: 'm_10_17', title: 'The Tree of Life (A Árvore da Vida)', year: 2011, director: 'Terrence Malick', genre: 'Drama/Poético', decade: '2010' },
  { id: 'm_10_18', title: 'First Reformed (No Coração da Escuridão)', year: 2017, director: 'Paul Schrader', genre: 'Drama', decade: '2010' },
  { id: 'm_10_19', title: 'The Act of Killing (O Ato de Matar)', year: 2012, director: 'Joshua Oppenheimer', genre: 'Documentário', decade: '2010' },
  { id: 'm_10_20', title: 'Phantom Thread (Trama Fantasma)', year: 2017, director: 'Paul Thomas Anderson', genre: 'Drama/Romance', decade: '2010' },
  { id: 'm_10_21', title: 'Inside Llewyn Davis (Balada de um Homem Comum)', year: 2013, director: 'Joel Coen, Ethan Coen', genre: 'Drama/Música', decade: '2010' },
  { id: 'm_10_22', title: 'Carol', year: 2015, director: 'Todd Haynes', genre: 'Drama/Romance', decade: '2010' },
  { id: 'm_10_23', title: 'Arrival (A Chegada)', year: 2016, director: 'Denis Villeneuve', genre: 'Ficção/Mistério', decade: '2010' },
  { id: 'm_10_24', title: 'Midsommar (Midsommar: O Mal Não Espera a Noite)', year: 2019, director: 'Ari Aster', genre: 'Terror/Cult', decade: '2010' },
  { id: 'm_10_25', title: 'Spider-Man: Into the Spider-Verse', year: 2018, director: 'B. Persichetti, P. Ramsey, R. Rothman', genre: 'Animação/Ação', decade: '2010' },

  // 2020s
  { id: 'm_20_1', title: 'Everything Everywhere All at Once (Tudo em Todo o Lugar ao Mesmo Tempo)', year: 2022, director: 'Daniel Kwan, Daniel Scheinert', genre: 'Ficção/Aventura', decade: '2020' },
  { id: 'm_20_2', title: 'Oppenheimer', year: 2023, director: 'Christopher Nolan', genre: 'Histórico/Biografia/Drama', decade: '2020' },
  { id: 'm_20_3', title: 'Dune: Part Two (Duna: Parte 2)', year: 2024, director: 'Denis Villeneuve', genre: 'Ficção/Aventura', decade: '2020' },
  { id: 'm_20_4', title: 'Past Lives (Vidas Passadas)', year: 2023, director: 'Celine Song', genre: 'Drama/Romance', decade: '2020' },
  { id: 'm_20_5', title: 'Drive My Car', year: 2021, director: 'Ryusuke Hamaguchi', genre: 'Drama', decade: '2020' },
  { id: 'm_20_6', title: 'Tár', year: 2022, director: 'Todd Field', genre: 'Drama/Música', decade: '2020' },
  { id: 'm_20_7', title: 'The Zone of Interest (Zona de Interesse)', year: 2023, director: 'Jonathan Glazer', genre: 'Histórico/Drama', decade: '2020' },
  { id: 'm_20_8', title: 'Aftersun', year: 2022, director: 'Charlotte Wells', genre: 'Drama', decade: '2020' },
  { id: 'm_20_9', title: 'Anatomy of a Fall (Anatomia de uma Queda)', year: 2023, director: 'Justine Triet', genre: 'Drama/Mistério', decade: '2020' },
  { id: 'm_20_10', title: 'Poor Things (Pobres Criaturas)', year: 2023, director: 'Yorgos Lanthimos', genre: 'Fantasia/Comédia/Drama', decade: '2020' },
  { id: 'm_20_11', title: 'Spider-Man: Across the Spider-Verse', year: 2023, director: 'J. Dos Santos, K. Powers, J. K. Thompson', genre: 'Animação/Ação', decade: '2020' },
  { id: 'm_20_12', title: 'Perfect Days (Dias Perfeitos)', year: 2023, director: 'Wim Wenders', genre: 'Drama', decade: '2020' },
  { id: 'm_20_13', title: 'The Boy and the Heron (O Menino e a Garça)', year: 2023, director: 'Hayao Miyazaki', genre: 'Animação/Fantasia', decade: '2020' },
  { id: 'm_20_14', title: 'Decision to Leave (Decisão de Partir)', year: 2022, director: 'Park Chan-wook', genre: 'Suspense/Romance', decade: '2020' },
  { id: 'm_20_15', title: 'RRR (Revolta, Rebelde, Revolução)', year: 2022, director: 'S. S. Rajamouli', genre: 'Ação/Drama', decade: '2020' },
  { id: 'm_20_16', title: 'The Banshees of Inisherin (Os Banshees de Inisherin)', year: 2022, director: 'Martin McDonagh', genre: 'Drama/Comédia', decade: '2020' },
  { id: 'm_20_17', title: 'Triangle of Sadness (Triângulo da Tristeza)', year: 2022, director: 'Ruben Östlund', genre: 'Comédia/Sátira', decade: '2020' },
  { id: 'm_20_18', title: 'Minari (Minari: Em Busca da Felicidade)', year: 2020, director: 'Lee Isaac Chung', genre: 'Drama', decade: '2020' },
  { id: 'm_20_19', title: 'Nomadland', year: 2020, director: 'Chloé Zhao', genre: 'Drama', decade: '2020' },
  { id: 'm_20_20', title: 'Licorice Pizza', year: 2021, director: 'Paul Thomas Anderson', genre: 'Comédia/Drama', decade: '2020' },
  { id: 'm_20_21', title: 'The Worst Person in the World (A Pior Pessoa do Mundo)', year: 2021, director: 'Joachim Trier', genre: 'Drama/Romance', decade: '2020' },
  { id: 'm_20_22', title: 'Killers of the Flower Moon (Assassinos da Lua de Flores)', year: 2023, director: 'Martin Scorsese', genre: 'Histórico/Policial/Drama', decade: '2020' },
  { id: 'm_20_23', title: 'Furiosa: A Mad Max Saga', year: 2024, director: 'George Miller', genre: 'Ação/Ficção', decade: '2020' },
  { id: 'm_20_24', title: 'Challengers (Rivais)', year: 2024, director: 'Luca Guadagnino', genre: 'Drama/Esporte', decade: '2020' },
  { id: 'm_20_25', title: 'Civil War (Guerra Civil)', year: 2024, director: 'Alex Garland', genre: 'Drama/Ação', decade: '2020' }
];

// Base de Dados de Artistas e suas Discografias Essenciais (30 Artistas baseados na história + Last.fm)
const ARTISTS_DATABASE = [
  {
    name: 'Tame Impala',
    genre: 'Psicodélico / Indie Pop',
    albums: [
      { title: 'InnerSpeaker', year: 2010 },
      { title: 'Lonerism', year: 2012 },
      { title: 'Currents', year: 2015 },
      { title: 'The Slow Rush', year: 2020 }
    ]
  },
  {
    name: 'The Beatles',
    genre: 'Classic Rock / Pop',
    albums: [
      { title: 'Rubber Soul', year: 1965 },
      { title: 'Revolver', year: 1966 },
      { title: 'Sgt. Pepper\'s Lonely Hearts Club Band', year: 1967 },
      { title: 'The Beatles (White Album)', year: 1968 },
      { title: 'Abbey Road', year: 1969 }
    ]
  },
  {
    name: 'Milton Nascimento & Lô Borges',
    genre: 'MPB / Clube da Esquina',
    albums: [
      { title: 'Clube da Esquina', year: 1972 },
      { title: 'Milagre dos Peixes', year: 1973 },
      { title: 'Minas', year: 1975 },
      { title: 'Geraes', year: 1976 }
    ]
  },
  {
    name: 'Clairo',
    genre: 'Bedroom Pop / Indie',
    albums: [
      { title: 'Immunity', year: 2019 },
      { title: 'Sling', year: 2021 },
      { title: 'Charm', year: 2024 }
    ]
  },
  {
    name: 'Jorge Ben Jor',
    genre: 'MPB / Samba Rock / Groove',
    albums: [
      { title: 'Samba Esquema Novo', year: 1963 },
      { title: 'Fôrça Bruta', year: 1970 },
      { title: 'A Tábua de Esmeralda', year: 1974 },
      { title: 'África Brasil', year: 1976 }
    ]
  },
  {
    name: 'Radiohead',
    genre: 'Art Rock / Alternative',
    albums: [
      { title: 'The Bends', year: 1995 },
      { title: 'OK Computer', year: 1997 },
      { title: 'Kid A', year: 2000 },
      { title: 'In Rainbows', year: 2007 }
    ]
  },
  {
    name: 'Caetano Veloso',
    genre: 'MPB / Tropicália',
    albums: [
      { title: 'Caetano Veloso (Tropicália)', year: 1968 },
      { title: 'Transa', year: 1972 },
      { title: 'Cinema Transcendental', year: 1979 },
      { title: 'Velô', year: 1984 }
    ]
  },
  {
    name: 'Arctic Monkeys',
    genre: 'Indie Rock',
    albums: [
      { title: 'Whatever People Say I Am, That\'s What I\'m Not', year: 2006 },
      { title: 'Favourite Worst Nightmare', year: 2007 },
      { title: 'Humbug', year: 2009 },
      { title: 'AM', year: 2013 },
      { title: 'Tranquility Base Hotel & Casino', year: 2018 }
    ]
  },
  {
    name: 'Pink Floyd',
    genre: 'Progressive Rock',
    albums: [
      { title: 'The Dark Side of the Moon', year: 1973 },
      { title: 'Wish You Were Here', year: 1975 },
      { title: 'Animals', year: 1977 },
      { title: 'The Wall', year: 1979 }
    ]
  },
  {
    name: 'Novos Baianos',
    genre: 'MPB / Rock / Samba',
    albums: [
      { title: 'É Ferro na Boneca', year: 1970 },
      { title: 'Acabou Chorare', year: 1972 },
      { title: 'Novos Baianos F.C.', year: 1973 }
    ]
  },
  {
    name: 'Frank Ocean',
    genre: 'Alternative R&B / Soul',
    albums: [
      { title: 'nostalgia, ULTRA.', year: 2011 },
      { title: 'Channel Orange', year: 2012 },
      { title: 'Blonde', year: 2016 }
    ]
  },
  {
    name: 'The Smiths',
    genre: 'Indie Rock / Post-Punk',
    albums: [
      { title: 'The Smiths', year: 1984 },
      { title: 'Meat Is Murder', year: 1985 },
      { title: 'The Queen Is Dead', year: 1986 },
      { title: 'Strangeways, Here We Come', year: 1987 }
    ]
  },
  {
    name: 'Chico Buarque',
    genre: 'MPB',
    albums: [
      { title: 'Chico Buarque de Holanda N. 4', year: 1970 },
      { title: 'Construção', year: 1971 },
      { title: 'Meus Caros Amigos', year: 1976 },
      { title: 'Vida', year: 1980 }
    ]
  },
  {
    name: 'Daft Punk',
    genre: 'Electronic / Synth-Pop',
    albums: [
      { title: 'Discovery', year: 2001 },
      { title: 'Random Access Memories', year: 2013 }
    ]
  },
  {
    name: 'Tim Maia',
    genre: 'Soul / Funk Brasileiro',
    albums: [
      { title: 'Tim Maia (1970)', year: 1970 },
      { title: 'Tim Maia (1971)', year: 1971 },
      { title: 'Tim Maia Racional, Vol. 1', year: 1975 }
    ]
  },
  {
    name: 'Kendrick Lamar',
    genre: 'Hip-Hop',
    albums: [
      { title: 'Section.80', year: 2011 },
      { title: 'Good Kid, M.A.A.D City', year: 2012 },
      { title: 'To Pimp a Butterfly', year: 2015 },
      { title: 'DAMN.', year: 2017 }
    ]
  },
  {
    name: 'David Bowie',
    genre: 'Art Rock / Glam Rock',
    albums: [
      { title: 'Hunky Dory', year: 1971 },
      { title: 'The Rise and Fall of Ziggy Stardust', year: 1972 },
      { title: 'Low', year: 1977 },
      { title: 'Blackstar', year: 2016 }
    ]
  },
  {
    name: 'Gal Costa',
    genre: 'MPB / Tropicália',
    albums: [
      { title: 'Gal Costa', year: 1969 },
      { title: 'Gal', year: 1969 },
      { title: 'Índia', year: 1973 }
    ]
  },
  {
    name: 'The Strokes',
    genre: 'Indie Rock',
    albums: [
      { title: 'Is This It', year: 2001 },
      { title: 'Room on Fire', year: 2003 },
      { title: 'The New Abnormal', year: 2020 }
    ]
  },
  {
    name: 'Gilberto Gil',
    genre: 'MPB / Tropicália',
    albums: [
      { title: 'Gilberto Gil (1968)', year: 1968 },
      { title: 'Expresso 2222', year: 1972 },
      { title: 'Refazenda', year: 1975 },
      { title: 'Refavela', year: 1977 }
    ]
  },
  {
    name: 'Tyler, The Creator',
    genre: 'Alternative Hip-Hop / Soul',
    albums: [
      { title: 'Flower Boy', year: 2017 },
      { title: 'IGOR', year: 2019 },
      { title: 'Call Me If You Get Lost', year: 2021 }
    ]
  },
  {
    name: 'Elis Regina',
    genre: 'MPB / Jazz',
    albums: [
      { title: 'Elis (1972)', year: 1972 },
      { title: 'Elis & Tom', year: 1974 },
      { title: 'Falso Brilhante', year: 1976 }
    ]
  },
  {
    name: 'Led Zeppelin',
    genre: 'Classic Rock',
    albums: [
      { title: 'Led Zeppelin II', year: 1969 },
      { title: 'Led Zeppelin IV', year: 1971 },
      { title: 'Houses of the Holy', year: 1973 }
    ]
  },
  {
    name: 'Belchior',
    genre: 'MPB / Folk Rock',
    albums: [
      { title: 'Alucinação', year: 1976 },
      { title: 'Coração Selvagem', year: 1977 }
    ]
  },
  {
    name: 'Gorillaz',
    genre: 'Alternative Pop / Synth',
    albums: [
      { title: 'Gorillaz', year: 2001 },
      { title: 'Demon Days', year: 2005 },
      { title: 'Plastic Beach', year: 2010 }
    ]
  },
  {
    name: 'Racionais MC\'s',
    genre: 'Hip-Hop Brasileiro',
    albums: [
      { title: 'Raio X Brasil', year: 1993 },
      { title: 'Sobrevivendo no Inferno', year: 1997 },
      { title: 'Nada como um Dia após o Outro Dia', year: 2002 }
    ]
  },
  {
    name: 'Stevie Wonder',
    genre: 'Soul / Funk / R&B',
    albums: [
      { title: 'Talking Book', year: 1972 },
      { title: 'Innervisions', year: 1973 },
      { title: 'Songs in the Key of Life', year: 1976 }
    ]
  },
  {
    name: 'Secos & Molhados',
    genre: 'Rock Progressivo / MPB',
    albums: [
      { title: 'Secos & Molhados', year: 1973 },
      { title: 'Secos & Molhados II', year: 1974 }
    ]
  },
  {
    name: 'Miles Davis',
    genre: 'Jazz',
    albums: [
      { title: 'Kind of Blue', year: 1959 },
      { title: 'Bitches Brew', year: 1970 }
    ]
  },
  {
    name: 'Marcos Valle',
    genre: 'MPB / Jazz / Bossa',
    albums: [
      { title: 'Garra', year: 1971 },
      { title: 'Previsão do Tempo', year: 1973 }
    ]
  }
];

// Configuração do Estado Inicial
let appState = {
  currentWeek: {
    sab: [], // [{ id, type, completed: bool, postponed: bool }] - O Ciclo inicia no SÁBADO!
    dom: [],
    seg: [],
    ter: [],
    qua: [],
    qui: [],
    sex: []
  },
  history: [], // [{ id, itemId, type, title, artistOrDirector, date, rating, notes }]
  ratings: {}, // { itemId: { rating, notes, date } }
  comicsCurrentTitle: 'The Amazing Spider-Man',
  comicsIssuesRead: 0,
  comicsTotalIssuesRead: 0,
  showsCurrentShow: 'Soul Eater',
  showsQueue: ['Hunter x Hunter', 'The Sopranos', 'Breaking Bad', 'Neon Genesis Evangelion', 'The Wire', 'Fullmetal Alchemist: Brotherhood', 'Monster', 'Twin Peaks', 'Attack on Titan', 'Death Note', 'Chernobyl', 'Cowboy Bebop', 'Frieren: Beyond Journey\'s End', 'Mad Men', 'Steins;Gate'],
  
  // NOVAS VARIÁVEIS DE DISCOGRAFIA POR ARTISTA
  musicActiveArtist: {
    name: 'Tame Impala',
    genre: 'Psicodélico / Indie Pop',
    albums: [
      { title: 'InnerSpeaker', year: 2010, rating: null, notes: '' },
      { title: 'Lonerism', year: 2012, rating: null, notes: '' },
      { title: 'Currents', year: 2015, rating: null, notes: '' },
      { title: 'The Slow Rush', year: 2020, rating: null, notes: '' }
    ]
  },
  musicQueue: ['The Beatles', 'Milton Nascimento & Lô Borges', 'Clairo', 'Jorge Ben Jor', 'Radiohead', 'Caetano Veloso', 'Arctic Monkeys', 'Pink Floyd', 'Novos Baianos', 'Frank Ocean', 'The Smiths', 'Chico Buarque', 'Daft Punk', 'Tim Maia', 'Kendrick Lamar', 'David Bowie', 'Gal Costa', 'The Strokes', 'Gilberto Gil', 'Tyler, The Creator', 'Elis Regina', 'Led Zeppelin', 'Belchior', 'Gorillaz', 'Racionais MC\'s', 'Stevie Wonder', 'Secos & Molhados', 'Miles Davis', 'Marcos Valle']
};

// Ordem dos dias no ciclo de enriquecimento cultural
const CYCLE_DAYS = ['sab', 'dom', 'seg', 'ter', 'qua', 'qui', 'sex'];

// Dias da semana para ordenação e display (iniciando no sábado)
const DAYS_OF_WEEK = {
  sab: 'Sábado',
  dom: 'Domingo',
  seg: 'Segunda-feira',
  ter: 'Terça-feira',
  qua: 'Quarta-feira',
  qui: 'Quinta-feira',
  sex: 'Sexta-feira'
};

// Retorna a chave do dia atual (ex: 'sab')
function getCurrentDayKey() {
  const days = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  return days[new Date().getDay()];
}

// Retorna os dias do ciclo visíveis no dashboard (Apenas Sábado e Domingo)
function getVisibleDays() {
  const todayKey = getCurrentDayKey();
  
  if (todayKey === 'sab') {
    return ['sab'];
  }
  // Se for domingo ou qualquer outro dia da semana, mostra Sábado e Domingo
  return ['sab', 'dom'];
}

// Retorna a data do sábado mais recente no formato YYYY-MM-DD
function getMostRecentSaturday(date = new Date()) {
  const d = new Date(date);
  const day = d.getDay(); // 0: dom, 1: seg, ..., 6: sab
  const diff = (day === 6) ? 0 : (day + 1);
  d.setDate(d.getDate() - diff);
  
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

// Verifica se iniciamos um novo ciclo semanal (rolagem para novo sábado)
function checkWeekRollover() {
  const currentSaturday = getMostRecentSaturday();
  if (!appState.weekStartDate) {
    // Se a agenda atual tiver itens, vamos limpar para forçar a virada de semana da migração
    const hasItems = CYCLE_DAYS.some(day => appState.currentWeek[day] && appState.currentWeek[day].length > 0);
    appState.weekStartDate = currentSaturday;
    if (hasItems) {
      console.log("Migração detectada: limpando agenda antiga de filmes.");
      resetWeek();
      autoFillWeek();
    } else {
      saveState();
    }
  } else if (appState.weekStartDate !== currentSaturday) {
    console.log("Novo ciclo semanal detectado. Reiniciando agenda de filmes para o novo fim de semana.");
    resetWeek();
    appState.weekStartDate = currentSaturday;
    autoFillWeek();
  }
}

// Carrega o estado do localStorage
function loadState() {
  const saved = localStorage.getItem('repertorio_cultural_state');
  if (saved) {
    try {
      appState = JSON.parse(saved);
      if (!appState.currentWeek) resetWeek();
      
      // Ajustar chaves se carregado de versão antiga (conversão de seg-dom para sab-sex)
      const keys = Object.keys(appState.currentWeek);
      if (keys.length > 0 && keys[0] !== 'sab') {
        const migratedWeek = { sab: [], dom: [], seg: [], ter: [], qua: [], qui: [], sex: [] };
        CYCLE_DAYS.forEach(day => {
          migratedWeek[day] = appState.currentWeek[day] || [];
        });
        appState.currentWeek = migratedWeek;
      }

      if (!appState.history) appState.history = [];
      if (!appState.ratings) appState.ratings = {};
      
      // Carregando variáveis de HQ e Séries
      if (appState.comicsCurrentTitle === undefined) appState.comicsCurrentTitle = 'The Amazing Spider-Man';
      if (appState.comicsIssuesRead === undefined) appState.comicsIssuesRead = 0;
      if (appState.comicsTotalIssuesRead === undefined) appState.comicsTotalIssuesRead = 0;
      if (appState.showsCurrentShow === undefined) appState.showsCurrentShow = 'Soul Eater';
      if (appState.showsQueue === undefined) {
        appState.showsQueue = ['Hunter x Hunter', 'The Sopranos', 'Breaking Bad', 'Neon Genesis Evangelion', 'The Wire', 'Fullmetal Alchemist: Brotherhood', 'Monster', 'Twin Peaks', 'Attack on Titan', 'Death Note', 'Chernobyl', 'Cowboy Bebop', 'Frieren: Beyond Journey\'s End', 'Mad Men', 'Steins;Gate'];
      }

      // Migração e carregamento das chaves de música
      if (appState.musicActiveArtist === undefined) {
        appState.musicActiveArtist = {
          name: 'Tame Impala',
          genre: 'Psicodélico / Indie Pop',
          albums: [
            { title: 'InnerSpeaker', year: 2010, rating: null, notes: '' },
            { title: 'Lonerism', year: 2012, rating: null, notes: '' },
            { title: 'Currents', year: 2015, rating: null, notes: '' },
            { title: 'The Slow Rush', year: 2020, rating: null, notes: '' }
          ]
        };
      }
      if (appState.musicQueue === undefined) {
        appState.musicQueue = ['The Beatles', 'Milton Nascimento & Lô Borges', 'Clairo', 'Jorge Ben Jor', 'Radiohead', 'Caetano Veloso', 'Arctic Monkeys', 'Pink Floyd', 'Novos Baianos', 'Frank Ocean', 'The Smiths', 'Chico Buarque', 'Daft Punk', 'Tim Maia', 'Kendrick Lamar', 'David Bowie', 'Gal Costa', 'The Strokes', 'Gilberto Gil', 'Tyler, The Creator', 'Elis Regina', 'Led Zeppelin', 'Belchior', 'Gorillaz', 'Racionais MC\'s', 'Stevie Wonder', 'Secos & Molhados', 'Miles Davis', 'Marcos Valle'];
      }

      // Verifica se houve rolagem de semana
      checkWeekRollover();

    } catch (e) {
      console.error('Erro ao ler estado do localStorage, iniciando limpo.', e);
    }
  } else {
    resetWeek();
    appState.weekStartDate = getMostRecentSaturday();
    autoFillWeek();
  }
}

// Salva o estado no localStorage
function saveState() {
  localStorage.setItem('repertorio_cultural_state', JSON.stringify(appState));
  
  // Auto-sync upload silencioso se habilitado
  const autoSync = localStorage.getItem('cloud_auto_sync') === 'true';
  if (autoSync) {
    uploadToCloud(true);
  }
}

// Reseta a agenda semanal (agora focada apenas em filmes para o fim de semana)
function resetWeek() {
  appState.currentWeek = {
    sab: [], dom: [], seg: [], ter: [], qua: [], qui: [], sex: []
  };
  saveState();
}

// Busca item de filme pelo ID
function findItem(itemId) {
  if (itemId.startsWith('m_')) {
    return MOVIES_DATABASE.find(m => m.id === itemId);
  }
  return null;
}

// Verifica se o filme já foi assistido
function isConsumed(itemId) {
  return appState.ratings[itemId] !== undefined;
}

// Auto-preenche os 2 filmes do fim de semana
function autoFillWeek(force = false) {
  const hasMoviesInWeek = ['sab', 'dom'].some(day => 
    appState.currentWeek[day] && appState.currentWeek[day].some(i => i.type === 'movie')
  );

  if (hasMoviesInWeek && !force) {
    if (confirm("Você já tem filmes agendados para este fim de semana. Deseja limpar a agenda atual e sortear 2 novos filmes?")) {
      // Limpa os filmes agendados de sab/dom
      ['sab', 'dom'].forEach(day => {
        if (appState.currentWeek[day]) {
          appState.currentWeek[day] = appState.currentWeek[day].filter(i => i.type !== 'movie');
        }
      });
      autoFillWeek(true);
      return;
    } else {
      return;
    }
  }

  const availableMovies = MOVIES_DATABASE.filter(m => !isConsumed(m.id));

  function getRandomItems(pool, count) {
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Preencher Sábado e Domingo com 1 filme por dia (se vazio)
  const weekendDays = ['sab', 'dom'];
  const sampledMoviesWeekend = getRandomItems(availableMovies.length > 2 ? availableMovies : MOVIES_DATABASE, 2);

  weekendDays.forEach((day, idx) => {
    if (!appState.currentWeek[day]) appState.currentWeek[day] = [];
    const hasMovie = appState.currentWeek[day].some(i => i.type === 'movie');
    if (!hasMovie) {
      const movie = sampledMoviesWeekend[idx];
      if (movie) {
        appState.currentWeek[day].push({ id: movie.id, type: 'movie', completed: false, postponed: false });
      }
    }
  });

  saveState();
  renderAll();
}

// Agenda um filme específico para um dia da semana (normalmente sáb/dom)
function scheduleItem(itemId, type, day) {
  if (!appState.currentWeek[day]) return false;
  
  const exists = appState.currentWeek[day].some(i => i.id === itemId);
  if (!exists) {
    appState.currentWeek[day].push({ id: itemId, type: type, completed: false, postponed: false });
    saveState();
    renderAll();
    return true;
  }
  return false;
}

// Remove filme agendado
function unscheduleItem(day, itemId) {
  if (!appState.currentWeek[day]) return;
  appState.currentWeek[day] = appState.currentWeek[day].filter(i => i.id !== itemId);
  saveState();
  renderAll();
}

// Adiar filme (Deixar para depois)
function postponeItem(day, itemId) {
  if (!appState.currentWeek[day]) return;
  appState.currentWeek[day].forEach(i => {
    if (i.id === itemId) {
      i.postponed = true;
      i.completed = false;
    }
  });
  saveState();
  renderAll();
}

// Reativar filme adiado
function reactivateItem(day, itemId) {
  if (!appState.currentWeek[day]) return;
  appState.currentWeek[day].forEach(i => {
    if (i.id === itemId) {
      i.postponed = false;
      i.completed = false;
    }
  });
  saveState();
  renderAll();
}

// Substitui um filme agendado por outro aleatório
function replaceScheduledItem(day, itemId) {
  const item = findItem(itemId);
  if (!item) return;

  const availableMovies = MOVIES_DATABASE.filter(m => !isConsumed(m.id));
  
  // Evitar duplicar agendados
  const scheduledIds = [];
  for (let d in appState.currentWeek) {
    appState.currentWeek[d].forEach(i => scheduledIds.push(i.id));
  }
  
  const pool = availableMovies.filter(x => !scheduledIds.includes(x.id));
  const finalPool = pool.length > 0 ? pool : (availableMovies.length > 0 ? availableMovies : MOVIES_DATABASE);
  
  const randomMovie = finalPool[Math.floor(Math.random() * finalPool.length)];
  if (!randomMovie) return;

  if (appState.currentWeek[day]) {
    appState.currentWeek[day].forEach(i => {
      if (i.id === itemId) {
        i.id = randomMovie.id;
        i.completed = false;
        i.postponed = false;
      }
    });
  }

  saveState();
  renderAll();
}

// --- CONTROLE DE MÚSICA (DISCOGRAFIAS POR ARTISTA) ---

// Define artista ativo no dashboard
function setActiveArtistByName(artistName) {
  const dbTemplate = ARTISTS_DATABASE.find(a => a.name.toLowerCase() === artistName.toLowerCase());
  if (dbTemplate) {
    appState.musicActiveArtist = {
      name: dbTemplate.name,
      genre: dbTemplate.genre,
      albums: dbTemplate.albums.map(al => ({
        title: al.title,
        year: al.year,
        rating: null,
        notes: ''
      }))
    };
  } else {
    // Caso o usuário insira um artista que não está na curadoria
    appState.musicActiveArtist = {
      name: artistName,
      genre: 'Personalizado',
      albums: []
    };
  }
}

// Abre avaliação para um álbum do artista ativo
function openRatingModalForAlbum(albumTitle, albumYear) {
  const artistName = appState.musicActiveArtist.name;
  const fullTitle = `${albumTitle} (${artistName})`;
  openRatingModalForSpecial('artist_album', fullTitle, `Disco de ${artistName} (${albumYear})`);
}

// Adiciona um álbum personalizado à discografia ativa
function addCustomAlbumToActiveArtist() {
  const title = prompt('Nome do álbum:');
  if (!title || !title.trim()) return;
  const yearStr = prompt('Ano de lançamento:', new Date().getFullYear());
  const year = parseInt(yearStr) || new Date().getFullYear();

  appState.musicActiveArtist.albums.push({
    title: title.trim(),
    year: year,
    rating: null,
    notes: ''
  });
  
  saveState();
  renderAll();
}

// Concluir e avaliar a discografia do artista ativo (salva média no histórico)
function completeActiveArtist() {
  const artist = appState.musicActiveArtist;
  const ratedAlbums = artist.albums.filter(a => a.rating !== null);
  
  if (ratedAlbums.length === 0) {
    alert('Você precisa ouvir e avaliar pelo menos um álbum antes de concluir a discografia!');
    return;
  }

  const sum = ratedAlbums.reduce((acc, curr) => acc + curr.rating, 0);
  const avg = (sum / ratedAlbums.length).toFixed(1);

  if (confirm(`Deseja concluir a discografia de "${artist.name}" com média global de ${avg}/10?`)) {
    const today = new Date().toLocaleDateString('pt-BR');
    
    const historyEntry = {
      id: 'hist_art_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      itemId: 'artist_' + Date.now(),
      type: 'artist',
      title: artist.name,
      artistOrDirector: `Discografia (${ratedAlbums.length} discos)`,
      date: today,
      rating: parseFloat(avg),
      notes: `Média da Discografia: ${avg}/10. Álbuns: ${ratedAlbums.map(a => `${a.title} (${a.rating})`).join(', ')}`
    };
    
    appState.history.unshift(historyEntry);

    // Puxa próximo artista da fila
    if (appState.musicQueue.length > 0) {
      const nextArtistName = appState.musicQueue.shift();
      setActiveArtistByName(nextArtistName);
    } else {
      appState.musicActiveArtist = null;
    }

    saveState();
    renderAll();
  }
}

// Editar artista ativo manualmente
function changeActiveArtistManually() {
  const newName = prompt('Qual artista/banda você quer escutar agora?', appState.musicActiveArtist ? appState.musicActiveArtist.name : '');
  if (newName !== null && newName.trim() !== '') {
    setActiveArtistByName(newName.trim());
    saveState();
    renderAll();
  }
}

// Adicionar artista à fila de espera
function addArtistToQueue() {
  const input = document.getElementById('new-artist-input');
  if (!input) return;
  const val = input.value.trim();
  if (val) {
    appState.musicQueue.push(val);
    input.value = '';
    saveState();
    renderAll();
  }
}

// Remover artista da fila de espera
function removeArtistFromQueue(idx) {
  appState.musicQueue.splice(idx, 1);
  saveState();
  renderAll();
}

// --- CONTROLE DE HQs & SÉRIES ---

// Incrementar Edições de HQs Lidas
function incrementComicIssues(amount) {
  appState.comicsIssuesRead = Math.max(0, appState.comicsIssuesRead + amount);
  if (amount > 0) {
    appState.comicsTotalIssuesRead = (appState.comicsTotalIssuesRead || 0) + amount;
  }
  saveState();
  renderAll();
}

// Mudar título do quadrinho atual
function updateComicTitle() {
  const newTitle = prompt('Qual quadrinho você está lendo agora?', appState.comicsCurrentTitle);
  if (newTitle !== null && newTitle.trim() !== '') {
    appState.comicsCurrentTitle = newTitle.trim();
    saveState();
    renderAll();
  }
}

// Concluir e Avaliar Quadrinho
function completeComicTitle() {
  const title = appState.comicsCurrentTitle;
  const issues = appState.comicsIssuesRead;
  
  if (confirm(`Deseja concluir a leitura de "${title}" com ${issues} edições lidas e avaliá-lo?`)) {
    openRatingModalForSpecial('comic', title, `Quadrinho - ${issues} edições lidas`);
  }
}

// Incrementar/Sugerir Séries & Animes
function addShowToQueue() {
  const input = document.getElementById('new-show-input');
  if (!input) return;
  const val = input.value.trim();
  if (val) {
    appState.showsQueue.push(val);
    input.value = '';
    saveState();
    renderAll();
  }
}

// Remover Série da Fila
function removeShowFromQueue(idx) {
  appState.showsQueue.splice(idx, 1);
  saveState();
  renderAll();
}

// Concluir Série/Anime atual
function completeCurrentShow() {
  const title = appState.showsCurrentShow;
  if (confirm(`Deseja concluir e avaliar a série/anime "${title}"?`)) {
    openRatingModalForSpecial('show', title, 'Série / Anime');
  }
}

// Editar série atual manualmente
function changeCurrentShowManually() {
  const newShow = prompt('Qual série/anime você está assistindo agora?', appState.showsCurrentShow);
  if (newShow !== null && newShow.trim() !== '') {
    appState.showsCurrentShow = newShow.trim();
    saveState();
    renderAll();
  }
}

// --- CONSUMO GERAL ---

// Consumir e avaliar obra (Filme padrão)
function consumeItem(itemId, rating, notes) {
  const item = findItem(itemId);
  if (!item) return;

  const today = new Date().toLocaleDateString('pt-BR');

  // Adiciona ao registro de avaliações
  appState.ratings[itemId] = {
    rating: parseFloat(rating),
    notes: notes,
    date: today
  };

  // Se o item estava agendado na semana corrente, marca como concluído
  for (let day in appState.currentWeek) {
    appState.currentWeek[day].forEach(schItem => {
      if (schItem.id === itemId) {
        schItem.completed = true;
        schItem.postponed = false;
      }
    });
  }

  // Adiciona ao histórico cronológico
  const historyIdx = appState.history.findIndex(h => h.itemId === itemId);
  const historyEntry = {
    id: 'hist_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    itemId: itemId,
    type: 'movie',
    title: item.title,
    artistOrDirector: item.director,
    date: today,
    rating: parseFloat(rating),
    notes: notes
  };

  if (historyIdx >= 0) {
    appState.history[historyIdx] = historyEntry;
  } else {
    appState.history.unshift(historyEntry);
  }

  saveState();
  renderAll();
}

// Desfazer consumo de um item
function deleteFromHistory(itemId) {
  if (confirm('Deseja realmente remover esta avaliação e reverter o status da obra?')) {
    delete appState.ratings[itemId];
    
    // Se for álbum da discografia ativa, remove do artista
    const histItem = appState.history.find(h => h.itemId === itemId);
    if (histItem && histItem.type === 'album' && appState.musicActiveArtist) {
      const artist = appState.musicActiveArtist;
      const album = artist.albums.find(a => `${a.title} (${artist.name})` === histItem.title);
      if (album) {
        album.rating = null;
        album.notes = '';
      }
    }

    appState.history = appState.history.filter(h => h.itemId !== itemId);
    
    // Desmarca no cronograma atual de filmes
    for (let day in appState.currentWeek) {
      appState.currentWeek[day].forEach(schItem => {
        if (schItem.id === itemId) {
          schItem.completed = false;
        }
      });
    }

    saveState();
    renderAll();
  }
}

// Exportar para JSON (Backup)
function exportBackup() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "cronograma_cultural_backup.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Importar de JSON
function importBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.currentWeek && imported.history && imported.ratings) {
        appState = imported;
        // Verifica se a semana mudou após a importação
        checkWeekRollover();
        saveState();
        renderAll();
        alert('Backup importado com sucesso!');
      } else {
        alert('Formato de arquivo inválido. Certifique-se de que é um backup do Cronograma Cultural.');
      }
    } catch (err) {
      alert('Erro ao processar o arquivo JSON.');
    }
  };
  reader.readAsText(file);
}

// Exportar Histórico para CSV
function exportCSV() {
  if (appState.history.length === 0) {
    alert('Nenhum registro no diário para exportar!');
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
  csvContent += "Tipo,Título,Detalhes / Artista,Data de Consumo,Nota,Anotações\n";

  appState.history.forEach(row => {
    const tipo = row.type === 'movie' ? 'Filme' : row.type === 'album' ? 'Álbum' : row.type === 'show' ? 'Série/Anime' : row.type === 'artist' ? 'Artista' : 'Quadrinho';
    const titulo = `"${row.title.replace(/"/g, '""')}"`;
    const artistDir = `"${row.artistOrDirector.replace(/"/g, '""')}"`;
    const anotacoes = `"${(row.notes || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`;
    csvContent += `${tipo},${titulo},${artistDir},${row.date},${row.rating},${anotacoes}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", encodedUri);
  downloadAnchor.setAttribute("download", "diario_de_repertorio.csv");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// --- RENDERIZADORES DA INTERFACE ---

// Renderiza o Dashboard com a Linha do Tempo Dinâmica (Revelando dia a dia)
function renderDashboard() {
  const container = document.getElementById('dashboard-container');
  if (!container) return;

  container.innerHTML = '';

  const visibleDaysKeys = getVisibleDays();
  const todayKey = getCurrentDayKey();

  // --- 1. FILMES DO FIM DE SEMANA CARD ---
  let moviesHtml = `
    <div class="card dashboard-today-card glass animate-fade-in">
      <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div class="card-tag tag-purple">CRONOGRAMA ATIVO</div>
          <h3>Filmes do Fim de Semana</h3>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="autoFillWeek()">
          🎬 Sorteia Filmes
        </button>
      </div>
      <div class="card-body">
        <div class="timeline-container">
  `;

  visibleDaysKeys.forEach(dayKey => {
    const isToday = dayKey === todayKey;
    const schedule = appState.currentWeek[dayKey] || [];

    moviesHtml += `
      <div class="timeline-day-card ${isToday ? 'today-highlight' : ''}">
        <div class="timeline-day-header">
          <span class="timeline-day-name">${DAYS_OF_WEEK[dayKey]}</span>
          ${isToday ? `<span class="timeline-today-badge">HOJE</span>` : ''}
        </div>
        <div class="timeline-day-body">
    `;

    if (schedule.length === 0) {
      moviesHtml += `
        <div class="empty-mini">
          <span>Sem programação para este dia.</span>
        </div>
      `;
    } else {
      schedule.forEach(sch => {
        const item = findItem(sch.id);
        if (!item) return;

        const isItemCompleted = isConsumed(sch.id);
        const isPostponed = sch.postponed === true;
        const ratingInfo = appState.ratings[sch.id];

        // Links de busca rápidos
        const searchQuery = encodeURIComponent(`${item.title} filme`);
        const streamLink = `https://www.google.com/search?q=${searchQuery}`;

        moviesHtml += `
          <div class="timeline-item-card ${isItemCompleted ? 'completed' : ''} ${isPostponed ? 'postponed' : ''}">
            <div class="item-meta">
              <span class="item-type-badge movie">Filme</span>
              ${isItemCompleted ? `<span class="status-indicator-badge completed-badge">Assistido</span>` : ''}
              ${isPostponed ? `<span class="status-indicator-badge postponed-badge">⏳ Adiado</span>` : ''}
            </div>
            
            <div class="item-main-details">
              <h5>${item.title}</h5>
              <p>Direção de ${item.director} (${item.year})</p>
            </div>

            <div class="timeline-item-footer">
              <a href="${streamLink}" target="_blank" class="btn-link">Buscar no Google ↗</a>
              
              <div class="item-buttons">
                ${isItemCompleted 
                  ? `<div class="rating-display">★ ${ratingInfo.rating}/10</div>` 
                  : isPostponed
                    ? `<button class="btn btn-secondary btn-xs" onclick="reactivateItem('${dayKey}', '${sch.id}')">Reativar</button>`
                    : `
                      <button class="btn btn-secondary btn-xs" onclick="replaceScheduledItem('${dayKey}', '${sch.id}')" title="Sortear outro filme">Trocar</button>
                      <button class="btn btn-secondary btn-xs" onclick="postponeItem('${dayKey}', '${sch.id}')" title="Adiar para depois">Adiar</button>
                      <button class="btn btn-success btn-xs" onclick="openRatingModal('${sch.id}')">Marcar Assistido</button>
                    `
                }
              </div>
            </div>
          </div>
        `;
      });
    }

    moviesHtml += `
        </div>
      </div>
    `;
  });

  moviesHtml += `
        </div>
      </div>
    </div>
  `;

  // --- 2. ARTISTA ATIVO CARD ---
  let musicHtml = `
    <div class="card dashboard-music-card glass animate-fade-in">
      <div class="card-header" style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <div class="card-tag tag-purple">DISCOGRAFIA ATIVA</div>
          <h3>Artista Ativo</h3>
        </div>
        <button class="btn-icon-edit" onclick="changeActiveArtistManually()" title="Trocar artista ativo" style="background: transparent; border: none; cursor: pointer; margin-left: 0.5rem; font-size: 0.9rem; opacity: 0.6; transition: var(--transition-smooth);">✏️</button>
      </div>
      <div class="card-body">
  `;

  if (appState.musicActiveArtist) {
    musicHtml += `
      <div class="active-artist-title-row" style="margin-bottom: 0.8rem; display: flex; flex-direction: column; justify-content: flex-start;">
        <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--primary);">${appState.musicActiveArtist.name}</h4>
        <span style="font-size: 0.75rem; color: var(--text-secondary);">${appState.musicActiveArtist.genre}</span>
      </div>
      
      <!-- List of albums -->
      <div class="active-artist-albums" style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.2rem; max-height: 250px; overflow-y: auto; padding-right: 0.2rem;">
        ${appState.musicActiveArtist.albums.map(al => {
          const isCompleted = al.rating !== null;
          const searchQuery = encodeURIComponent(`${appState.musicActiveArtist.name} ${al.title} album`);
          const streamLink = `https://open.spotify.com/search/${searchQuery}`;
          
          return `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(255, 255, 255, 0.03); border-radius: var(--radius-sm); ${isCompleted ? 'opacity: 0.7; border-left: 3px solid var(--success);' : ''}">
              <div style="flex-grow: 1; max-width: 65%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <strong style="font-size: 0.85rem; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${al.title}">${al.title}</strong>
                <span style="font-size: 0.75rem; color: var(--text-secondary);">${al.year}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <a href="${streamLink}" target="_blank" style="font-size: 0.9rem; text-decoration: none;" title="Buscar no Spotify">🎧</a>
                ${isCompleted 
                  ? `<span style="font-size: 0.8rem; color: var(--warning); font-weight: 700;">★ ${al.rating}</span>`
                  : `<button class="btn btn-success btn-xs" onclick="openRatingModalForAlbum('${al.title}', ${al.year})">Escutado</button>`
                }
              </div>
            </div>
          `;
        }).join('')}
        ${appState.musicActiveArtist.albums.length === 0 ? `
          <div style="text-align: center; color: var(--text-secondary); font-style: italic; padding: 1rem 0;">
            Nenhum disco cadastrado.
          </div>
        ` : ''}
      </div>

      <div style="display: flex; gap: 0.5rem; margin-bottom: 1.2rem;">
        <button class="btn btn-secondary btn-block btn-xs" onclick="addCustomAlbumToActiveArtist()">+ Adicionar Disco</button>
      </div>

      <button class="btn btn-success btn-block btn-sm" onclick="completeActiveArtist()">
        💿 Concluir Artista & Salvar Média
      </button>
    `;
  } else {
    musicHtml += `
      <div class="empty-state" style="text-align: center; padding: 1rem 0;">
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.8rem;">Nenhum artista ativo.</p>
        <button class="btn btn-primary btn-sm btn-block" onclick="changeActiveArtistManually()">Escolher Artista</button>
      </div>
    `;
  }

  musicHtml += `
    <!-- Queue Section -->
    <div class="queue-section" style="border-top: 1px solid rgba(255, 255, 255, 0.06); padding-top: 1rem; margin-top: 1.2rem;">
      <h4 style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.5rem; font-family: 'Outfit';">Próximos Artistas:</h4>
      <ul class="queue-list" style="list-style: none; padding: 0; margin-bottom: 1rem; font-size: 0.85rem;">
        ${appState.musicQueue.slice(0, 3).map((art, idx) => `
          <li style="display: flex; justify-content: space-between; align-items: center; padding: 0.25rem 0; color: var(--text-secondary);">
            <span>${idx + 1}. <strong>${art}</strong></span>
            <button class="btn-delete-badge" onclick="removeArtistFromQueue(${idx})" style="background: transparent; border: none; color: var(--text-secondary); cursor: pointer; font-size: 0.9rem;">&times;</button>
          </li>
        `).join('')}
        ${appState.musicQueue.length === 0 ? '<li style="color: var(--text-secondary); font-style: italic;">Fila vazia.</li>' : ''}
      </ul>
      
      <div class="add-to-queue-row" style="display: flex; gap: 0.4rem;">
        <input type="text" id="new-artist-input" placeholder="Novo artista/banda..." style="flex: 1; background: rgba(0, 0, 0, 0.3); border: 1px solid var(--border-glass); color: var(--text-primary); border-radius: var(--radius-sm); padding: 0.4rem; font-size: 0.8rem; outline: none;" />
        <button class="btn btn-secondary btn-xs" onclick="addArtistToQueue()">Adicionar</button>
      </div>
    </div>
  </div>
</div>
  `;

  // --- 3. QUADRINHOS CARD ---
  let comicsHtml = `
    <div class="card dashboard-comics-card glass animate-fade-in">
      <div class="card-header">
        <div class="card-tag tag-green">QUADRINHOS</div>
        <h3>Lendo Atualmente</h3>
      </div>
      <div class="card-body comic-reading-body">
        <div class="current-comic-title-row" style="display: flex; align-items: center; font-size: 0.95rem; background: rgba(255, 255, 255, 0.02); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid rgba(255, 255, 255, 0.04);">
          <span class="current-comic-label" style="color: var(--text-secondary); margin-right: 0.4rem;">Obra:</span>
          <strong class="current-comic-name" style="flex-grow: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${appState.comicsCurrentTitle}">${appState.comicsCurrentTitle}</strong>
          <button class="btn-icon-edit" onclick="updateComicTitle()" title="Mudar quadrinho" style="background: transparent; border: none; cursor: pointer; margin-left: 0.5rem; font-size: 0.9rem; opacity: 0.6; transition: var(--transition-smooth);">✏️</button>
        </div>
        
        <div class="streak-container" style="margin: 1.5rem 0; text-align: center;">
          <div class="streak-number" style="font-size: 3.5rem; font-weight: 800; font-family: 'Outfit', sans-serif; background: linear-gradient(135deg, #10b981 0%, #059669 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1;">${appState.comicsIssuesRead}</div>
          <div class="streak-label" style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 500;">Edições Lidas</div>
        </div>
        
        <div class="comic-actions-grid" style="display: flex; gap: 0.5rem; width: 100%; margin-bottom: 1rem;">
          <button class="btn btn-secondary" style="flex: 1; padding: 0.5rem;" onclick="incrementComicIssues(-1)">- 1 Edição</button>
          <button class="btn btn-primary" style="flex: 2; padding: 0.5rem;" onclick="incrementComicIssues(1)">+ 1 Edição</button>
        </div>
        
        <button class="btn btn-success btn-block btn-sm" onclick="completeComicTitle()">
          📚 Concluir & Avaliar Título
        </button>
      </div>
    </div>
  `;

  // --- 4. SÉRIES & ANIMES CARD ---
  let showsHtml = `
    <div class="card dashboard-shows-card glass animate-fade-in">
      <div class="card-header">
        <div class="card-tag tag-blue">SÉRIES & ANIMES</div>
        <h3>Assistindo Atualmente</h3>
      </div>
      <div class="card-body show-watching-body">
        <div class="current-show-title-row" style="display: flex; align-items: center; font-size: 0.95rem; background: rgba(255, 255, 255, 0.02); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid rgba(255, 255, 255, 0.04); margin-bottom: 1rem;">
          <span class="current-show-label" style="color: var(--text-secondary); margin-right: 0.4rem;">Obra:</span>
          <strong class="current-show-name" style="flex-grow: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${appState.showsCurrentShow}">${appState.showsCurrentShow}</strong>
          <button class="btn-icon-edit" onclick="changeCurrentShowManually()" title="Mudar série" style="background: transparent; border: none; cursor: pointer; margin-left: 0.5rem; font-size: 0.9rem; opacity: 0.6; transition: var(--transition-smooth);">✏️</button>
        </div>
        
        <button class="btn btn-success btn-block btn-sm" style="margin-bottom: 1.5rem;" onclick="completeCurrentShow()">
          📺 Concluir & Avaliar Série
        </button>
        
        <div class="queue-section" style="border-top: 1px solid rgba(255, 255, 255, 0.06); padding-top: 1rem;">
          <h4 style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.5rem; font-family: 'Outfit';">Próximas da Fila:</h4>
          <ul class="queue-list" style="list-style: none; padding: 0; margin-bottom: 1rem; font-size: 0.85rem;">
            ${appState.showsQueue.slice(0, 3).map((show, idx) => `
              <li style="display: flex; justify-content: space-between; align-items: center; padding: 0.25rem 0; color: var(--text-secondary);">
                <span>${idx + 1}. <strong>${show}</strong></span>
                <button class="btn-delete-badge" onclick="removeShowFromQueue(${idx})" style="background: transparent; border: none; color: var(--text-secondary); cursor: pointer; font-size: 0.9rem;">&times;</button>
              </li>
            `).join('')}
            ${appState.showsQueue.length === 0 ? '<li style="color: var(--text-secondary); font-style: italic;">Fila vazia.</li>' : ''}
          </ul>
          
          <div class="add-to-queue-row" style="display: flex; gap: 0.4rem;">
            <input type="text" id="new-show-input" placeholder="Nova série/anime..." style="flex: 1; background: rgba(0, 0, 0, 0.3); border: 1px solid var(--border-glass); color: var(--text-primary); border-radius: var(--radius-sm); padding: 0.4rem; font-size: 0.8rem; outline: none;" />
            <button class="btn btn-secondary btn-xs" onclick="addShowToQueue()">Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // --- 5. GRID DE 2 COLUNAS ---
  let finalHtml = `
    <div class="dashboard-grid">
      <!-- Coluna Esquerda: Filmes e Música -->
      <div class="left-dashboard-column">
        ${moviesHtml}
        ${musicHtml}
      </div>

      <!-- Coluna Direita: Quadrinhos & Séries -->
      <div class="right-dashboard-column">
        ${comicsHtml}
        ${showsHtml}
      </div>
    </div>
  `;

  container.innerHTML = finalHtml;
}

// Renderiza a Agenda de Cronograma Semanal Geral
function renderWeeklySchedule() {
  const container = document.getElementById('weekly-schedule-container');
  if (!container) return;

  container.innerHTML = '';

  let html = `<div class="weekly-row-grid">`;

  CYCLE_DAYS.forEach(dayKey => {
    const schedule = appState.currentWeek[dayKey] || [];
    
    html += `
      <div class="weekly-day-card glass">
        <div class="weekly-day-header">
          <h4>${DAYS_OF_WEEK[dayKey]}</h4>
        </div>
        <div class="weekly-day-body">
    `;

    if (schedule.length === 0) {
      html += `<div class="empty-mini">Folga! Nada planejado.</div>`;
    } else {
      schedule.forEach(sch => {
        const item = findItem(sch.id);
        if (!item) return;

        const isItemCompleted = isConsumed(sch.id);
        const isPostponed = sch.postponed === true;
        html += `
          <div class="scheduled-badge-item ${sch.type} ${isItemCompleted ? 'completed' : ''} ${isPostponed ? 'postponed' : ''}">
            <div class="badge-text" title="${item.title}">
              <strong>🎬</strong> ${item.title}
            </div>
            <button class="btn-delete-badge" onclick="unscheduleItem('${dayKey}', '${sch.id}')">&times;</button>
          </div>
        `;
      });
    }

    html += `
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// Renderiza a Biblioteca de Filmes (Cinema) com Filtros de Décadas
let activeMovieDecade = '1950';
function renderCinemaLibrary() {
  const container = document.getElementById('cinema-library-container');
  const tabsContainer = document.getElementById('cinema-tabs-container');
  if (!container || !tabsContainer) return;

  // Renderizar Abas de Décadas (1950 a 2020)
  const decades = ['1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'];
  let tabsHtml = '';
  decades.forEach(dec => {
    tabsHtml += `
      <button class="tab-btn ${activeMovieDecade === dec ? 'active' : ''}" onclick="changeMovieDecade('${dec}')">
        Anos ${dec}s
      </button>
    `;
  });
  tabsContainer.innerHTML = tabsHtml;

  // Filtrar filmes da década ativa
  const movies = MOVIES_DATABASE.filter(m => m.decade === activeMovieDecade);

  let html = `<div class="library-grid">`;
  movies.forEach(movie => {
    const isCompleted = isConsumed(movie.id);
    const ratingInfo = appState.ratings[movie.id];

    html += `
      <div class="library-item-card glass ${isCompleted ? 'completed' : ''}">
        <div class="item-main-info">
          <div class="item-title-row">
            <h4>${movie.title}</h4>
            <span class="item-year-tag">${movie.year}</span>
          </div>
          <p class="item-director">Direção: ${movie.director}</p>
          <span class="genre-badge">${movie.genre}</span>
        </div>
        
        <div class="item-actions-row">
          ${isCompleted 
            ? `
              <div class="item-rating-box">
                <span class="rating-badge">Nota: ${ratingInfo.rating}/10</span>
                <button class="btn btn-icon-delete" onclick="deleteFromHistory('${movie.id}')" title="Excluir Avaliação">🗑️</button>
              </div>
            `
            : `
              <div class="schedule-action-box">
                <select onchange="scheduleFromLibrary('${movie.id}', 'movie', this)">
                  <option value="">Agendar...</option>
                  <option value="sab">Sábado</option>
                  <option value="dom">Domingo</option>
                </select>
                <button class="btn btn-success btn-xs" onclick="openRatingModal('${movie.id}')">Já Assisti</button>
              </div>
            `
          }
        </div>
        ${isCompleted && ratingInfo.notes 
          ? `<p class="item-notes-preview"><strong>Minhas notas:</strong> "${ratingInfo.notes}"</p>` 
          : ''
        }
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function changeMovieDecade(decade) {
  activeMovieDecade = decade;
  renderCinemaLibrary();
}

// Renderiza a Biblioteca de Música (Discoteca) baseada em ARTISTAS
function renderMusicLibrary() {
  const container = document.getElementById('music-library-container');
  const tabsContainer = document.getElementById('music-tabs-container');
  if (!container) return;

  if (tabsContainer) tabsContainer.innerHTML = '';
  
  let html = `
    <div class="search-row" style="margin-bottom: 1.5rem; display: flex; gap: 1rem; width: 100%;">
      <input type="text" id="artist-search-input" placeholder="Buscar artista ou banda curada..." oninput="filterArtistLibrary()" style="flex: 1; background: rgba(0, 0, 0, 0.3); border: 1px solid var(--border-glass); color: var(--text-primary); border-radius: var(--radius-sm); padding: 0.6rem; outline: none; font-size: 0.9rem;" />
    </div>
    <div class="library-grid" id="artist-library-grid">
  `;

  ARTISTS_DATABASE.forEach(artist => {
    const isCompleted = appState.history.some(h => h.type === 'artist' && h.title.toLowerCase() === artist.name.toLowerCase());
    
    html += `
      <div class="library-item-card glass ${isCompleted ? 'completed' : ''}" data-artist-name="${artist.name}" data-artist-genre="${artist.genre}" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div class="item-main-info">
          <div class="item-title-row" style="display: flex; justify-content: space-between; align-items: flex-start;">
            <h4 style="font-size: 1.1rem; font-weight: 700;">${artist.name}</h4>
            <span class="genre-badge">${artist.genre}</span>
          </div>
          <div style="margin-top: 0.8rem;">
            <strong style="font-size: 0.8rem; color: var(--text-secondary); display: block; margin-bottom: 0.3rem;">Discos Indispensáveis:</strong>
            <ul style="list-style: disc; margin-left: 1.2rem; font-size: 0.8rem; color: var(--text-secondary);">
              ${artist.albums.map(al => `<li>${al.title} (${al.year})</li>`).join('')}
            </ul>
          </div>
        </div>
        
        <div class="item-actions-row" style="margin-top: 1.2rem; display: flex; gap: 0.5rem; width: 100%;">
          <button class="btn btn-secondary btn-xs" style="flex: 1;" onclick="queueArtistFromLibrary('${artist.name}')">Fila</button>
          <button class="btn btn-primary btn-xs" style="flex: 1.5;" onclick="setActiveArtistFromLibrary('${artist.name}')">Ouvir Agora</button>
        </div>
      </div>
    `;
  });
  
  html += `</div>`;
  container.innerHTML = html;
}

function filterArtistLibrary() {
  const query = document.getElementById('artist-search-input').value.toLowerCase();
  const cards = document.querySelectorAll('#artist-library-grid .library-item-card');
  cards.forEach(card => {
    const name = card.getAttribute('data-artist-name').toLowerCase();
    const genre = card.getAttribute('data-artist-genre').toLowerCase();
    if (name.includes(query) || genre.includes(query)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function setActiveArtistFromLibrary(name) {
  setActiveArtistByName(name);
  saveState();
  renderAll();
  alert(`"${name}" definido como artista ativo no seu Dashboard!`);
  switchSection('dashboard');
}

function queueArtistFromLibrary(name) {
  if (appState.musicQueue.includes(name)) {
    alert(`"${name}" já está na sua fila de espera!`);
    return;
  }
  appState.musicQueue.push(name);
  saveState();
  renderAll();
  alert(`"${name}" adicionado à sua fila de espera de música!`);
}

// Renderiza a Tabela do Diário ("Excel bonitinho")
function renderDiaryTable() {
  const container = document.getElementById('diary-table-container');
  if (!container) return;

  if (appState.history.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Nenhum registro ainda no diário. Avalie suas obras no Dashboard para alimentá-lo!</p>
      </div>
    `;
    return;
  }

  let html = `
    <div class="table-actions">
      <button class="btn btn-secondary btn-sm" onclick="exportCSV()">📁 Exportar para CSV (Excel)</button>
    </div>
    <div class="table-wrapper">
      <table class="diary-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Título</th>
            <th>Detalhes / Artista</th>
            <th>Data</th>
            <th>Nota</th>
            <th>Comentários</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
  `;

  appState.history.forEach(hist => {
    let typeBadge = '';
    if (hist.type === 'movie') typeBadge = '<span class="item-type-badge movie">🎬 Filme</span>';
    else if (hist.type === 'album') typeBadge = '<span class="item-type-badge album">💿 Álbum</span>';
    else if (hist.type === 'show') typeBadge = '<span class="item-type-badge" style="background: rgba(14, 165, 233, 0.15); color: #38bdf8;">📺 Série</span>';
    else if (hist.type === 'comic') typeBadge = '<span class="item-type-badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399;">📚 HQ</span>';
    else if (hist.type === 'artist') typeBadge = '<span class="item-type-badge" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24;">🎨 Artista</span>';

    html += `
      <tr>
        <td>${typeBadge}</td>
        <td><strong>${hist.title}</strong></td>
        <td>${hist.artistOrDirector}</td>
        <td>${hist.date}</td>
        <td><span class="rating-pill">${hist.rating}/10</span></td>
        <td class="comment-cell" title="${hist.notes || ''}">${hist.notes || '-'}</td>
        <td>
          <button class="btn btn-danger btn-xs" onclick="deleteFromHistory('${hist.itemId}')">Excluir</button>
        </td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
}

// Renderiza Painel de Estatísticas
function renderStats() {
  const container = document.getElementById('stats-container');
  if (!container) return;

  const totalMovies = MOVIES_DATABASE.length;

  const watchedMovies = appState.history.filter(h => h.type === 'movie').length;
  const listenedAlbums = appState.history.filter(h => h.type === 'album').length;
  const completedShows = appState.history.filter(h => h.type === 'show').length;
  const completedArtists = appState.history.filter(h => h.type === 'artist').length;
  
  const moviePercent = ((watchedMovies / totalMovies) * 100).toFixed(1);

  // Notas médias
  const movieRatings = appState.history.filter(h => h.type === 'movie').map(h => h.rating);
  const albumRatings = appState.history.filter(h => h.type === 'album').map(h => h.rating);

  const avgMovieRating = movieRatings.length > 0 ? (movieRatings.reduce((a,b) => a+b, 0) / movieRatings.length).toFixed(1) : '-';
  const avgAlbumRating = albumRatings.length > 0 ? (albumRatings.reduce((a,b) => a+b, 0) / albumRatings.length).toFixed(1) : '-';

  container.innerHTML = `
    <div class="stats-grid">
      <div class="card stats-card glass">
        <h4>Progresso de Cinema & TV</h4>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${moviePercent}%"></div>
        </div>
        <p class="stats-numbers"><strong>${watchedMovies} de ${totalMovies}</strong> filmes assistidos (${moviePercent}%)</p>
        <p class="stats-numbers"><strong>${completedShows}</strong> séries/animes concluídos</p>
        <p class="stats-average">Média de Filmes: <span>★ ${avgMovieRating}</span></p>
      </div>

      <div class="card stats-card glass">
        <h4>Progresso de Música & HQs</h4>
        <div style="height: 8px; margin-bottom: 0.8rem;"></div>
        <p class="stats-numbers"><strong>${listenedAlbums}</strong> discos escutados no total</p>
        <p class="stats-numbers"><strong>${completedArtists}</strong> discografias de artistas concluídas</p>
        <p class="stats-numbers"><strong>${appState.comicsTotalIssuesRead || 0}</strong> edições de quadrinhos lidas no total</p>
        <p class="stats-average">Média de Álbuns: <span>★ ${avgAlbumRating}</span></p>
      </div>
    </div>
  `;
}

// --- MODAL DE AVALIAÇÃO ---
let currentRatingItemId = null;
let specialRatingData = null; // { type, title, subtitle }

function openRatingModal(itemId) {
  const item = findItem(itemId);
  if (!item) return;

  currentRatingItemId = itemId;
  specialRatingData = null;

  document.getElementById('modal-item-title').textContent = item.title;
  document.getElementById('modal-item-subtitle').textContent = `Direção de ${item.director} (${item.year})`;

  // Configura textos específicos para Filme
  document.getElementById('modal-title-text').textContent = 'Avaliar Filme';
  document.getElementById('rating-select-label').textContent = 'Sua Nota para o Filme (1 a 10)';
  document.getElementById('rating-notes-label').textContent = 'Anotações / Resenha Rápida do Filme';
  
  const ratingSelect = document.getElementById('rating-select');
  ratingSelect.innerHTML = `
    <option value="10">🌟 10 - Obra-prima</option>
    <option value="9">⭐ 9 - Excelente</option>
    <option value="8">⭐ 8 - Muito bom</option>
    <option value="7">⭐ 7 - Bom</option>
    <option value="6">👍 6 - Regular</option>
    <option value="5">😐 5 - Mediano</option>
    <option value="4">👎 4 - Ruim</option>
    <option value="3">👎 3 - Muito ruim</option>
    <option value="2">💩 2 - Terrível</option>
    <option value="1">💩 1 - Não gostei de nada</option>
  `;

  document.getElementById('modal-save-btn').textContent = 'Salvar como Assistido';

  const existing = appState.ratings[itemId];
  if (existing) {
    document.getElementById('rating-select').value = existing.rating;
    document.getElementById('rating-notes').value = existing.notes;
  } else {
    document.getElementById('rating-select').value = '10';
    document.getElementById('rating-notes').value = '';
  }

  document.getElementById('rating-modal').style.display = 'flex';
}

function openRatingModalForSpecial(type, title, subtitle) {
  specialRatingData = { type, title, subtitle };
  currentRatingItemId = null;
  
  document.getElementById('modal-item-title').textContent = title;
  document.getElementById('modal-item-subtitle').textContent = subtitle;

  let titleText = '';
  let ratingLabel = '';
  let notesLabel = '';
  let saveBtnText = '';
  
  if (type === 'comic') {
    titleText = 'Avaliar Quadrinho';
    ratingLabel = 'Sua Nota para o Quadrinho (1 a 10)';
    notesLabel = 'Anotações / Resenha Rápida do Quadrinho';
    saveBtnText = 'Salvar como Lido';
  } else if (type === 'show') {
    titleText = 'Avaliar Série / Anime';
    ratingLabel = 'Sua Nota para a Série/Anime (1 a 10)';
    notesLabel = 'Anotações / Resenha Rápida da Série';
    saveBtnText = 'Salvar como Concluído';
  } else if (type === 'artist_album') {
    titleText = 'Avaliar Disco';
    ratingLabel = 'Sua Nota para o Álbum (1 a 10)';
    notesLabel = 'Anotações / Resenha Rápida do Álbum';
    saveBtnText = 'Salvar como Escutado';
  }

  document.getElementById('modal-title-text').textContent = titleText;
  document.getElementById('rating-select-label').textContent = ratingLabel;
  document.getElementById('rating-notes-label').textContent = notesLabel;
  document.getElementById('modal-save-btn').textContent = saveBtnText;

  document.getElementById('rating-select').value = '10';
  document.getElementById('rating-notes').value = '';
  
  document.getElementById('rating-modal').style.display = 'flex';
}

function closeRatingModal() {
  document.getElementById('rating-modal').style.display = 'none';
  currentRatingItemId = null;
  specialRatingData = null;
}

function saveRatingFromModal() {
  const rating = document.getElementById('rating-select').value;
  const notes = document.getElementById('rating-notes').value;

  if (specialRatingData) {
    const today = new Date().toLocaleDateString('pt-BR');
    const { type, title, subtitle } = specialRatingData;
    
    if (type === 'artist_album') {
      const artist = appState.musicActiveArtist;
      // title tem formato "Nome do Album (Nome do Artista)"
      const album = artist.albums.find(a => `${a.title} (${artist.name})` === title);
      
      if (album) {
        album.rating = parseFloat(rating);
        album.notes = notes;
      }
      
      // Salva no diário individualmente
      const historyEntry = {
        id: 'hist_alb_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        itemId: 'album_art_' + Date.now(),
        type: 'album',
        title: title,
        artistOrDirector: artist.name,
        date: today,
        rating: parseFloat(rating),
        notes: notes
      };
      appState.history.unshift(historyEntry);
    } 
    else if (type === 'comic') {
      const historyEntry = {
        id: 'hist_spec_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        itemId: 'comic_' + Date.now(),
        type: 'comic',
        title: title,
        artistOrDirector: subtitle,
        date: today,
        rating: parseFloat(rating),
        notes: notes
      };
      appState.history.unshift(historyEntry);
      
      appState.comicsIssuesRead = 0;
      const nextTitle = prompt('Quadrinho concluído! Qual o próximo título que você pretende ler?', '');
      appState.comicsCurrentTitle = nextTitle && nextTitle.trim() ? nextTitle.trim() : 'Novo Quadrinho';
    } 
    else if (type === 'show') {
      const historyEntry = {
        id: 'hist_spec_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        itemId: 'show_' + Date.now(),
        type: 'show',
        title: title,
        artistOrDirector: subtitle,
        date: today,
        rating: parseFloat(rating),
        notes: notes
      };
      appState.history.unshift(historyEntry);

      if (appState.showsQueue.length > 0) {
        const nextShow = appState.showsQueue.shift();
        appState.showsCurrentShow = nextShow;
      } else {
        appState.showsCurrentShow = 'Nenhuma série/anime na fila';
      }
    }

    closeRatingModal();
    saveState();
    renderAll();
  } else if (currentRatingItemId) {
    consumeItem(currentRatingItemId, rating, notes);
    closeRatingModal();
  }
}

// Renderiza todas as seções
function renderAll() {
  renderDashboard();
  renderWeeklySchedule();
  renderCinemaLibrary();
  renderMusicLibrary();
  renderDiaryTable();
  renderStats();
}

// Alternar entre Seções da Página
function switchSection(sectionId) {
  const sections = ['dashboard', 'cinema', 'discoteca', 'diario', 'configuracoes'];
  sections.forEach(sec => {
    const el = document.getElementById(`section-${sec}`);
    if (el) {
      if (sec === sectionId) {
        el.classList.remove('hidden-section');
      } else {
        el.classList.add('hidden-section');
      }
    }

    const navLink = document.getElementById(`nav-link-${sec}`);
    if (navLink) {
      if (sec === sectionId) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });

  if (sectionId === 'diario') renderDiaryTable();
  if (sectionId === 'configuracoes') renderStats();
}

// Inicializador da Página
window.onload = function() {
  loadState();
  renderAll();

  // Carrega configurações da nuvem
  loadCloudConfig();

  // Se auto_sync estiver habilitado, faz download silencioso ao iniciar
  const autoSync = localStorage.getItem('cloud_auto_sync') === 'true';
  if (autoSync) {
    downloadFromCloud(true);
  }

  // Configura inputs de backup
  const importInput = document.getElementById('import-backup-file');
  if (importInput) {
    importInput.addEventListener('change', importBackup);
  }

  // Fechar modal clicando fora
  window.onclick = function(event) {
    const modal = document.getElementById('rating-modal');
    if (event.target == modal) {
      closeRatingModal();
    }
  };
};

// --- CLOUD SYNC & DISCORD WEBHOOK LOGIC ---

// Salva as credenciais no localStorage (seguro, local)
// Salva as credenciais no localStorage (seguro, local)
function saveCloudConfig() {
  const token = document.getElementById('cloud-token').value.trim();
  let gistId = document.getElementById('cloud-gist-id').value.trim();
  const webhook = document.getElementById('cloud-webhook').value.trim();
  const autoSync = document.getElementById('cloud-auto-sync').checked;

  // Sanitização do Gist ID (se o usuário colou a URL completa ou colocou barra extra)
  if (gistId.includes('/')) {
    const parts = gistId.split('/');
    gistId = parts.filter(p => p.trim() !== '').pop();
  }

  localStorage.setItem('cloud_token', token);
  localStorage.setItem('cloud_gist_id', gistId);
  localStorage.setItem('cloud_webhook', webhook);
  localStorage.setItem('cloud_auto_sync', autoSync ? 'true' : 'false');

  // Atualiza o valor higienizado no campo de texto da tela
  document.getElementById('cloud-gist-id').value = gistId;

  alert('Configurações da nuvem salvas com sucesso!');
}

// Carrega as credenciais e preenche os campos na tela
function loadCloudConfig() {
  const token = localStorage.getItem('cloud_token') || '';
  const gistId = localStorage.getItem('cloud_gist_id') || '';
  const webhook = localStorage.getItem('cloud_webhook') || '';
  const autoSync = localStorage.getItem('cloud_auto_sync') === 'true';

  const tEl = document.getElementById('cloud-token');
  const gEl = document.getElementById('cloud-gist-id');
  const wEl = document.getElementById('cloud-webhook');
  const aEl = document.getElementById('cloud-auto-sync');

  if (tEl) tEl.value = token;
  if (gEl) gEl.value = gistId;
  if (wEl) wEl.value = webhook;
  if (aEl) aEl.checked = autoSync;
  
  return { token, gistId, webhook, autoSync };
}

// Envia o estado atual do localStorage para o Gist do GitHub
async function uploadToCloud(silent = false) {
  const { token, gistId } = loadCloudConfig();
  if (!token || !gistId) {
    if (!silent) alert('Por favor, configure o Token do GitHub e o Gist ID primeiro.');
    return;
  }

  const payload = {
    description: "Backup de Estado - Repertorio Cultural",
    files: {
      "repertorio_cultural.json": {
        "content": JSON.stringify(appState, null, 2)
      }
    }
  };

  try {
    const response = await fetch(`https://api.github.com/gists/${gistId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      if (!silent) alert('Dados salvos na nuvem com sucesso! ☁️');
      console.log('Upload do backup efetuado.');
    } else {
      const err = await response.json();
      console.error(err);
      if (!silent) alert(`Erro no upload: ${err.message || response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    if (!silent) alert(`Erro de rede ao conectar à nuvem: ${error.message}`);
  }
}

// Baixa o estado do Gist do GitHub e carrega na aplicação
async function downloadFromCloud(silent = false) {
  const { token, gistId } = loadCloudConfig();
  if (!token || !gistId) {
    if (!silent) alert('Por favor, configure o Token do GitHub e o Gist ID primeiro.');
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/gists/${gistId}`, {
      method: 'GET',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (response.ok) {
      const gist = await response.json();
      const file = gist.files["repertorio_cultural.json"];
      if (file && file.content) {
        const importedState = JSON.parse(file.content);
        if (importedState.currentWeek && importedState.history) {
          appState = importedState;
          
          // Desabilitar autoSync temporariamente para evitar loops infinitos de salvamento durante carregamento
          const originalSave = saveState;
          saveState = function() { localStorage.setItem('repertorio_cultural_state', JSON.stringify(appState)); };
          
          // Verifica se a semana mudou após carregar dados da nuvem
          checkWeekRollover();
          
          saveState();
          renderAll();
          
          saveState = originalSave; // Restaura
          
          if (!silent) alert('Dados sincronizados da nuvem com sucesso! ☁️');
        } else {
          if (!silent) alert('Estrutura de dados corrompida no Gist.');
        }
      } else {
        if (!silent) alert('Arquivo "repertorio_cultural.json" não encontrado no Gist.');
      }
    } else {
      const err = await response.json();
      if (!silent) alert(`Erro no download: ${err.message || response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    if (!silent) alert(`Erro de rede ao conectar à nuvem: ${error.message}`);
  }
}

// Testa o Webhook do Discord enviando um relatório imediato
async function testDiscordWebhook() {
  const { webhook } = loadCloudConfig();
  if (!webhook) {
    alert('Por favor, insira a URL do Webhook do Discord primeiro.');
    return;
  }

  const artist = appState.musicActiveArtist;
  let content = "🔔 **[Teste] Resumo Cultural do seu Painel**\n\n";

  if (artist) {
    content += `🎵 **Artista Ativo:** __${artist.name}__\n`;
    artist.albums.forEach(al => {
      if (al.rating !== null) {
        content += `* 🟢 **${al.title}** (${al.year}) — *Nota: ${al.rating}/10*\n`;
      } else {
        content += `* ⚪ **${al.title}** (${al.year}) — *Pendente*\n`;
      }
    });
  } else {
    content += "🎵 **Artista Ativo:** Nenhum selecionado.\n";
  }

  if (appState.showsCurrentShow) {
    content += `\n📺 **Série Atual:** __${appState.showsCurrentShow}__\n`;
  }
  if (appState.comicsCurrentTitle) {
    content += `\n📚 **HQ Atual:** __${appState.comicsCurrentTitle}__ (${appState.comicsIssuesRead} edições lidas)\n`;
  }

  // Burlar bloqueio de CORS do Discord no navegador enviando os dados encapsulados em FormData (multipart/form-data)
  const formData = new FormData();
  formData.append('payload_json', JSON.stringify({ content: content }));

  try {
    await fetch(webhook, {
      method: 'POST',
      mode: 'no-cors', // Envia de forma opaca sem disparar preflight OPTIONS do CORS
      body: formData
    });
    alert('Mensagem enviada com sucesso! Verifique o seu canal do Discord.');
  } catch (error) {
    console.error("Erro no teste de webhook:", error);
    alert(`Erro ao disparar webhook: ${error.message}`);
  }
}
