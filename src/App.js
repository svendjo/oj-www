import React, { useState } from 'react';
import './App.css';
import { content, NAV } from './content';
import Banner from './components/Banner';
import Nav from './components/Nav';
import LanguageSwitcher from './components/LanguageSwitcher';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';

function App() {
  const [lang, setLang] = useState('en');
  const [page, setPage] = useState('home');

  // Products is currently English-only; everything else is translated.
  const data = content[lang];

  const renderPage = () => {
    switch (page) {
      case 'products':
        return <Products lang={lang} />;
      case 'about':
        return <About data={data.about} />;
      case 'contact':
        return <Contact data={data.contact} />;
      case 'home':
      default:
        return <Home data={data.home} />;
    }
  };

  return (
    <div className="App">
      <Banner />
      <Nav page={page} lang={lang} onNavigate={setPage} />

      <div className="layout">
        <LanguageSwitcher lang={lang} onChange={setLang} />
        <main className="content" aria-label={NAV[lang][page]}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
