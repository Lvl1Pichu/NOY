import React from "react";
import Navbar from "./Components/Navbar";
import "./Style/App.css";
import FullViewportContainer from "./Components/FullViewportContainer";
import CardList from "./Components/CardList";
import GridComponent from "./Components/CompanyGrid";
import { companyLogos } from "./CompanyData";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FullViewportContainer></FullViewportContainer>
      <CardList></CardList>
      <GridComponent companies={companyLogos}></GridComponent>
    </div>
  );
};

export default App;
