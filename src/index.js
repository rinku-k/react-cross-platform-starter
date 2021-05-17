import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.runApplication(appName, {
//   rootTag: document.getElementById('root'),
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
