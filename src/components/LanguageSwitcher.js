import React from 'react';
import { LANG_FLAGS } from '../content';

// Flag column on the left, same as the original site.
function LanguageSwitcher({ lang, onChange }) {
  return (
    <aside className="lang-switcher" aria-label="Language">
      {LANG_FLAGS.map(({ code, label, flag }) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${lang === code ? ' active' : ''}`}
          aria-label={label}
          aria-pressed={lang === code}
          title={label}
          onClick={() => onChange(code)}
        >
          <img src={`/images/${flag}`} alt={label} />
        </button>
      ))}
    </aside>
  );
}

export default LanguageSwitcher;
