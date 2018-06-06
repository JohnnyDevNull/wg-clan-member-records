import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClanDetailComponent } from './body/clan-detail/clan-detail.component';
import { MemberDetailComponent } from './body/clan-detail/member-detail/member-detail.component';
import { MemberListComponent } from './body/clan-detail/member-list/member-list.component';
import { MemberStatsComponent } from './body/clan-detail/member-stats/member-stats.component';
import { PlayerDetailComponent } from './body/player-detail/player-detail.component';
import { ClansListComponent } from './body/search/clans-list/clans-list.component';
import { PlayersListComponent } from './body/search/players-list/players-list.component';
import { SearchComponent } from './body/search/search.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from './share/config.service';
import { SearchService } from './share/search.service';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { MemberSortPipe } from './body/clan-detail/member-stats/member-sort.pipe';
import { PrivacyPolicyComponent } from './body/privacy-policy/privacy-policy.component';
import { PdCompactComponent } from './body/player-detail/pd-compact/pd-compact.component';
import { PdSpecComponent } from './body/player-detail/pd-spec/pd-spec.component';
import { PdShipsComponent } from './body/player-detail/pd-ships/pd-ships.component';
registerLocaleData(localeDe, 'de-DE', localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    PlayerDetailComponent,
    ClanDetailComponent,
    MemberDetailComponent,
    MemberStatsComponent,
    SearchComponent,
    ClansListComponent,
    PlayersListComponent,
    MemberListComponent,
    MemberSortPipe,
    PrivacyPolicyComponent,
    PdCompactComponent,
    PdSpecComponent,
    PdShipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [ConfigService, SearchService, { provide: LOCALE_ID, useValue: 'de-DE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
