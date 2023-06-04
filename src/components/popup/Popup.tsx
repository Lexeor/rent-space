import React from "react";
import { useContext } from "react";
import { PopupContext } from "../contexts/PopupContext";

function Popup() {
  const popupContext = useContext(PopupContext);

  return (
    <div
      className="overlay"
      style={{
        visibility: popupContext!.showLoginPopup ? "visible" : "hidden",
        opacity: popupContext!.showLoginPopup ? "1" : "0",
      }}
    >
      <div className="popup">
        <i
          className="ri-close-line close"
          onClick={popupContext!.toggleLoginPopup}
        ></i>
        <div className="popup-logo">
          <img
            src={window.location.origin + "/logo.png"}
            alt="Logo"
            className="logo-big"
          />
        </div>
        <div className="popup-header">
          <h2>Login or Signup</h2>
        </div>
        <div className="popup-logon-area w-100">
          <input type="text" id="flogin" name="fname" placeholder="Login" />
          <input
            type="password"
            id="lpass"
            name="fpassword"
            placeholder="Password"
          />
        </div>
        <button className="btn-primary w-100 h-medium">Login</button>
        <button className="btn-secondary w-100 h-medium">Signup</button>
      </div>
    </div>
  );
}

export default Popup;
