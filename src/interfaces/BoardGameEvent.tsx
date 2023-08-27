// Interface générique pour les encarts "Evènements", "Crowfundings" et "Tendances du moment (= actualités, nouvelles sorties, nouveaux tutos...)"
export default interface BoardGameEvent {
  id: number;
  name: string;
  date?: Date;   // pour les éléments avec une seule date (évènement sur 1 jour, jour de sortie d'un jeu ou d'un tuto...)
  beginningDate?: Date;
  endDate?: Date;
  duration?: number;
  opening?: string;
  location?: string;
  type: string;   // type de l'élément : convention/festival/autre pour les évènements, crowfunding, tuto/news/autre pour les tendances du moment
  description: string;
  flyer?: string;
  site?: string;
}

