import type { Component } from "solid-js";

import styles from "./App.module.scss";

const App: Component = () => {
  return (
    <div class={styles.app}>
      <h3>Weather App</h3>
    </div>
  );
};

export default App;
