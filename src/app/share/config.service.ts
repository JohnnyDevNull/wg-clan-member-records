export class ConfigService {
  private apiBaseUrl = 'http://localhost:8080/';

  public getApiBaseUrl(): string {
    return this.apiBaseUrl;
  }
}
