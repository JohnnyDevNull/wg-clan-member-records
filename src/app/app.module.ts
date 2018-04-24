import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './body/search/search.component';
import { MemberDetailComponent } from './body/member-detail/member-detail.component';
import { PlayerDetailComponent } from './body/player-detail/player-detail.component';
import { ClanDetailComponent } from './body/clan-detail/clan-detail.component';
import { ClanRanksComponent } from './body/clan-ranks/clan-ranks.component';
import { LandingPageComponent } from './body/landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'search/:type', component: SearchComponent },
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'clan/:id', component: ClanDetailComponent },
  { path: 'clan/:id/member/:id', component: MemberDetailComponent },
  { path: 'clan/:id/ranks', component: ClanRanksComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MemberDetailComponent,
    PlayerDetailComponent,
    ClanDetailComponent,
    ClanRanksComponent,
    LandingPageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
