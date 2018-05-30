import { environment } from './../../environments/environment';

export class ConfigService {
  public apiBaseUrl: string;

  constructor() {
    this.apiBaseUrl = environment.baseApiUrl;
  }

  public getApiBaseUrl(): string {
    return this.apiBaseUrl;
  }
}
