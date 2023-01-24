import { MemeSVGViewer } from 'orsys-tjs-meme';
import { DummyMeme } from './interfaces/dummyMeme';
import React from 'react';
import './App.css';
import MemeForm from './components/feature/MemeForm/MemeForm';
import FlexHLayout from './components/layout/FlexHLayout/FlexHLayout';
interface IAppState { }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
  render() {
    return (
      <div className="App">
        <FlexHLayout>
          <MemeSVGViewer image={undefined} meme={DummyMeme} />
          <MemeForm/>
        </FlexHLayout>
      </div>
    );
  }
}


export default App;
