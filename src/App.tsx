import React from "react";
import Navbar from "./Components/Navbar";
import "./Style/App.css";
import FullViewportContainer from "./Components/FullViewportContainer";
import CardList from "./Components/CardList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FullViewportContainer></FullViewportContainer>
      <CardList></CardList>
    </div>
  );
};

export default App;
