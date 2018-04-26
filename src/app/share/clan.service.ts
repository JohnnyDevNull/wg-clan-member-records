import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClanService {

  private apiBaseUrl: string;
  private clandId: number;

  constructor(private confService: ConfigService,
    private http: HttpClient) {
    this.apiBaseUrl = confService.getApiBaseUrl();
  }

  public getClanInfo(clandId: number): Observable<any> {
    this.clandId = clandId;
    return this.http.get(this.apiBaseUrl + 'clans/' + clandId + '/info');
  }

}
