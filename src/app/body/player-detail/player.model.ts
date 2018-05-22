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
      draws: number,
      damage_dealt: number,
      frags: number,
      max_damage_dealt: number,
      max_frags_battle: number,
      max_xp: number,
      xp: number,
    },
    pvp: {
      battles: number,
      wins: number,
      loose: number,
      draws: number,
      damage_dealt: number,
      frags: number,
      max_damage_dealt: number,
      max_frags_battle: number,
      max_xp: number,
      xp: number,
    },
    pvp_div2:  {
      battles: number,
      wins: number,
      loose: number,
      draws: number,
      damage_dealt: number,
      frags: number,
      max_damage_dealt: number,
      max_frags_battle: number,
      max_xp: number,
      xp: number,
    },
    pvp_div3:  {
      battles: number,
      wins: number,
      loose: number,
      draws: number,
      damage_dealt: number,
      frags: number,
      max_damage_dealt: number,
      max_frags_battle: number,
      max_xp: number,
      xp: number,
    },
    pvp_solo:  {
      battles: number,
      wins: number,
      loose: number,
      draws: number,
      damage_dealt: number,
      frags: number,
      max_damage_dealt: number,
      max_frags_battle: number,
      max_xp: number,
      xp: number,
    },
    rank_solo:  {
      battles: number,
      wins: number,
      loose: number,
      draws: number,
      damage_dealt: number,
      frags: number,
      max_damage_dealt: number,
      max_frags_battle: number,
      max_xp: number,
      xp: number,
    },
  };
  public stats_updated_at: number;
  public updated_at: number;
}
