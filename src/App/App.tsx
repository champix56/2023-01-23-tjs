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
import { addImage } from "./store/listes";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
interface IAppState {  }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
 
 
  render() {
    return (
      <div className="App">
        <Button bgColor="tomato" onButtonClick={() => {

          store.dispatch(addImage({ h: 1080, w: 1920, url: 'frozen-futurama.jpg', id: 123, name: "futurama" }));
        }}>Click for load</Button>
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
