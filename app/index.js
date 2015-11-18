require('../dist/bootstrap/css/bootstrap.min.css');
require('./css/main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

main();

function main() {
  const app = document.createElement('div');
  const users = [
   { name: 'Alex', roles:['admin', 'user', 'custom', 'banana', 'ffff']},
   { name: 'Mark', roles:['admin', 'user', 'godmode']},
   { name: 'Jenna', roles:['user', 'custom']},
   { name: 'Kelly', roles:['user', 'custom']},
   { name: 'Becky', roles:['admin', 'user']},
  ];


  document.body.appendChild(app);

  ReactDOM.render(<App users={users}/>, app);
}
