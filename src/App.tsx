import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import FullViewportContainer from "./FullViewportContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FullViewportContainer></FullViewportContainer>
    </div>
  );
};

export default App;
