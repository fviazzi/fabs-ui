import * as React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { Router } from "@/core/router/Router";
import { store } from '@/core/store/store';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
);