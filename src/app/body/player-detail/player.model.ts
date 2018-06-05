import { StatisticsModel } from './statistics.model';

export class Player {
  public account_id: number;
  public created_at: number;
  public hidden_profile: boolean;
  public karma: number;
  public last_battle_time: number;
  public leveling_tier: number;
  public leveling_points: number;
  public logout_at: number;
  public nickname: string;
  public private: object;
  public statistics: StatisticsModel;
  public stats_updated_at: number;
  public updated_at: number;
}
