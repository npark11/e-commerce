import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/695971/pexels-photo-695971.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link className="link" to="/products/1">Women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/7691003/pexels-photo-7691003.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link className="link" to="/products/1">New Season</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link className="link" to="/products/1">Men</Link>
          </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link className="link" to="/products/1">Accessories</Link>
          </button>
            </div>
          </div>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/1449844/pexels-photo-1449844.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <button>
            <Link className="link" to="/products/1">Shoes</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories