import React from 'react';
import './App.css';
import Greetings from "./components/Greetings/Greetings";

function App() {
  return (
    <div className="App">
      <Greetings name={'Maria'} lastname={'Soria'}>  </Greetings>
    </div>
  );
}

export default App;
