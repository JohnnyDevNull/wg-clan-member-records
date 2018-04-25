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
  subs: Subscription[] = [];
  resultPlayers: WgSearchModel;
  resultClans: WgSearchModel;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService) { }

  ngOnInit() {
    this.type = this.route.snapshot.params['type'];
    this.subs.push(this.route.params.subscribe(
      (params: Params) => {
        this.type = params['type'];
      }
    ));
    this.resultPlayers = new WgSearchModel();
    this.resultClans = new WgSearchModel();
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }

  onSearchClick(searchValue: string) {
    if (this.type === 'players') {
      this.subs.push(this.searchService.searchPlayer(searchValue).subscribe(
        (data: WgSearchModel) => {
          this.resultPlayers = data;
        }
      ));
    } else if (this.type === 'clans') {
      this.subs.push(this.searchService.searchClan(searchValue).subscribe(
        (data: WgSearchModel) => {
          this.resultClans = data;
        }
      ));
    }
  }

}
