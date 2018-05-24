import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WgBaseResultModel } from './../../share/wg-base-result.model';
import { ClanService } from './../../share/clan.service';
import { ClanModel } from './clan.model';
import { MemberModel } from './member.model';

@Component({
  selector: 'app-clan-detail',
  templateUrl: './clan-detail.component.html',
  styleUrls: [],
  providers: [ClanService]
})
export class ClanDetailComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  public clanId: number;
  public resultData: WgBaseResultModel;
  public clanData: ClanModel;

  constructor(private route: ActivatedRoute,
              private clanService: ClanService) { }

  ngOnInit() {
    this.clanId = this.route.snapshot.params['id'];
    this.subs.push(this.route.params.subscribe(
      (params: Params) => {
        this.clanId = params['id'];
      }
    ));

    if (this.clanId) {
      this.subs.push(this.clanService.getClanInfo(this.clanId).subscribe(
        (data: WgBaseResultModel) => {
          this.resultData = data;
          this.clanData = <ClanModel>this.resultData.data[this.clanId];
          const members: MemberModel[] = <Array<MemberModel>>Object.values(this.resultData.data[this.clanId].members);
          this.clanData.members = members;
        }
      ));
    }
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }

}
