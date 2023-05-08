import Header from "./components/Header";
import Popup from "./components/popup/Popup";
import MenuPopup from "./components/menu-popup/MenuPopup";
import { PopupContextProvider } from "./components/contexts/PopupContext";
import "./styles/Variables.css";
import "./styles/App.css";
import "./styles/Styles.css";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <div className="App">
      <PopupContextProvider>
        <Header />
        <Popup />
        <MenuPopup />
      </PopupContextProvider>
      <div className="container">
        <div className="content"></div>
      </div>
    </div>
  );
}

export default App;
