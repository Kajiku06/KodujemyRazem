import React, { useState, useEffect } from 'react';
import './ContentSelectionPages.css'


import RightPanel from './ContentSelectionPagesComponents/RightPanel';
import CardViewsPanel from './ContentSelectionPagesComponents/CardViewsPanel';
import SearchPanel from './ContentSelectionPagesComponents/SearchPanel';

const SelectionPage = (props) => {
  const { someProp } = props;
  const initialPages = [
    { title: "Sortowanie bąbelkowe", link: "https://eduinf.waw.pl/inf/alg/003_sort/0004.php", tags: ["sortowanie", "bubble sort"] },
    { title: "Sortowanie przez wstawianie", link: "https://eduinf.waw.pl/inf/alg/003_sort/0010.php", tags: ["sortowanie", "insertion sort"] },
    { title: "Sortowanie przez wybieranie", link: "https://eduinf.waw.pl/inf/alg/003_sort/0009.php", tags: ["sortowanie", "selection sort"] },
    { title: "Przeszukiwanie binarne", link: "https://www.algorytm.edu.pl/algorytmy-maturalne/wyszukiwanie-binarne.html" ,tags: ["przeszukiwanie", "binarne"] },
    { title: "Drzewa AVL", link: "https://eduinf.waw.pl/inf/alg/001_search/0119.php", tags: ["drzewa", "AVL"] },
    { title: "SQL", link: "https://pl.wikipedia.org/wiki/SQL", tags: ["SQL"] },
    { title: "Indeksowanie w bazach danych", link: "http://www.pwsz.legnica.edu.pl/~jgz/bazy_danych/indeksowanie%20i%20relacje.htm", tags: ["bazy danych", "indeksowanie"] },
    { title: "Normalizacja danych", link: "https://appmaster.io/pl/blog/co-to-jest-normalizacja-danych", tags: ["normalizacja", "dane"] },
    { title: "Algorytmy sortowania szybkiego (Quicksort)", link: "https://eduinf.waw.pl/inf/alg/003_sort/0018.php", tags: ["sortowanie", "quicksort"] },
    { title: "Algorytmy sortowania przez scalanie (Merge sort)", link: "https://eduinf.waw.pl/inf/alg/003_sort/0013.php", tags: ["sortowanie", "merge sort"] },
    { title: "Algorytmy sortowania przez kopcowanie (Heapsort)", link: "https://eduinf.waw.pl/inf/alg/003_sort/0017.php", tags: ["sortowanie", "heapsort"] },
    { title: "Algorytmy maturalne - problem skoczka szachowego", link: "https://swistak.codes/post/problem-skoczka-szachowego/", tags: ["algorytmy", "maturalne", "skoczek szachowy"] },
    { title: "Algorytmy maturalne - problem komiwojażera", link: "https://eduinf.waw.pl/inf/alg/001_search/0140.php", tags: ["algorytmy", "maturalne", "komiwojażer"] },
    { title: "Bazy danych NoSQL", link: "https://www.oracle.com/pl/database/nosql/what-is-nosql/", tags: ["bazy danych", "NoSQL"] },
    { title: "Zapytania SQL z wykorzystaniem JOIN", link: "https://www.samouczekprogramisty.pl/klauzula-join-w-zapytaniach-sql/", tags: ["SQL", "zapytania", "JOIN"] },
    { title: "Relacje w bazach danych", link:"https://rafalorzelek.pl/bazy-danych/44-06-typy-relacji.html",tags: ["bazy danych", "relacje"] },
    { title: "Algorytmy grafowe", link: "https://eduinf.waw.pl/inf/alg/001_search/0122.php",tags: ["algorytmy", "grafowe"] },
    { title: "Przeszukiwanie wszerz (BFS)", link: "https://www.algorytm.edu.pl/grafy/bfs.html", tags: ["przeszukiwanie", "wszerz", "BFS"] },
    { title: "Przeszukiwanie w głąb (DFS)", link: "http://algorytmy.ency.pl/artykul/przeszukiwanie_w_glab", tags: ["przeszukiwanie", "DFS"] },
    { title: "Algorytmy dynamiczne", link: "https://algorytmy.oki.org.pl/dynamik.html", tags: ["algorytmy", "dynamiczne"] },
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