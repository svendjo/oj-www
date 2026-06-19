import React from 'react';

function Home({ data }) {
  // Replace the hardcoded leading year with the current one so the copyright
  // notice never goes stale.
  const copyright = data.year.replace(/^\d{4}/, new Date().getFullYear());

  return (
    <article className="page home">
      <figure className="hero">
        <img src={`/images/${data.image}`} alt={data.caption[0]} />
        <figcaption>
          {data.caption.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </figcaption>
      </figure>

      <h2>{data.liability}</h2>

      <h3>{data.accessoriesHeading}</h3>
      <p className="lead">
        {data.accessoriesSub.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < data.accessoriesSub.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
      <ul className="plain">
        {data.accessoriesList.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <h3>{data.eliwellHeading}</h3>
      <p>{data.eliwellText}</p>

      <p className="contact-prompt">
        {data.contactPrompt}{' '}
        <a href={`mailto:${data.email}`}>{data.email}</a>
      </p>

      <hr />
      <p className="fineprint">{data.trademark}</p>
      <p className="fineprint">{copyright}</p>
    </article>
  );
}

export default Home;
