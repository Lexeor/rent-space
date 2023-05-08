import { useState } from "react";
import Header from "./components/Header";
import Popup from "./components/popup/Popup";
import "./styles/Variables.css";
import "./styles/App.css";
import "./styles/Styles.css";
import "remixicon/fonts/remixicon.css";

function App() {
  const [popup, setPopup] = useState(false);

  const popupCloseHandler = (e) => {
    setPopup(e);
  };

  const togglePopup = (e) => {
    setPopup(e);
  };

  return (
    <div className="App">
      <Header togglePopup={togglePopup} />
      <div className="container">
        <div className="content"></div>
      </div>
      <Popup show={popup} togglePopup={popupCloseHandler} />
    </div>
  );
}

export default App;
