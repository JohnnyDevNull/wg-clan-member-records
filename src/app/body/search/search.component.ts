import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Data, Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

import { WgBaseResultModel } from './../../share/wg-base-result.model';
import { SearchService } from '../../share/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [ SearchService ]
})
export class SearchComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  public type: string;
  public resultPlayers: WgBaseResultModel;
  public resultClans: WgBaseResultModel;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private searchService: SearchService) { }

  ngOnInit() {
    this.subs.push(this.route.url.subscribe(() => {
     this.type = this.route.snapshot.firstChild.data['type'];
    }));

    this.resultPlayers = new WgBaseResultModel();
    this.resultClans = new WgBaseResultModel();
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }

  onSearchClick(searchValue: string) {
    if (this.type === 'players') {
      this.searchService.searchPlayerPattern.next(searchValue);
    } else if (this.type === 'clans') {
      this.searchService.searchClanPattern.next(searchValue);
    }
  }

}
