// useLayout is a hook to access all layout components.

import React, { useContext } from "react";

import { LayoutContext } from "./layout.context";

export const useLayout = () => {
  return useContext(LayoutContext);
};
