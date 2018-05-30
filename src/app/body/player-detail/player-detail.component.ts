import { PlayerDetailService } from './player-detail.service';
import { Player } from './player.model';
import { PlayerService } from './../../share/player.service';
import { ActivatedRoute, Params } from '@angular/router';
import { WgBaseResultModel } from './../../share/wg-base-result.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: [],
  providers: [PlayerService, PlayerDetailService]
})
export class PlayerDetailComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  public playerId: number;
  public resultData: WgBaseResultModel;
  public playerData: Player;

  constructor(private route: ActivatedRoute,
              private playerService: PlayerService,
              private detailService: PlayerDetailService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.playerId = this.route.snapshot.params['id'];
    this.subs.push(this.route.params.subscribe(
      (params: Params) => {
        this.playerId = params['id'];
      }
    ));

    if (this.playerId) {
      this.subs.push(this.playerService.getPlayerInfo(this.playerId).subscribe(
        (data: WgBaseResultModel) => {
          this.resultData = data;
          this.playerData = <Player>this.resultData.data[this.playerId];
          this.detailService.setPlayerData(this.playerData);
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

  getWinRate(type: string) {
    return this.detailService.getWinRate(type);
  }

  getDamageAvg(type: string) {
    return this.detailService.getDamageAvg(type);
  }
}
