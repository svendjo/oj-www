import React from 'react';
import { NAV } from '../content';

// The four nav tabs. The original site used English-only button artwork
// (home_0.gif etc.) with the label baked into the image, so it could not be
// translated. We now render real text from NAV[lang] and style it as tabs on
// the black bar (see App.css .nav-btn) so the labels follow the language.
const TABS = ['home', 'products', 'about', 'contact'];

function Nav({ page, lang, onNavigate }) {
  return (
    <nav className="nav">
      {TABS.map((id) => {
        const active = page === id;
        return (
          <button
            key={id}
            type="button"
            className={`nav-btn${active ? ' active' : ''}`}
            aria-current={active ? 'page' : undefined}
            onClick={() => onNavigate(id)}
          >
            {NAV[lang][id]}
          </button>
        );
      })}
    </nav>
  );
}

export default Nav;
