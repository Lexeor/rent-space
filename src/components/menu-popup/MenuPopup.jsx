import React from "react";
import { useContext } from "react";
import { PopupContext } from "../contexts/PopupContext";

function MenuPopup(props) {
  const { showTopMenuPopup, hideTopMenu, content } = useContext(PopupContext);

  return (
    <div
      className="overlay-menu"
      style={{
        visibility: showTopMenuPopup ? "visible" : "hidden",
        opacity: showTopMenuPopup ? "1" : "0",
      }}
    >
      <div className="top-menu-container" onMouseLeave={hideTopMenu}>
        <div className="container">{content}</div>
      </div>
    </div>
  );
}

export default MenuPopup;
