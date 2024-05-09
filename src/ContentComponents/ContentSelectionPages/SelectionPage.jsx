import React, { useState, useEffect } from 'react';
import './ContentSelectionPages.css'


import RightPanel from './ContentSelectionPagesComponents/RightPanel';
import CardViewsPanel from './ContentSelectionPagesComponents/CardViewsPanel';
import SearchPanel from './ContentSelectionPagesComponents/SearchPanel';

const SelectionPage = (props) => {
  const { someProp } = props;
  const initialPages = [
    { title: "Sortowanie bąbelkowe", link: "/MaterialyNaukowe/Komponent", tags: ["sortowanie", "bubble sort"] },
    { title: "Sortowanie przez wstawianie", link: "/MaterialyNaukowe/Komponent", tags: ["sortowanie", "insertion sort"] },
    { title: "Sortowanie przez wybieranie", link: "/MaterialyNaukowe/Komponent", tags: ["sortowanie", "selection sort"] },
    { title: "Przeszukiwanie binarne", link: "/MaterialyNaukowe/Komponent" ,tags: ["przeszukiwanie", "binarne"] },
    { title: "Drzewa AVL", link: "/MaterialyNaukowe/Komponent", tags: ["drzewa", "AVL"] },
    { title: "SQL", link: "/MaterialyNaukowe/Komponent", tags: ["SQL"] },
    { title: "Indeksowanie w bazach danych", link: "/MaterialyNaukowe/Komponent", tags: ["bazy danych", "indeksowanie"] },
    { title: "Normalizacja danych", link: "/MaterialyNaukowe/Komponent", tags: ["normalizacja", "dane"] },
    { title: "Algorytmy sortowania szybkiego (Quicksort)", link: "/MaterialyNaukowe/Komponent", tags: ["sortowanie", "quicksort"] },
    { title: "Algorytmy sortowania przez scalanie (Merge sort)", link: "/MaterialyNaukowe/Komponent", tags: ["sortowanie", "merge sort"] },
    { title: "Algorytmy sortowania przez kopcowanie (Heapsort)", link: "/MaterialyNaukowe/Komponent", tags: ["sortowanie", "heapsort"] },
    { title: "Algorytmy maturalne - problem skoczka szachowego", link: "/MaterialyNaukowe/Komponent", tags: ["algorytmy", "maturalne", "skoczek szachowy"] },
    { title: "Algorytmy maturalne - problem komiwojażera", link: "/MaterialyNaukowe/Komponent", tags: ["algorytmy", "maturalne", "komiwojażer"] },
    { title: "Bazy danych NoSQL", link: "/MaterialyNaukowe/Komponent", tags: ["bazy danych", "NoSQL"] },
    { title: "Zapytania SQL z wykorzystaniem JOIN", link: "/MaterialyNaukowe/Komponent", tags: ["SQL", "zapytania", "JOIN"] },
    { title: "Relacje w bazach danych", link:"/MaterialyNaukowe/Komponent",tags: ["bazy danych", "relacje"] },
    { title: "Algorytmy grafowe", link: "/MaterialyNaukowe/Komponent",tags: ["algorytmy", "grafowe"] },
    { title: "Przeszukiwanie wszerz (BFS)", link: "/MaterialyNaukowe/Komponent", tags: ["przeszukiwanie", "wszerz", "BFS"] },
    { title: "Przeszukiwanie w głąb (DFS)", link: "/MaterialyNaukowe/Komponent", tags: ["przeszukiwanie", "DFS"] },
    { title: "Algorytmy dynamiczne", link: "/MaterialyNaukowe/Komponent", tags: ["algorytmy", "dynamiczne"] },
  ]; 

  const [pages, setPages] = useState(initialPages);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (someProp) {
      setSearchTerm(someProp);
      handleSearch(someProp);
    }
  }, [someProp]); 

  const handleSearch = (searchTerm) => {
    const filteredPages = initialPages.filter(page =>
      page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setPages(filteredPages);
  };

  return (
    <div className="selection-page">
      <div className='search-view-panel'>
        <SearchPanel onSearch={handleSearch} defaultSearchValue={someProp} />
        <CardViewsPanel pages={pages} />
      </div>
      <RightPanel />
    </div>
  );
};

export default SelectionPage;