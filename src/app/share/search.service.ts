import { WgBaseResultModel } from './model/wg-base-result.model';
import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SearchService {

  public searchPlayerPattern = new Subject();
  public searchClanPattern = new Subject();

  private apiBaseUrl = '';
  private lastPlayerName = '';
  private lastPlayerResult: WgBaseResultModel = null;
  private lastClanName = '';
  private lastClanResult: WgBaseResultModel = null;

  constructor(private confService: ConfigService,
              private http: HttpClient) {
    this.apiBaseUrl = confService.getApiBaseUrl();
  }

  public searchPlayer(name: string): Observable<any> {
    this.lastPlayerName = name;
    return this.http.get(this.apiBaseUrl + 'search/player/' + name);
  }

  public searchClan(name: string): Observable<any> {
    this.lastClanName = name;
    return this.http.get(this.apiBaseUrl + 'search/clan/' + name);
  }

  public getLastPlayerName(): string {
    return this.lastPlayerName;
  }

  public getLastClanName(): string {
    return this.lastClanName;
  }

  public getLastPlayerResult(): WgBaseResultModel {
    return this.lastPlayerResult;
  }

  public getLastClanResult(): WgBaseResultModel {
    return this.lastClanResult;
  }

  public setLastPlayerResult(lastResult: WgBaseResultModel) {
    this.lastPlayerResult = lastResult;
  }

  public setLastClanResult(lastResult: WgBaseResultModel) {
    this.lastClanResult = lastResult;
  }
}
