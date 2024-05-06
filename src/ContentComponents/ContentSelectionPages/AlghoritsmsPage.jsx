import React, { useState } from 'react';
import './ContentSelectionPages.css'


import RightPanel from './ContentSelectionPagesComponents/RightPanel';
import CardViewsPanel from './ContentSelectionPagesComponents/CardViewsPanel';
import SearchPanel from './ContentSelectionPagesComponents/SearchPanel';

const AlgorithmsPage = () => {
  const initialPages = [
    { title: "Sortowanie bąbelkowe", link: "https://example.com/bubble-sort" },
    { title: "Sortowanie przez wstawianie", link: "https://example.com/insertion-sort" },
    { title: "Sortowanie przez wybieranie", link: "https://example.com/selection-sort" },
    { title: "Przeszukiwanie binarne", link: "https://example.com/binary-search" },
    { title: "Drzewa AVL", link: "https://example.com/avl-trees" },
    { title: "SQL", link: "https://example.com/sql" },
    { title: "Indeksowanie w bazach danych", link: "https://example.com/database-indexing" },
    { title: "Normalizacja danych", link: "https://example.com/data-normalization" },
    { title: "Algorytmy sortowania szybkiego (Quicksort)", link: "https://example.com/quicksort" },
    { title: "Algorytmy sortowania przez scalanie (Merge sort)", link: "https://example.com/merge-sort" },
    { title: "Algorytmy sortowania przez kopcowanie (Heapsort)", link: "https://example.com/heapsort" },
    { title: "Algorytmy maturalne - problem skoczka szachowego", link: "https://example.com/knight-tour" },
    { title: "Algorytmy maturalne - problem komiwojażera", link: "https://example.com/travelling-salesman" },
    { title: "Bazy danych NoSQL", link: "https://example.com/nosql-databases" },
    { title: "Zapytania SQL z wykorzystaniem JOIN", link: "https://example.com/sql-joins" },
    { title: "Relacje w bazach danych", link: "https://example.com/database-relations" },
    { title: "Algorytmy grafowe", link: "https://example.com/graph-algorithms" },
    { title: "Przeszukiwanie wszerz (BFS)", link: "https://example.com/bfs-algorithm" },
    { title: "Przeszukiwanie w głąb (DFS)", link: "https://example.com/dfs-algorithm" },
    { title: "Algorytmy dynamiczne", link: "https://example.com/dynamic-programming" },
  ];

  const [pages, setPages] = useState(initialPages);

  const handleSearch = (searchTerm) => {
    const filteredPages = initialPages.filter(page =>
      page.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPages(filteredPages);
  };

  return (
    <div className="selection-page">
      <div className='search-view-panel'>
      <SearchPanel onSearch={handleSearch} />
      <CardViewsPanel pages={pages} /></div>
      <RightPanel/>
    </div>
  );
};

export default AlgorithmsPage;