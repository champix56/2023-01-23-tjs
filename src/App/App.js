import React from 'react';
import Button from './components/ui/Button/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <hr />
      <Button>Cliquez<br/>ici!!</Button>
      <Button><div>Cancel<br/>ag</div></Button>
      <Button>ok</Button>
      <Button><img src="/img/red_cross.png" alt='close'/>Hello</Button>
      <Button children="Hello" />
    </div>
  );
}

export default App;
