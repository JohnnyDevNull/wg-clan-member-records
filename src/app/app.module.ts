import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './body/search/search.component';
import { MemberDetailComponent } from './body/clan-detail/member-detail/member-detail.component';
import { PlayerDetailComponent } from './body/player-detail/player-detail.component';
import { ClanDetailComponent } from './body/clan-detail/clan-detail.component';
import { ClanRanksComponent } from './body/clan-detail/clan-ranks/clan-ranks.component';
import { ClansListComponent } from './body/search/clans-list/clans-list.component';
import { PlayersListComponent } from './body/search/players-list/players-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchService } from './share/search.service';
import { ConfigService } from './share/config.service';

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
    SearchComponent,
    ClansListComponent,
    PlayersListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ConfigService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
