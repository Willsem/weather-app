import { Component } from 'solid-js';

import styles from './footer.module.scss';

export const Footer: Component = () => {
  return (
    <footer class={styles.footer}>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
        />
      </a>
    </footer>
  );
};
