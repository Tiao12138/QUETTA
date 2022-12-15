import React from 'react';
import Page2 from '../Page2';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Basket(props) {
  // str = num.{totalPrice.toFixed(1)};
  
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const Duration = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const gCO2 = cartItems.reduce((a, c) => a + c.qty * c.gCO2, 0);
  const totalPrice = Duration+gCO2;
  const [data, setData] = useState(totalPrice.toFixed(1));

  
  return (
    <div className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className='buttoncontainer'>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}

              <div>
              {item.qty*item.price.toFixed(1)}Hours</div>

              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              
            </div>
          </div>
        ))}


        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Total Duration</div>
              <div className="col-1 text-right">{itemsPrice.toFixed(2)}h</div>
            </div>
            

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
              <strong>{totalPrice.toFixed(1)} gCO2</strong>
              </div>
            </div>

            <hr />

            
            <div className="row">
                <Link to='/Page2' state={{data:data}} className='checkout'>
                   <div>Checkout</div>
                </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
