require('../dist/bootstrap/css/bootstrap.min.css');
require('./css/main.css');

import React from 'react';
import ReactDOM from 'react-dom';

let App = ({message}) => (
  <div>{message}</div>
)

main();

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);

  ReactDOM.render(<App message="Hello React!"/>, app);
}
