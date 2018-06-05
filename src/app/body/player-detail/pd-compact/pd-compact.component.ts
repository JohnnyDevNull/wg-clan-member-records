import { PlayerDetailService } from './../player-detail.service';
import { Player } from './../player.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pd-compact',
  templateUrl: './pd-compact.component.html'
})
export class PdCompactComponent {

  @Input() public playerData: Player;

  constructor(private detailService: PlayerDetailService) { }

  getWinRate(type: string) {
    return this.detailService.getWinRate(type);
  }

  getDamageAvg(type: string) {
    return this.detailService.getDamageAvg(type);
  }
}
