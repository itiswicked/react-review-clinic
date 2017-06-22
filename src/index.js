import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// I'm actually main.js!

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// IGNORE ME!
registerServiceWorker();
