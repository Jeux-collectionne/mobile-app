export default interface Crowfunding {
  id: number;
  name: string;
  beginningDate: Date;
  endDate: Date;
  duration: number;
  type: string;
  players: string;
  playingTime: string;
  difficultyLevel: number;
  description: string;
  website?: string;
}