import React from 'react';
import Users from './resources/users';
import Perguntas from './resources/perguntas';

function App() {
  return (
    <div className="App">
      <h1>Fisio Game</h1>
      <Users />
      <Perguntas />
    </div>
  );
}

export default App;