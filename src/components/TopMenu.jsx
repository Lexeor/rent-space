import React, { useContext, useState, useEffect } from "react";
import { PopupContext } from "./contexts/PopupContext";
import { getMenuItems } from "../utils/fetchHelper";
import { NavLink } from "react-router-dom";

function TopMenu(props) {
  const [menuItems, setMenuItems] = useState([]);
  const { showTopMenu, hideTopMenu } = useContext(PopupContext);

  useEffect(() => {
    (async () => {
      const menuItems = await getMenuItems(false);
      setMenuItems(menuItems);
    })();
  }, []);

  function renderMenuItems() {
    return (
      <nav className="menu-top">
        {menuItems.map((item) => {
          return (
            <NavLink
              key={item.id}
              className="menu-item"
              onMouseEnter={() => showTopMenu(item.title)}
              onClick={hideTopMenu}
              to={item.path}
            >
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    );
  }

  return (
    <>
      {renderMenuItems()}
      {/* <div className="menu-item" onMouseEnter={() => showTopMenu("Rent")}>
        Rent
      </div>
      <div className="menu-item" onMouseEnter={() => showTopMenu("Sale")}>
        Sale
      </div>
      <div className="menu-item" onMouseEnter={() => showTopMenu("More")}>
        More
      </div> */}
    </>
  );
}

export default TopMenu;
