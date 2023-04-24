import { createContext } from 'solid-js';
import { WeatherApi } from '../../api/weather';

export interface Api {
  weather: WeatherApi;
}

export const ApiContext = createContext<Api | undefined>(undefined);
