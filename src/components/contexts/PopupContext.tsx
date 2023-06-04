import React, { createContext, useState } from "react";

// Types
type PopupContextProviderType = {
  children: React.ReactNode;
};

type PopupContextType = {
  showLoginPopup: boolean;
  setShowLoginPopup: React.Dispatch<React.SetStateAction<boolean>>;
  showTopMenuPopup: boolean;
  setShowTopMenuPopup: React.Dispatch<React.SetStateAction<boolean>>;
  toggleLoginPopup: () => void;
  showTopMenu: (c: string) => void;
  hideTopMenu: () => void;
  content: React.ReactNode | null;
};

// Create context
export const PopupContext = createContext<PopupContextType | null>(null);

// Context provider
export const PopupContextProvider = ({
  children,
}: PopupContextProviderType) => {
  const [content, setContent] = useState<string | null>(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showTopMenuPopup, setShowTopMenuPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup((prev) => !prev);
  };

  const hideTopMenu = () => {
    setShowTopMenuPopup(false);
  };

  // Show top menu with content of type React.ReactNode
  const showTopMenu = (c: string) => {
    setShowTopMenuPopup(true);
    if (c) {
      setContent(c);
    }
  };

  const value: PopupContextType = {
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
