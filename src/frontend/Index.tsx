import * as React from 'react';
import { render } from 'react-dom';

const appRoot = () => {
  const App = require('./app/App').App;
  render(<App />, document.getElementById('app'));
};

appRoot();

if (module.hot) {
  module.hot.accept('./app/App', appRoot);
}