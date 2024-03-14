import React from "react";
import Temp from "./components/weather/temp";
import "./App.css";

const App = () => {
  return (
    <>
      <Temp />
      <div className="body"></div>
    </>
  );
};

export default App;
