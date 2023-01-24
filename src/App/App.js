import React from 'react';
import Button from './components/ui/Button/Button'
import './App.css';
class App extends React.PureComponent {
  //counter=0;
  constructor(props){
    super(props);
    this.state={counter:0,uneValue:"hello"};
  }
  componentDidUpdate(oldProps,oldState){
    console.log('apres le changement effectif de l\'etat',this.state.counter);
    //console.log(arguments);
  }
  render() {
    return (
      <div className="App">
        voici le nb de click : {this.state.counter}
        <hr />
        <Button onButtonClick={() => {
          this.setState({counter:this.state.counter-1});
          //retard de un car setstate est async
          //console.log(this.state.counter);
        }}
        bgColor="steelblue"
        >Click -1</Button>
        <Button bgColor="tomato" style={{color:"red"}}>Click +1</Button>
        <Button style={{color:"red",}}>Click +1</Button>
        <br/>
        <Button onButtonClick={()=>{this.setState({counter:0})}}>Reset counter</Button>
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
