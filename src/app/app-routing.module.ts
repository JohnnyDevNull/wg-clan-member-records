import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ClanRanksComponent } from './body/clan-ranks/clan-ranks.component';
import { MemberDetailComponent } from './body/member-detail/member-detail.component';
import { ClanDetailComponent } from './body/clan-detail/clan-detail.component';
import { PlayerDetailComponent } from './body/player-detail/player-detail.component';
import { SearchComponent } from './body/search/search.component';
import { LandingPageComponent } from './body/landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'search/:type', component: SearchComponent },
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
