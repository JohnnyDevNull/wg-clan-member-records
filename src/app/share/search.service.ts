import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

    private restBaseUrl: 'http://localhost/github/wg-clan-member-api/public/';
    private lastPlayerName: String;
    private lastClanName: String;

    constructor(private http: HttpClient) {}

    public searchPlayer(name: String): Observable<any> {
        this.lastPlayerName = name;
        return this.http.get('http://localhost/github/wg-clan-member-api/public/search/player/' + name);
    }

    public searchClan(name: String): Observable<any> {
        this.lastClanName = name;
        return this.http.get('http://localhost/github/wg-clan-member-api/public/search/clan/' + name);
    }
}
