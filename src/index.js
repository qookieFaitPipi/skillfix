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
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </CookiesProvider>
);
