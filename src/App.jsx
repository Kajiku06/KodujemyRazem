import React from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from "./NavComponents/Footer/Footer";
import NavTopBar from "./NavComponents/NavTopBar/NavTopBar";
import MainWebsite from "./ContentComponents/MainWebsite/MainWebsite";
import "./App.css"
import NotFound from "./ContentComponents/NotFound/NotFound";

const App = () => {
  return (
    <>
      <NavTopBar />
        <Routes>
          <Route path="/" element={<MainWebsite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer/>
    </>
  );
};
 

export default App;