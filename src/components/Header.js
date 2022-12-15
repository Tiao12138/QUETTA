import React from 'react';

export default function Header(props) {
  return (
    <header className="row center headerblock">
      <div><h2>Q U E T T A</h2></div>
      <div>
        <a href="#basket" className="smoothScroll">
          {' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )} Go to Cart
        </a>{' '}
      </div>
    </header>
  );
}
