import { HelperService } from './../../../share/helper.service';
import { Component, OnInit } from '@angular/core';
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
  styleUrls: []
})
export class MemberStatsComponent implements OnInit {
  public battleType = 1;
  public clanData: ClanModel = null;
  public memberStats: MemberStats;
  private subs: Subscription;

  constructor(private clanService: ClanService,
              private helper: HelperService) { }

  ngOnInit() {
    this.clanData = this.clanService.getClanData();
    this.subs = this.clanService.getMemberStats().subscribe(
      (memberStats: MemberStats) => {
        this.memberStats = memberStats;
        console.log(this.memberStats);
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
        return (+memberStat[type].battles).toLocaleString();
      case MAXDMG:
        return (+memberStat[type].max_damage_dealt).toLocaleString();
      case WINRATE:
        const winrate = ((memberStat[type].wins / memberStat[type].battles) * 100);
        return this.helper.roundNumberPrecision(winrate, 2);
      case KILLS:
        return (<number>memberStat[type].frags).toLocaleString();
      case PLANES:
        return (<number>memberStat[type].planes_killed).toLocaleString();
      default:
        return 0;
    }
  }
}
