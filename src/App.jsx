import React from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from "./NavComponents/Footer/Footer";
import NavTopBar from "./NavComponents/NavTopBar/NavTopBar";
import MainWebsite from "./ContentComponents/MainWebsite/MainWebsite";
import "./App.css"
import NotFound from "./ContentComponents/NotFound/NotFound";
import SelectionPage from "./ContentComponents/ContentSelectionPages/SelectionPage";
import Calculator from "./KalkComponent/InterestingCalculator"
import ContactWebsite from "./ContentComponents/ContactWebsite/ContactWebsite";


const App = () => {
  const Algorytmy = 'Algorytmy';
  const Bazydanych = 'Bazy danych';
  const Sortowanie = 'Sortowanie';
  const Pusty= " ";

  return (
    <>
      <NavTopBar />
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/MaterialyNaukowe" element={<SelectionPage someProp={Pusty}/>}/>
        <Route path="/Algorytmy" element={<SelectionPage someProp={Algorytmy} />} />
        <Route path="/BazyDanych" element={<SelectionPage someProp={Bazydanych} />} />
        <Route path="/Sortowania" element={<SelectionPage someProp={Sortowanie} />} />
        <Route path="/Kontakt" element={<ContactWebsite/>}/>
        <Route path="/Kalkulator" element={<Calculator/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;