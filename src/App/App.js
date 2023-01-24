import React from 'react';
import Button from './components/ui/Button/Button'
import './App.css';

function App() {
  let counter=0;
  return (
    <div className="App">
     voici le nb de click : {counter}
     <hr/>
     <Button>Click -1</Button>
     <Button>Click +1</Button>
    </div>
  );
}

export default App;
