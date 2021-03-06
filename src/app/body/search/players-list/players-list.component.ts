import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SearchService } from './../../../share/search.service';
import { WgBaseResultModel } from './../../../share/model/wg-base-result.model';

@Component({
  selector: 'app-players',
  templateUrl: './players-list.component.html'
})
export class PlayersListComponent implements OnInit, OnDestroy {

  public playersList: WgBaseResultModel = null;
  private sppSub: Subscription;
  private sprSub: Subscription;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.playersList = this.searchService.getLastPlayerResult();
    this.sppSub = this.searchService.searchPlayerPattern.subscribe(
      (data: string) => {
        this.searchService.searchPlayer(data).subscribe(
          (result: WgBaseResultModel) => {
            this.playersList = result;
            this.searchService.setLastPlayerResult(result);
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.sppSub.unsubscribe();

    if (this.sprSub) {
      this.sprSub.unsubscribe();
    }
  }

}
