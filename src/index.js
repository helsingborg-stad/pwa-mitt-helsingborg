import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'typeface-roboto';
import './index.css';
import { MemoryRouter } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TasksContext, { TasksProvider } from './context/tasks-context';

smoothscroll.polyfill();

ReactDOM.render(
  <MemoryRouter>
    <TasksProvider>
      <App />
    </TasksProvider>
  </MemoryRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
