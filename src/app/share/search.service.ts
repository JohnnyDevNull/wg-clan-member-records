import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SearchService {

  public searchPlayerPattern = new Subject();
  public searchClanPattern = new Subject();

  private apiBaseUrl: string;
  private lastPlayerName: string;
  private lastClanName: string;

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
}
