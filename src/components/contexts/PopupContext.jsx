import React, { createContext, useState } from "react";

export const PopupContext = createContext(null);

export const PopupContextProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showTopMenuPopup, setShowTopMenuPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup((prev) => !prev);
  };

  const hideTopMenu = () => {
    setShowTopMenuPopup(false);
  };

  const showTopMenu = (c) => {
    setShowTopMenuPopup(true);
    if (c) {
      setContent(c);
    }
  };

  const value = {
    showLoginPopup,
    setShowLoginPopup,
    showTopMenuPopup,
    setShowTopMenuPopup,
    toggleLoginPopup,
    showTopMenu,
    hideTopMenu,
    content,
  };

  return (
    <PopupContext.Provider value={value}> {children} </PopupContext.Provider>
  );
};
