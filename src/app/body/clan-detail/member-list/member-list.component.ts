import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClanModel } from '../../../share/model/clan.model';
import { ClanService } from './../clan.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html'
})
export class MemberListComponent implements OnInit {
  public clanData: ClanModel = null;
  private subs: Subscription;

  constructor(private clanService: ClanService) { }

  ngOnInit() {
    this.clanData = this.clanService.getClanData();
  }
}
