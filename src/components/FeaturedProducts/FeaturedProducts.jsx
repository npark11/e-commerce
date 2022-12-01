import React from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';

const FeaturedProducts = ({type}) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1936850/pexels-photo-1936850.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1943465/pexels-photo-1943465.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Dress",
      isNew: true,
      oldPrice: 418,
      price: 376,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/6939252/pexels-photo-6939252.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/6939264/pexels-photo-6939264.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 810,
      price: 712,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2853460/pexels-photo-2853460.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      isNew: false,
      oldPrice: 109,
      price: 72,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/9399676/pexels-photo-9399676.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      isNew: false,
      oldPrice: 35,
      price: 21,
    }
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quos quisquam eligendi atque, sapiente ipsa laborum officia quidem! Officia, eaque eos. Consequuntur, autem rem facilis error iste atque laudantium. Tenetur impedit aut rem aspernatur. Enim.
        </p>
      </div>

      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts