import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className='container'>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>{product.price}h</div>
      <div>{product.gCO2}g CO2</div>
      <div>
      </div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
  );
}
