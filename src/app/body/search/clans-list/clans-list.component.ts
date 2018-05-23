import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SearchService } from './../../../share/search.service';
import { WgBaseResultModel } from './../../../share/wg-base-result.model';

@Component({
  selector: 'app-clans',
  templateUrl: './clans-list.component.html'
})
export class ClansListComponent implements OnInit, OnDestroy {

  public clanList: WgBaseResultModel = null;
  private scpSub: Subscription;
  private scrSub: Subscription;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.scpSub = this.searchService.searchClanPattern.subscribe(
      (data: string) => {
        this.searchService.searchClan(data).subscribe(
          (result: WgBaseResultModel) => {
            this.clanList = result;
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.scpSub.unsubscribe();

    if (this.scrSub) {
      this.scrSub.unsubscribe();
    }
  }

}
