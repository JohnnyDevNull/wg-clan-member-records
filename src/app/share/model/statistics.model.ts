import { GameModeStatsModel } from './game-mode-stats.model';

export interface StatisticsModel {
  battles: number;
  distance: number;
  stats_updated_at: number;
  updated_at: number;
  club: GameModeStatsModel;
  pve: GameModeStatsModel;
  pvp: GameModeStatsModel;
  pvp_div2: GameModeStatsModel;
  pvp_div3: GameModeStatsModel;
  pvp_solo: GameModeStatsModel;
  rank_solo: GameModeStatsModel;
}
