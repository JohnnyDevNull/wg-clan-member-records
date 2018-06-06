import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Player } from '../../share/model/player.model';
import { WgBaseResultModel } from '../../share/model/wg-base-result.model';
import { PlayerService } from './../../share/player.service';
import { PlayerDetailService } from './player-detail.service';

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
  public viewMode = 'compact';

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
}
