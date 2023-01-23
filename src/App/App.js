import React from 'react';
import Button from './components/ui/Button/Button'
import Button2 from './components/ui/Button2/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <hr />
      <Button>Cliquez<br/>ici!!</Button>
      <Button2><div>Cancel<br/>ag</div></Button2>
      <Button>ok</Button>
      <Button2><img src="/img/red_cross.png" alt='close'/>Hello</Button2>
      <Button children="Hello" />
    </div>
  );
}

export default App;
