import { ActivatedRoute, Params } from '@angular/router';
import { WgBaseResultModel } from './../../share/wg-base-result.model';
import { ClanService } from './../../share/clan.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-clan-detail',
  templateUrl: './clan-detail.component.html',
  styleUrls: [],
  providers: [ClanService]
})
export class ClanDetailComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  public clanId: number;
  public clanData: WgBaseResultModel;

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
          this.clanData = data;
          console.log(data);
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
