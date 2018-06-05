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

  getAvg(type: string, key: string) {
    switch (key) {
      case 'xp':
        return this.detailService.getXpAvg(type);
      case 'damage':
        return this.detailService.getDamageAvg(type);
      case 'frags':
        return this.detailService.getFragsAvg(type);
      case 'planes':
        return this.detailService.getPlanesAvg(type);
    }
  }

  getFieldValue(type: string, key: string) {
    return this.detailService.getFieldValue(type, key);
  }
}
