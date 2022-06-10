import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import awsconfig from '../aws-exports'
import {Amplify} from 'aws-amplify'

const configureAmplify = () => {
  const urlsIn = awsconfig.oauth.redirectSignIn.split(',')
  const urlsOut = awsconfig.oauth.redirectSignOut.split(',')
  const currentHost = location.protocol + '//' + location.host
  const isCurrentHost = (url) => url.includes(currentHost)
  const newUrls = {
    redirectSignIn: urlsIn.find(url => isCurrentHost(url)),
    redirectSignOut: urlsOut.find(url => isCurrentHost(url))
  }
  Amplify.configure({
    ...awsconfig,
    oauth: {
      ...awsconfig.oauth,
      ...newUrls
    }
  })
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// serviceWorker.unregister();

