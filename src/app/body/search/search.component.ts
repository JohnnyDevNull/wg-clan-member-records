import { WgSearchModel } from './../../share/wg-search.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../../share/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [],
  providers: [ SearchService ]
})
export class SearchComponent implements OnInit, OnDestroy {

  type: string;
  paraSubs: Subscription;
  routerChangeSubs: Subscription;
  resultPlayers: WgSearchModel;
  resultClans: WgSearchModel;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService) { }

  ngOnInit() {
    this.type = this.route.snapshot.params['type'];
    this.paraSubs = this.route.params.subscribe(
      (params: Params) => {
        this.type = params['type'];
      }
    );
    this.resultPlayers = new WgSearchModel();
    this.resultClans = new WgSearchModel();
  }

  ngOnDestroy() {
    this.paraSubs.unsubscribe();
  }

  onSearchClick(searchValue: string) {
    if (this.type === 'players') {
      this.searchService.searchPlayer(searchValue).subscribe((data: WgSearchModel) => {
        this.resultPlayers = data;
      });
    } else if (this.type === 'clans') {
      this.searchService.searchClan(searchValue).subscribe((data: WgSearchModel) => {
        this.resultClans = data;
      });
    }
  }

}
