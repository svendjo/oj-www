import React from 'react';

function About({ data }) {
  return (
    <article className="page about">
      <h2>{data.title}</h2>

      <div className="about-intro">
        <div className="about-intro-text">
          {data.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <img
          className="about-image"
          src={`/images/${data.image}`}
          alt={data.imageAlt}
        />
      </div>

      <dl className="timeline">
        {data.timeline.map(([year, text]) => (
          <div className="timeline-row" key={year}>
            <dt>{year}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default About;
