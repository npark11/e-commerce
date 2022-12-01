import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Company</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aperiam labore nostrum, eaque vitae, sequi tenetur deleniti ad molestiae ipsa saepe maiores qui nulla consequatur excepturi, nihil repellendus pariatur asperiores.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aperiam labore nostrum, eaque vitae, sequi tenetur deleniti ad molestiae ipsa saepe maiores qui nulla consequatur excepturi, nihil repellendus pariatur asperiores.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">LemonTree</span>
          <span className="copyright">
            ⓒ Copyright 2022. All rights reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer