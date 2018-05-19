export class Player {
  public account_id: number;
  public created_at: number;
  public hidden_profile: boolean;
  public karma: number;
  public last_battle_time: number;
  public leveling_points: number;
  public logout_at: number;
  public nickname: string;
  public private: object;
  public statistics: {
    battles: number,
    distance: number,
    stats_updated_at: number,
    updated_at: number,
    club: object,
    pve: {
      battles: number,
      wins: number,
      loose: number,
    },
    pvp: {
      battles: number,
      wins: number,
      loose: number,
    },
    pvp_div2: object,
    pvp_div3: object,
    pvp_solo: object,
    rank_solo: object,
  };
  public stats_updated_at: number;
  public updated_at: number;
}
