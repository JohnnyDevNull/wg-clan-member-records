import { PdCompactComponent } from './../pd-compact/pd-compact.component';
import { Player } from './../player.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pd-spec',
  templateUrl: './pd-spec.component.html'
})
export class PdSpecComponent extends PdCompactComponent {

  public selectedMode = 'pvp';

  public gameModes = [
    { key: 'pvp', name: 'PVP' },
    { key: 'pvp_div2', name: 'PVP Div2' },
    { key: 'pvp_div3', name: 'PVP Div3' },
    { key: 'pvp_solo', name: 'PVP Solo' },
    { key: 'pve', name: 'PVE' },
    { key: 'club', name: 'Club' },
    { key: 'rank_solo', name: 'Ranked' },
  ];

  getFieldValue(key: string) {
    const stats = this.playerData.statistics[this.selectedMode];
    return stats[key];
  }
}
