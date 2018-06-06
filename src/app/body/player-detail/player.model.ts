import { StatisticsModel } from './statistics.model';

export interface Player {
  account_id: number;
  created_at: number;
  hidden_profile: boolean;
  karma: number;
  last_battle_time: number;
  leveling_tier: number;
  leveling_points: number;
  logout_at: number;
  nickname: string;
  private: object;
  statistics: StatisticsModel;
  stats_updated_at: number;
  updated_at: number;
}
