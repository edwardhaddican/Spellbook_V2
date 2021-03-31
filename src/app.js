import React from "react";
import { Navbar, Header } from "./components";
import Routes from "./routes";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <div>
        <Navbar />
        <Routes />
      </div>
    </div>
  );
};

export default App;
