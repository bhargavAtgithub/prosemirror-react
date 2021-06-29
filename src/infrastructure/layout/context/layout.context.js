// Layout context contains access to all kinds of layout components.
// Loaders, Alerts, Modals, Containers, Errors etc.
// The idea for most layout components is each layout component will maintain a list to display those components in order [for eg: Alerts, Toasts, notifications, ]
//  Few other components [Modal, loader, containers] are components which will render child components in it. 

import React, { createContext } from "react";

// Importing Layout Components
import { Container } from "../components";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  return (
    <LayoutContext.Provider value={{}}>
      <Container>{children}</Container>
    </LayoutContext.Provider>
  );
};
