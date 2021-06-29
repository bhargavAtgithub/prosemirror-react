import React from "react";

// styled-components
import { ThemeProvider } from "styled-components";
import { theme } from "./infrastructure/theme";

// importing fonts
import "./assets/fonts/poppins/Poppins-Thin.ttf";
import "./assets/fonts/poppins/Poppins-ThinItalic.ttf";
import "./assets/fonts/poppins/Poppins-SemiBold.ttf";
import "./assets/fonts/poppins/Poppins-SemiBoldItalic.ttf";
import "./assets/fonts/poppins/Poppins-Regular.ttf";
import "./assets/fonts/poppins/Poppins-Medium.ttf";
import "./assets/fonts/poppins/Poppins-MediumItalic.ttf";
import "./assets/fonts/poppins/Poppins-Light.ttf";
import "./assets/fonts/poppins/Poppins-LightItalic.ttf";
import "./assets/fonts/poppins/Poppins-Bold.ttf";
import "./assets/fonts/poppins/Poppins-BoldItalic.ttf";
import "./assets/fonts/poppins/Poppins-Black.ttf";
import "./assets/fonts/poppins/Poppins-BlackItalic.ttf";
// importing monospace font
import "./assets/fonts/CutiveMono/CutiveMono-Regular.ttf";

// importing context providers
import { LayoutProvider } from "./infrastructure/layout/context/layout.context";

// import features
import { Editor } from "./features/Editor";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LayoutProvider>
        <div>
          <p>Hello!</p>
        </div>
        <Editor />
      </LayoutProvider>
    </ThemeProvider>
  );
}

export default App;
