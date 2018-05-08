import { WgBaseResultModel } from './../../share/wg-base-result.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from '../../share/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [],
  providers: [ SearchService ]
})
export class SearchComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  public type: string;
  public resultPlayers: WgBaseResultModel;
  public resultClans: WgBaseResultModel;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService) { }

  ngOnInit() {
    this.type = this.route.snapshot.params['type'];
    this.subs.push(this.route.params.subscribe(
      (params: Params) => {
        this.type = params['type'];
      }
    ));
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
      this.subs.push(this.searchService.searchPlayer(searchValue).subscribe(
        (data: WgBaseResultModel) => {
          this.resultPlayers = data;
        }
      ));
    } else if (this.type === 'clans') {
      this.subs.push(this.searchService.searchClan(searchValue).subscribe(
        (data: WgBaseResultModel) => {
          this.resultClans = data;
          console.log(data);
        }
      ));
    }
  }

}
