import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const default_theme = {
  colors: {
    primary: 'hotpink'
  }
}

const data = { what: 'hmm' }

root.render(
  <StrictMode>
    <App data={data} theme={default_theme} />
  </StrictMode>
);
