import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(<Auth0Provider
    domain="dev-akl5c58laszkxhuz.us.auth0.com"
    clientId="cqvPshqjUXgRDnW60QQU4WtpDgIxnF69"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  
  <App /></Auth0Provider>, document.getElementById('root'));
registerServiceWorker();
