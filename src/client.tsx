import * as React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

const Client = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

hydrate(<Client />, document.getElementById('app'));
