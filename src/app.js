import React from "react";

import { Navbar } from "./components";
import Routes from "./routes";

const App = () => {
  return (
    <div className="main_container">
      <h1 className="main_title">Spellbook</h1>
      <div>
        <Navbar />
        <Routes />
      </div>
    </div>
  );
};

export default App;
