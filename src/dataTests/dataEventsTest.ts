import BoardGameEvent from "../interfaces/BoardGameEvent";

const dataEventsTest: BoardGameEvent[] = [
  { 
    id: 1, 
    name: 'Hammer Time 2023', 
    beginningDate: new Date("2023-09-23"), 
    endDate: new Date("2023-09-24"), 
    duration: 2, 
    opening: '10h00-19h00', 
    location: 'Maison des Enfants, 796 Av. de Dunkerque 59160 Lille, Nord', 
    type: 'Convention jeux de figurines et jeux de plateau', 
    description: 'Venez participer à des démonstrations de jeux de figurines et de plateau. Initiez-vous à la peinture de figurines (atelier ouvert à tout âge), et tenter l’un des challenges peinture fun et au challenge Hammer Kriss ! Découvrez les tables de la Forge Ludique ainsi que celles des associations invitées. Votez pour le « Hammer Prize » et vous pourrez gagner des lots en tombola.', 
    flyer: 'http://www.laforgeludique.fr/wp-content/uploads/2023/05/345447562_969075014108625_6234595353936433162_n.jpeg', 
    site: 'http://www.laforgeludique.fr/hammer-time-le-temps-fort-forge-ludique/' 
  },
  { 
    id: 2, 
    name: 'LudiNord 2023', 
    beginningDate: new Date("2023-03-25"), 
    endDate: new Date("2023-03-26"), 
    duration: 2, 
    opening: 'Samedi : 10h00-21h00. Dimanche : 10h00-19h00', 
    location: '59370 Mons-En-Barœul, Nord', 
    type: 'Festival jeux de société', 
    description: 'Organisé depuis son origine au Fort de Mons, sur un espace de plus de 5 000 m² accueillant 12 000 visiteurs (en 2018), le festival LudiNord est le premier événement ludique sur la région Haut-de-France. Les objectifs de ce projet sont de faire découvrir les jeux de plateaux modernes auprès d’un large public, mais aussi de promouvoir des jeux qui ne sont pas encore commercialisés en favorisant la rencontre entre les différents acteurs du monde ludique', 
    flyer: 'https://ludinord.fr/photos/Communication/ludinord-affiche2023-accueil.jpg', 
    site: 'https://ludinord.fr/index.php' 
  },
  { 
    id: 3, 
    name: 'Deûle en jeux 2023', 
    beginningDate: new Date("2023-04-29"), 
    endDate: new Date("2023-04-30"), 
    duration: 2, 
    opening: '10h00-19h00', 
    location: 'Salle Festi\'Val 59890 Quesnoy-sur-Deûle, Nord', 
    type: 'Festival jeux de société', 
    description: 'Cette année plongez dans une ambiance Mystérieuse de Jules Vernes à Sherlock Holmes, en passant par Alice au pays des merveilles. De curieuse machines Steampunk, des conteurs vous expliqueront les voyages dans le temps et l’espace. Le Festival regroupe sur un même lieu, les jeux sous toutes leurs formes ainsi que les univers qui les inspirent : Jeux classiques, Jeux de rôles, jeux de plateaux, jeux de rôles grandeur nature, littérature fantastique et de Science Fiction, Pop culture et Mangas, Cosplay.', 
    flyer: 'https://deuleenjeux.fr/wp-content/uploads/2023/03/Deule-en-jeux-affV10-724x1024.jpg', 
    site: 'https://deuleenjeux.fr/' 
  },
  { 
    id: 4, 
    name: 'Weppes en jeux 2023', 
    beginningDate: new Date("2023-09-30"), 
    endDate: new Date("2023-10-01"), 
    duration: 2, 
    opening: 'Samedi : 10h00-19h00. Dimanche : 10h00-18h00', 
    location: 'Avenue Louis Romon, salle Nowacki et Cornette 59496 Salomé, Nord', 
    type: 'Festival jeux de société', 
    description: 'Venez partager, entre adultes ou avec vos enfants, un moment de détente en un lieu où jeux de société (plateau, jeu de rôles, jeux de cartes...), escape game, WARGAME (jeu de figurines) se mêlent. L\'occasion de découvrir le monde ludique du NORD-PAS DE CALAIS par les jeux récents ou les grands classiques. Idéal pour se retrouver en famille ou entre amis !!', 
    flyer: 'https://subverti.com/assets/img/maps/festivals/weppes-en-jeux/affiche-2023.webp', 
    site: 'https://subverti.com/fr/maps/festivals/weppes-en-jeux/' 
  },
  { 
    id: 5, 
    name: 'Portails de l\'imaginaire 2024', 
    beginningDate: new Date("2024-02-03"), 
    endDate: new Date("2024-02-04"), 
    duration: 2, 
    opening: 'Samedi : 14h00-00h00. Dimanche : 10h00-20h00', 
    location: 'Centre Culturel de Mouscron 7700 Mouscron, Belgique', 
    type: 'Festival jeux de société', 
    description: 'Le fantastique, la fantasy, l\'heroic fantasy... ces mots sont des énigmes pour vous ? Vous êtes adeptes de jeux de rôles, de jeux de plateau ? Le monde médiéval ou le steam-punk vous passionnent ? Vous avez frappé à la bonne porte.', 
    flyer: 'https://subverti.com/assets/img/maps/festivals/portails-imaginaire-mouscron/affiche-2024.webp', 
    site: 'https://www.lesportailsdelimaginaire.com/' 
  }
];

export default dataEventsTest;