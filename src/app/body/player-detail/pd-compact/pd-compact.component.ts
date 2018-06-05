import { Component } from '@angular/core';
import { PlayerDetailService } from './../player-detail.service';

@Component({
  selector: 'app-pd-compact',
  templateUrl: './pd-compact.component.html'
})
export class PdCompactComponent {

  constructor(protected detailService: PlayerDetailService) { }

  getWinRate(type: string) {
    return this.detailService.getWinRate(type);
  }

  getDamageAvg(type: string) {
    return this.detailService.getDamageAvg(type);
  }

  getFieldValue(type: string, key: string) {
    return this.detailService.getFieldValue(type, key);
  }
}
