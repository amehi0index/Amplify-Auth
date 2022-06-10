import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
awsconfig.oauth.redirectSignIn = `${window.location.origin}/`;
awsconfig.oauth.redirectSignOut = `${window.location.origin}/`;
Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// serviceWorker.unregister();

