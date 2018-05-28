import { MemberListComponent } from './body/clan-detail/member-list/member-list.component';
import { ClansListComponent } from './body/search/clans-list/clans-list.component';
import { PlayersListComponent } from './body/search/players-list/players-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MemberDetailComponent } from './body/clan-detail/member-detail/member-detail.component';
import { MemberStatsComponent } from './body/clan-detail/member-stats/member-stats.component';
import { ClanDetailComponent } from './body/clan-detail/clan-detail.component';
import { PlayerDetailComponent } from './body/player-detail/player-detail.component';
import { SearchComponent } from './body/search/search.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'search/players' , pathMatch: 'full' },
  { path: 'search', component: SearchComponent, children: [
    { path: 'clans', component: ClansListComponent, data: { type: 'clans' } },
    { path: 'players', component: PlayersListComponent, data: { type: 'players' } }
  ]},
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'clan/:id', component: ClanDetailComponent, children: [
    { path: 'member-list', component: MemberListComponent },
    { path: 'member-stats', component: MemberStatsComponent },
    { path: 'members/:id', component: MemberDetailComponent },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
