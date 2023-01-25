import { MemeSVGViewer, MemeInterface, ImageInterface } from "orsys-tjs-meme";
import { DummyMeme } from "./interfaces/dummyMeme";
import React from "react";
import "./App.css";
import MemeForm from "./components/feature/MemeForm/MemeForm";
import FlexHLayout from "./components/layout/FlexHLayout/FlexHLayout";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { BASE_MEME_IMG, REST_ADR } from "./config/config";
interface IAppState { meme: MemeInterface, images: Array<ImageInterface> }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      meme: DummyMeme, images: []
    };
  }
  componentDidMount(){
    fetch(`${REST_ADR}/images`)
      .then(r=>r.json(),r=>[])
      .then(ar=>this.setState({images:ar}));
  }
  render() {
    return (
      <div className="App">
        <Header />
        <FlexHLayout style={{ height: '89vh' }}>
          <MemeSVGViewer
            basePath={BASE_MEME_IMG}
            image={this.state.images.find(e => {
              return e.id === this.state.meme.imageId
            })}
            meme={this.state.meme} />
          <MemeForm
            meme={this.state.meme}
            images={this.state.images}
            onMemeValueChange={(newMeme: MemeInterface) => {
              this.setState({ meme: newMeme })
            }
            } />
        </FlexHLayout>
        <Footer />
      </div>
    );
  }
}

export default App;
