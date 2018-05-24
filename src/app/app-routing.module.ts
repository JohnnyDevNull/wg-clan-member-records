import { ClansListComponent } from './body/search/clans-list/clans-list.component';
import { PlayersListComponent } from './body/search/players-list/players-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ClanRanksComponent } from './body/clan-ranks/clan-ranks.component';
import { MemberDetailComponent } from './body/member-detail/member-detail.component';
import { ClanDetailComponent } from './body/clan-detail/clan-detail.component';
import { PlayerDetailComponent } from './body/player-detail/player-detail.component';
import { SearchComponent } from './body/search/search.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'search' , pathMatch: 'full' },
  { path: 'search', component: SearchComponent, children: [
    { path: 'clans', component: ClansListComponent, data: { type: 'clans' } },
    { path: 'players', component: PlayersListComponent, data: { type: 'players' } }
  ]},
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'clan/:id', component: ClanDetailComponent },
  { path: 'clan/:id/member/:id', component: MemberDetailComponent },
  { path: 'clan/:id/ranks', component: ClanRanksComponent },
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
