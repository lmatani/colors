import React from 'react';

function boxColor ({color, value}) {

  let colorClass = `no-${color}`;
  let esColorElegido = false;
 
  if (color === value) {
    colorClass = `${color}`;
    esColorElegido = true;
  }

  return (
    <div className={`box ${colorClass}`}>
      {(esColorElegido) ? `Soy el color ${color}` : `No soy el color ${value}`}
    </div>
  );
}
export default boxColor;  
