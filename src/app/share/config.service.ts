export class ConfigService {
  private apiBaseUrl = 'http://localhost/github/wg-clan-member-api/public/';

  public getApiBaseUrl(): string {
    return this.apiBaseUrl;
  }
}
