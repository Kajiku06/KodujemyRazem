import React from 'react';
import './MainWebsite.css';

const MainWebsite = () => {
  const handleScroll = () => {
    const header = document.getElementById('header');
    if (header) {
      const scrollPos = window.scrollY;
      if (scrollPos > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-container">
      <header id="header" className="header">
        <h1></h1>
      </header>

      <div className="card-view">
        <div className="card"> 
          <a href="/BazyDanych">
            <div className="image-container">
              <img src="src\ContentComponents\MainWebsite\img1.jpg" alt="BD" />
              <div className="text-overlay">Bazy Danych</div>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="/Sortowania">
            <div className="image-container">
              <img src="src\ContentComponents\MainWebsite\img2.jpg" alt="Obrazek 2" />
              <div className="text-overlay">Sortowania</div>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="/Algorytmy">
            <div className="image-container">
              <img src="src\ContentComponents\MainWebsite\img3.jpg" alt="Obrazek 3" />
              <div className="text-overlay">Algorytmy</div>
            </div>
          </a>
        </div>
        {/*Karty */}
      </div>
      <div className="calc">
        <h2>Ciekawy Kalkulator</h2>
        <p>
Ciekawy Kalkulator to interaktywne narzędzie, które umożliwia użytkownikom wykonywanie różnych obliczeń matematycznych w sposób prosty i intuicyjny. Jest to więcej niż zwykły kalkulator, ponieważ może zawierać dodatkowe funkcje i opcje, które sprawiają, że jest interesujący i użyteczny dla użytkowników.</p>
        <a href="/Kalkulator" className="button">Zobacz!</a>
      </div>
    </div>
  );
};
export default MainWebsite;
