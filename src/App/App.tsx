import { MemeSVGViewer, MemeInterface, ImageInterface } from "orsys-tjs-meme";
import { DummyMeme } from "./interfaces/dummyMeme";
import React from "react";
import "./App.css";
import MemeForm from "./components/feature/MemeForm/MemeForm";
import FlexHLayout from "./components/layout/FlexHLayout/FlexHLayout";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { BASE_MEME_IMG, REST_ADR } from "./config/config";
import { store, uneValueAdeleteApresImplem } from "./store/store";
import Button from "./components/ui/Buttonts/Button";
import { addImage, fetchImagesListe } from "./store/listes";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
interface IAppState {  }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
 
 
  render() {
    return (
      <div className="App">
       
        <Header />
        <FlexHLayout style={{ height: '89vh' }}>
          <MemeSvgViewer/>
          <MemeForm/>
        </FlexHLayout>
        <Footer />

      </div>
    );
  }
}

export default App;
