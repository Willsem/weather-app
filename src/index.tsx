import { render } from 'solid-js/web';

import './index.css';
import App from './app';

const root = document.getElementById('root');

if (root === null) {
  throw new Error('Root element not found.');
}

render(() => <App />, root);
