import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data =[
    {
      id: 1,
      img: "https://images.pexels.com/photos/1936850/pexels-photo-1936850.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1943465/pexels-photo-1943465.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Dress",
      desc: "Lorem ipsum dolor adipisicing elit.",
      isNew: true,
      oldPrice: 418,
      price: 376,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/6939252/pexels-photo-6939252.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/6939264/pexels-photo-6939264.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "Lorem consectetur adipisicing elit.",
      isNew: true,
      oldPrice: 810,
      price: 712,
    }
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart;