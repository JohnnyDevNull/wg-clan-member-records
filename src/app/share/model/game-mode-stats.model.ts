export interface GameModeStatsModel {
  battles: number;
  wins: number;
  loose: number;
  draws: number;
  damage_dealt: number;
  frags: number;
  planes_killed: number;
  max_damage_dealt: number;
  max_frags_battle: number;
  max_xp: number;
  xp: number;
  survived_battles: number;
  main_battery: {
    max_frags_battle: number,
    frags: number,
    hits: number,
    max_frags_ship_id: number,
    shots: number
  };
  second_battery: {
    max_frags_battle: number,
    frags: number,
    hits: number,
    max_frags_ship_id: number,
    shots: number
  };
  torpedoes: {
    max_frags_battle: number,
    frags: number,
    hits: number,
    max_frags_ship_id: number,
    shots: number
  };
}
