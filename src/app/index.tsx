import { Router } from '@solidjs/router';
import axios from 'axios';
import type { Component } from 'solid-js';
import { HttpWeatherApi } from '../api/http/weather';
import { Routing } from '../pages';
import { ApiContext, Api } from '../providers/api';

const App: Component = () => {
  const weatherClient = axios.create({
    baseURL: '',
    headers: {
      'Content-type': 'application/json',
    },
  });

  const api: Api = {
    weather: new HttpWeatherApi(weatherClient),
  };

  return (
    <ApiContext.Provider value={api}>
      <Router>
        <Routing />
      </Router>
    </ApiContext.Provider>
  );
};

export default App;
