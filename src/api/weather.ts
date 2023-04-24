export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tzId: string;
  localtimeEpoch: number;
  localtime: Date;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface CurrentWeather {
  lastUpdatedEpoch: number;
  lastUpdated: Date;
  tempC: number;
  tempF: number;
  isDay: number;
  condition: Condition;
  windMph: number;
  windKph: number;
  windDegree: number;
  windDir: string;
  pressureMb: number;
  pressureIn: number;
  precipMm: number;
  precipIn: number;
  humidity: number;
  cloud: number;
  feelslikeC: number;
  feelslikeF: number;
  visKm: number;
  visMiles: number;
  uv: number;
  gustMph: number;
  gustKph: number;
}

export interface GetCurrentResponse {
  location: Location;
  current: CurrentWeather;
}

export interface WeatherApi {
  getCurrent(location: string): Promise<{ data: GetCurrentResponse }>;
}
