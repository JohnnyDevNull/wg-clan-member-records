import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html'
})
export class PrivacyPolicyComponent implements OnInit {

  private subs: Subscription;
  public pHtmlStr;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.subs = this.http.get(
      'static/privacy-policy.html',
      {responseType: 'text'}
    ).subscribe(
      (content: string) => {
        this.pHtmlStr = content;
      }
    );
  }

}
