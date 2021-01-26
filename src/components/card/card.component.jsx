import React from 'react';

import './card.styles.css';

export const Card = (props) => {
  const { monster } = props;
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`Monster ${monster.id}`}/>
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  )
}