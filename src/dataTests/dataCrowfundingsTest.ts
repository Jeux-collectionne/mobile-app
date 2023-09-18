import Crowfunding from "../interfaces/Crowfunding";

const dataCrowfundingsTest: Crowfunding[] = [
  { 
    id: 1, 
    name: "I C E", 
    beginningDate: new Date("2021-05-04"), 
    endDate: new Date("2021-05-31"), 
    duration: 27, 
    type: "tuiles, placement d'ouvriers", 
    players: "1-5",
    playingTime: "90-120",
    difficultyLevel: 2.75,
    description: "Menez une équipe d'archéologues à la recherche d'artefacts dans un monde recouvert de glace",
    website: "https://www.kickstarter.com/projects/thisway/i-c-e/description" 
  },
  { 
    id: 2, 
    name: "The Witcher: Old World", 
    beginningDate: new Date("2021-05-21"), 
    endDate: new Date("2021-06-11"), 
    duration: 17, 
    type: "tuiles, deckbuilding, placement d'ouvriers", 
    players: "1-5",
    playingTime: "90-150",
    difficultyLevel: 2.88,
    description: "Explorez le Continent, améliorez vos capacités et combattez des montres et d'autres sorceleurs pour remporter la partie",
    website: "https://www.kickstarter.com/projects/goonboard/the-witcher/description" 
  }
];

export default dataCrowfundingsTest;