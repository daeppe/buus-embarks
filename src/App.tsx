import React from 'react';
import { Router } from './routers';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
