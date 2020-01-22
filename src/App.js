import React from 'react';
import logo from './logo.svg';
import './App.css';
import ROUTES, { RenderRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
