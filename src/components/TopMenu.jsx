import React, { useContext } from "react";
import { PopupContext } from "./contexts/PopupContext";

function TopMenu(props) {
  const { showTopMenu } = useContext(PopupContext);
  return (
    <div className="menu-top">
      <div className="menu-item" onMouseEnter={() => showTopMenu("Rent")}>
        Rent
      </div>
      <div className="menu-item" onMouseEnter={() => showTopMenu("Sale")}>
        Sale
      </div>
      <div className="menu-item" onMouseEnter={() => showTopMenu("More")}>
        More
      </div>
    </div>
  );
}

export default TopMenu;
