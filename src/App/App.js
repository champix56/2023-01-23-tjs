import React from 'react';
import Button from './components/ui/Button/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <hr />
      <Button>Cliquez ici!!</Button>
      <Button>Cancel</Button>
      <Button>ok</Button>
      <Button>Hello</Button>
      <Button children="Hello" />
    </div>
  );
}

export default App;
