import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { ClanModel } from '../../share/model/clan.model';
import { MemberModel } from '../../share/model/member.model';
import { WgBaseResultModel } from '../../share/model/wg-base-result.model';
import { ClanService } from './clan.service';

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
              private router: Router,
              private clanService: ClanService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
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
          this.clanService.setClanData(this.clanData);
          this.router.navigate(['member-list'], { relativeTo: this.route});
          this.spinner.hide();
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
