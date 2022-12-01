import React from "react";
import Routes from "./pages";
import ReduxProvider from "./providers/ReduxProvider";

const App = () => {
  return (
    <ReduxProvider>
      <Routes />
    </ReduxProvider>
  );
};

export default App;
