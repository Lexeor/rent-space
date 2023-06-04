import React from "react";
import { useContext } from "react";
import { PopupContext } from "../contexts/PopupContext";

type MenuPopupProps = {};

function MenuPopup() {
  const popupContext = useContext(PopupContext);

  return (
    <div
      className="overlay-menu"
      style={{
        visibility: popupContext!.showTopMenuPopup ? "visible" : "hidden",
        opacity: popupContext!.showTopMenuPopup ? "1" : "0",
      }}
    >
      <div
        className="top-menu-container"
        onMouseLeave={popupContext!.hideTopMenu}
      >
        <div className="container">{popupContext!.content}</div>
      </div>
    </div>
  );
}

export default MenuPopup;
