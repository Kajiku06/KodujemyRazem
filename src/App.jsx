import React from "react";
import Footer from "./NavComponents/Footer/Footer";
import NavTopBar from "./NavComponents/NavTopBar/NavTopBar";
import MeinWebsite from "./ContentComponents/MainWebsite/MainWebsite";
import "./App.css"

const App = () => (
  <div id="Test">
    <NavTopBar />
    <MeinWebsite/>
    <Footer />
  </div>
);

export default App;