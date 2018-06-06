import { MemberStat } from './member-stat.model';

export interface MemberStats {
  clan_id: number;
  member_stats: MemberStat[];
}
