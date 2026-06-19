import React from 'react';

function Contact({ data }) {
  return (
    <article className="page contact">
      <h2>{data.title}</h2>
      <p>{data.orderLine}</p>

      <table className="contact-table">
        <tbody>
          {data.rows.map(([label, value]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>
                {label.toLowerCase().includes('mail') ? (
                  <a href={`mailto:${value}`}>{value}</a>
                ) : (
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>{data.addressLabel}</h3>
      <address>
        {data.address.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </address>

      <h3>{data.adminLabel}</h3>
      <ul className="plain">
        {data.admin.map(([role, name]) => (
          <li key={role}>
            {role}: <i>{name}</i>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Contact;
