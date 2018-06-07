import { TimestampValueModel } from './timestamp-value.model';

export interface ProgressModel {
  damage: TimestampValueModel[];
  winrate: TimestampValueModel[];
  xp: TimestampValueModel[];
}
