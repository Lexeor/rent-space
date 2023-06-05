import React, { useContext, useState, useEffect } from "react";
import { PopupContext } from "./contexts/PopupContext";
import * as fetch from "../utils/fetch";
import { NavLink } from "react-router-dom";

type MenuItem = {
  id: number;
  title: string;
  path: string;
};

function TopMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[] | null>([]);
  const popupContext = useContext(PopupContext);

  useEffect(() => {
    (async () => {
      const menuItems = await fetch.getMenuItems(false);
      setMenuItems(menuItems);
    })();
  }, []);

  function renderMenuItems() {
    return (
      <nav className="menu-top">
        {menuItems?.map((item) => {
          return (
            <NavLink
              key={item.id}
              className="menu-item"
              onMouseEnter={() => popupContext!.showTopMenu(item.title)}
              onClick={popupContext!.hideTopMenu}
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
