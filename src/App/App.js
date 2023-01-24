import React from 'react';
import Button from './components/ui/Button/Button'
import './App.css';
class App extends React.PureComponent {
  counter=0;
  render() {
    return (
      <div className="App">
        voici le nb de click : {this.counter}
        <hr />
        <Button onButtonClick={() => {
          this.counter--;
          console.log(this.counter);
        }}>Click -1</Button>
        <Button>Click +1</Button>
      </div>
    );
  }
}

// function App() {
//   let counter = 0;
//   return (
//     <div className="App">
//       voici le nb de click : {counter}
//       <hr />
//       <Button onButtonClick={() => {
//         counter--;
//         console.log(counter);
//       }}>Click -1</Button>
//       <Button>Click +1</Button>
//     </div>
//   );
// }

export default App;
