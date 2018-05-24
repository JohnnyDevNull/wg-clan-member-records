import { MemberModel } from './member.model';

export class ClanModel {
  public clan_id: number;
  public created_at: number;
  public creator_id: number;
  public creator_name: string;
  public description: string;
  public is_clan_disbanded: boolean;
  public leader_id: number;
  public leader_name: string;
  public members: MemberModel[];
  public members_count: 25;
  public members_ids: number[];
  public name: string;
  public old_name: string;
  public old_tag: string;
  public renamed_at: number;
  public tag: string;
  public updated_at: number;
}
