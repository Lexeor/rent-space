import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Popup from "./components/popup/Popup";
import MenuPopup from "./components/menu-popup/MenuPopup";
import { PopupContextProvider } from "./components/contexts/PopupContext";
import "remixicon/fonts/remixicon.css";

// Pages
import Home from "./pages/Home";
import Rent from "./pages/Rent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PopupContextProvider>
          <Header />
          <Popup />
          <MenuPopup />
        </PopupContextProvider>
        <div className="container">
          <div className="content">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/rent" element={<Rent />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
