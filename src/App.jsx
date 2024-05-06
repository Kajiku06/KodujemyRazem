import React from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from "./NavComponents/Footer/Footer";
import NavTopBar from "./NavComponents/NavTopBar/NavTopBar";
import MainWebsite from "./ContentComponents/MainWebsite/MainWebsite";
import "./App.css"
import NotFound from "./ContentComponents/NotFound/NotFound";
import AlghoritsmsPage from "./ContentComponents/ContentSelectionPages/AlghoritsmsPage";
import SortsPage from "./ContentComponents/ContentSelectionPages/SortsPage";
import DataBasesPage from "./ContentComponents/ContentSelectionPages/DataBasesPage";

const App = () => {
  return (
    <>
      <NavTopBar />
        <Routes>
          <Route path="/" element={<MainWebsite />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Algorytmy" element={<AlghoritsmsPage/>}/>
          <Route path="/BazyDanych" element={<DataBasesPage/>}/>
          <Route path="/Sortowania" element={<SortsPage/>}/>
        </Routes>
      <Footer/>
    </>
  );
};
 

export default App;