import { AxiosInstance } from 'axios';
import { GetCurrentResponse, WeatherApi } from '../weather';

export class HttpWeatherApi implements WeatherApi {
  http: AxiosInstance;
  key: string;

  constructor(http: AxiosInstance, key: string) {
    this.http = http;
    this.key = key;
  }

  getCurrent(location: string): Promise<{ data: GetCurrentResponse }> {
    return this.http.get(`/current.json?key=${this.key}&q=${location}`);
  }
}
