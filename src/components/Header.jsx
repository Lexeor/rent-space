import React, { useContext } from "react";
import TopMenu from "./TopMenu";
import { Tooltip } from "react-tooltip";
import { PopupContext } from "./contexts/PopupContext";

function Header(props) {
  const { toggleLoginPopup } = useContext(PopupContext);

  return (
    <header>
      <div className="container">
        <div className="menubar">
          <div className="menu-icon">
            <i className="ri-menu-line"></i>
          </div>
          <img
            src={window.location.origin + "/logo.png"}
            alt="Logo"
            className="logo"
          />
          <div className="menu-area">
            <TopMenu />
          </div>
          <div className="icons-area">
            <i
              className="ri-heart-line"
              data-tooltip-id="tt-fav"
              data-tooltip-content="Favorites"
            ></i>
            <i
              className="ri-notification-4-line"
              data-tooltip-id="tt-notify"
              data-tooltip-content="Notifications"
            ></i>
          </div>
          <div className="btn-area">
            <button className="btn-primary">+ Create ad</button>
            <button className="btn-secondary" onClick={toggleLoginPopup}>
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Tooltips */}
      <Tooltip id="tt-fav" />
      <Tooltip id="tt-notify" />
    </header>
  );
}

export default Header;
