import { AxiosInstance } from 'axios';
import { WeatherApi } from '../weather';

export class HttpWeatherApi implements WeatherApi {
  http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }
}
