import React from "react";
import "./App.css";
import { Container } from "./components/Container";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="Main">
      <NavBar />
      <div className="App">
        <Container />
      </div>
    </div>
  );
}

export default App;
