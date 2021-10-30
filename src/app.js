import React, { useEffect } from "react";
import { Navbar, Header } from "./components";
import Routes from "./routes";
import { fetchSpells } from "./store/spells";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpells());
  }, []);

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
