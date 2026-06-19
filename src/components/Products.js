import React, { useState, useEffect } from 'react';
import { products } from '../content';

function ProductCard({ item, labels, expanded, onToggle }) {
  const gallery = item.gallery || [];
  // `frame` is unbounded; we wrap it into range so the arrows cycle endlessly.
  const [frame, setFrame] = useState(0);
  const len = gallery.length;
  const idx = len ? ((frame % len) + len) % len : 0;

  return (
    <div className={`product-card${expanded ? ' expanded' : ''}`}>
      <button type="button" className="product-head" onClick={onToggle} aria-expanded={expanded}>
        <img src={`/images/${item.thumb}`} alt={item.name} />
        <span className="product-name">{item.name}</span>
        <span className="product-toggle" aria-hidden="true">{expanded ? '−' : '+'}</span>
      </button>

      {expanded && (
        <div className="product-detail">
          {len > 0 && (
            <figure className="product-gallery">
              <img
                className="product-diagram"
                src={`/images/${gallery[idx]}`}
                alt={`${item.name} (${idx + 1}/${len})`}
              />
              {len > 1 && (
                <figcaption className="gallery-controls">
                  <button
                    type="button"
                    className="gallery-arrow"
                    aria-label="Previous picture"
                    onClick={() => setFrame(frame - 1)}
                  >
                    ‹
                  </button>
                  <span className="gallery-count">{idx + 1} / {len}</span>
                  <button
                    type="button"
                    className="gallery-arrow"
                    aria-label="Next picture"
                    onClick={() => setFrame(frame + 1)}
                  >
                    ›
                  </button>
                </figcaption>
              )}
            </figure>
          )}
          {item.tagline && <p className="product-tagline">{item.tagline}</p>}

          {item.specs && item.specs.map((s, i) => (
            // The IP-rating specs (e.g. "IP 68 for Flexible Cables …") are
            // emphasised in every language; they always begin with "IP 6".
            <p key={i}>{/^IP 6/.test(s) ? <strong>{s}</strong> : s}</p>
          ))}

          {item.conformity && (
            <>
              <h4>{labels.conformity}</h4>
              <ul className="plain">
                {item.conformity.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </>
          )}

          {item.features && (
            <>
              <h4>{labels.features}</h4>
              <ul>
                {item.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </>
          )}

          {item.ordering && (
            <>
              <h4>{labels.ordering}</h4>
              <table className="ordering-table">
                <tbody>
                  {item.ordering.map(([desc, code]) => (
                    <tr key={desc}>
                      <td>{desc}</td>
                      <td className="code">{code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {item.note && <p className="product-note">{item.note}</p>}
        </div>
      )}
    </div>
  );
}

function Products({ lang }) {
  const catalogue = products[lang] || products.en;
  const { labels, items } = catalogue;
  // Start with everything collapsed; null means no card is open.
  const [openId, setOpenId] = useState(null);

  // If the open card no longer exists after a language switch, collapse all.
  useEffect(() => {
    if (openId !== null && !items.some((it) => it.id === openId)) {
      setOpenId(null);
    }
  }, [items, openId]);

  return (
    <article className="page products">
      <p className="lead">{labels.intro}</p>

      <div className="product-list">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            labels={labels}
            expanded={openId === item.id}
            onToggle={() => setOpenId(openId === item.id ? null : item.id)}
          />
        ))}
      </div>
    </article>
  );
}

export default Products;
