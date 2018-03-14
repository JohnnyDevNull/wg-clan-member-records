import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search-results',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit, OnDestroy {

  type: string;
  paraSubs: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.type = this.route.snapshot.params['type'];
    this.paraSubs = this.route.params.subscribe(
      (params: Params) => {
        this.type = params['type'];
      }
    );
  }

  ngOnDestroy() {
    this.paraSubs.unsubscribe();
  }
}
