import React, { useState } from 'react';

const Tour = ({ id, name, image, price, info, removeTour }) => {
  const [flag, setFalg] = useState(true);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {flag ? `${info.substr(0, 200)}...` : info}
          <button
            onClick={() => {
              setFalg(!flag);
            }}
          >
            {flag ? 'showmore' : 'showless'}
          </button>
        </p>

        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          not intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
