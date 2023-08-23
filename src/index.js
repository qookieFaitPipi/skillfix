import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

// react-router-dom
import { BrowserRouter } from 'react-router-dom';

// cookies
import { CookiesProvider } from 'react-cookie';

// redux
import { Provider } from 'react-redux';
import { store } from './Redux/store';

// react-query
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </CookiesProvider>
);
