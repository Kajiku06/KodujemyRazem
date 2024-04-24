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
          <a href="/strona-1">
            <div className="image-container">
              <img src="https://zndirect.pl/wp-content/uploads/2023/08/co-to-baza-danych.jpeg" alt="BD" />
              <div className="text-overlay">Bazy Danych</div>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="/strona-2">
            <div className="image-container">
              <img src="https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg" alt="Obrazek 2" />
              <div className="text-overlay">Sortowania</div>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="/strona-3">
            <div className="image-container">
              <img src="https://media.istockphoto.com/id/1010690668/photo/power-of-big-data-binary-code-information-bit-on-computer-monitor-screen-display-led-light.webp?b=1&s=170667a&w=0&k=20&c=BAOuBm1FZEzxsN1zDkYCv2TG9cIY8IxTWuj-EglLvo8=" alt="Obrazek 3" />
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
        <a href="/jakies-link" className="button">Zobacz!</a>
      </div>
    </div>
  );
};
export default MainWebsite;
