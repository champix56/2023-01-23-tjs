import { MemeSVGViewer, MemeInterface } from "orsys-tjs-meme";
import { DummyMeme } from "./interfaces/dummyMeme";
import React from "react";
import "./App.css";
import MemeForm from "./components/feature/MemeForm/MemeForm";
import FlexHLayout from "./components/layout/FlexHLayout/FlexHLayout";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
interface IAppState { meme: MemeInterface }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = { meme: DummyMeme };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <FlexHLayout style={{ height: '89vh' }}>
          <MemeSVGViewer image={undefined} meme={this.state.meme} />
          <MemeForm 
            meme={this.state.meme} 
            onMemeValueChange={(newMeme: MemeInterface) => { 
              this.setState({ meme: newMeme }) }
              } />
        </FlexHLayout>
        <Footer />
      </div>
    );
  }
}

export default App;
