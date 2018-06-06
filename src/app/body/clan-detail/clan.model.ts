import { MemberModel } from './member.model';

export interface ClanModel {
  clan_id: number;
  created_at: number;
  creator_id: number;
  creator_name: string;
  description: string;
  is_clan_disbanded: boolean;
  leader_id: number;
  leader_name: string;
  members: MemberModel[];
  members_count: 25;
  members_ids: number[];
  name: string;
  old_name: string;
  old_tag: string;
  renamed_at: number;
  tag: string;
  updated_at: number;
}
