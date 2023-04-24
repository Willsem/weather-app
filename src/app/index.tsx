import { Router } from '@solidjs/router';
import type { Component } from 'solid-js';
import { CreateHttpClient } from '../api/http/create-client';
import { HttpWeatherApi } from '../api/http/weather';
import { Footer } from '../components/footer';
import { Config } from '../config';
import { Routing } from '../pages';
import { ApiContext, Api } from '../providers/api';

const App: Component = () => {
  const weatherClient = CreateHttpClient(Config.WeatherApiRoute);
  const api: Api = {
    weather: new HttpWeatherApi(weatherClient, Config.WeatherApiKey),
  };

  return (
    <ApiContext.Provider value={api}>
      <Router>
        <Routing />
      </Router>
      <Footer />
    </ApiContext.Provider>
  );
};

export default App;
