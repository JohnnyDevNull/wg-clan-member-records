import { MemberStats } from './member-stats/member-stats.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../share/config.service';
import { ClanModel } from './clan.model';

@Injectable()
export class ClanService {

  private apiBaseUrl: string;
  private clanId: number;
  private clanData: ClanModel;

  constructor(private confService: ConfigService,
    private http: HttpClient) {
    this.apiBaseUrl = confService.getApiBaseUrl();
  }

  public getClanInfo(clandId: number): Observable<any> {
    this.clanId = clandId;
    return this.http.get(this.apiBaseUrl + 'clans/' + clandId + '/info');
  }

  public getClanData() {
    return this.clanData;
  }

  public setClanData(clanData: ClanModel) {
    this.clanData = clanData;
  }

  public getMemberStats(): Observable<Object> {
    return this.http.get(this.apiBaseUrl + 'clans/' + this.clanId + '/members/stats');
  }
}
