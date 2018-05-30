import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { ClanModel } from '../clan.model';
import { ClanService } from '../clan.service';
import { MemberModel } from './../member.model';
import { MemberStat } from './member-stat.model';
import { MemberStats } from './member-stats.model';

const BATTLES = 1;
const MAXDMG = 2;
const WINRATE = 3;
const KILLS = 4;
const PLANES = 5;

@Component({
  selector: 'app-member-stats',
  templateUrl: './member-stats.component.html',
})
export class MemberStatsComponent implements OnInit {
  public battleType = 1;
  public clanData: ClanModel = null;
  public memberStats: MemberStats;
  private subs: Subscription;

  public sortValue = 'battles';
  public sortDirection = 'desc';

  constructor(private clanService: ClanService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.clanData = this.clanService.getClanData();
    this.subs = this.clanService.getMemberStats().subscribe(
      (memberStats: MemberStats) => {
        this.memberStats = memberStats;
        this.spinner.hide();
      }
    );
  }

  getMemberInfo(accountId): MemberModel {
    for (let member of this.clanData.members) {
      if (+member.account_id === +accountId) {
        return member;
      }
    }

    return new MemberModel();
  }

  getFieldValue(type: string, memberStat: MemberStat) {
    switch (+this.battleType) {
      case BATTLES:
        return memberStat[type].battles;
      case MAXDMG:
        return memberStat[type].max_damage_dealt;
      case WINRATE:
        return +memberStat[type].battles > 0
          ? (+memberStat[type].wins / +memberStat[type].battles) * 100
          : 0;
      case KILLS:
        return memberStat[type].frags;
      case PLANES:
        return memberStat[type].planes_killed;
      default:
        return 0;
    }
  }

  battleTypeNumToString(battleTypeNum: number) {
    switch (+battleTypeNum) {
      case BATTLES:
        return 'battles';
      case MAXDMG:
        return 'max_damage_dealt';
      case WINRATE:
        return 'winrate';
      case KILLS:
        return 'frags';
      case PLANES:
        return 'planes_killed';
      default:
        return 0;
    }
  }
}
