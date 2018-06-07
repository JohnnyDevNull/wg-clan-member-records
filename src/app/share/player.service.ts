import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PlayerService {

  private apiBaseUrl: string;
  private lastAccountId: number;

  constructor(private confService: ConfigService,
    private http: HttpClient) {
    this.apiBaseUrl = confService.getApiBaseUrl();
  }

  public getPlayerInfo(accountId: number): Observable<any> {
    this.lastAccountId = accountId;
    return this.http.get(this.apiBaseUrl + 'players/' + accountId + '/info');
  }

  public getPlayerProgress(accountId) {
    return this.http.get(this.apiBaseUrl + 'players/' + accountId + '/progress');
  }
}
