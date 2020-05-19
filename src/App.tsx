import React from 'react';
import './App.css';
import Greetings from "./components/Greetings/Greetings";
import Card from "./components/Card/Card";

const propiedades = {
    name: 'Maria',
    lastname: 'Soria'
}


function App() {
  return (
      <div className="App">
          <Greetings {...propiedades}>  </Greetings>
      </div>
  );
}

export default App;
