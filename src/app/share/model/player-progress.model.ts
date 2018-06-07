import { ProgressModel } from './progress.model';

export interface PlayerProgressModel {
  account_id: number;
  nickname: string;
  data: ProgressModel;
}

export let example: PlayerProgressModel = {
  account_id: 500554376,
  nickname: 'Metwurts',
  data: {
    damage: [
      {
        timestamp: 1528392765,
        value: 33420
      },
    ],
    winrate: [
      {
        timestamp: 1528392765,
        value: 51.08
      },
    ],
    xp: [
      {
        timestamp: 1528392765,
        value: 912
      },
    ],
  }
};
