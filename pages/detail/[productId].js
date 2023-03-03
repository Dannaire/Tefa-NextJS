import Image from 'next/image';
import products from '../../data/products.json';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPlus, FaMinus ,FaTrash} from 'react-icons/fa';
import Navbar from '@/components/nav';
import Head from 'next/head';

export default function Detail() {
    const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleTrash = () => {
    setCount(0);
  };
  const router = useRouter();
  const { productId } = router.query;

  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
       <Navbar/>
<div className='card-con'>
<div className="card-wrapper">
        <div className="card">
          {/* card left */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={product.image} alt="shoe image" />
                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
                <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" data-id={1}>
                  <img src={product.image} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id={2}>
                  <img src={product.image} alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id={3}>
                  <img src={product.image}alt="shoe image" />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id={4}>
                  <img src={product.image} alt="shoe image" />
                </a>
              </div>
            </div>
          </div>
          {/* card right */}
          <div className="product-content">
            <h2 className="product-title">{product.name}</h2>
            <a href="#" className="product-link">VISIT DannSneaky.</a>
            <div className="product-rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <span>4.7(21)</span>
            </div>
            <div className="product-price">
              {/* <p className="last-price">Old Price: <span>$257.00</span></p> */}
              <p className="new-price"><span>$ {product.price} </span></p>
            </div>
            <div className="product-detail">
              <h2>about this item: </h2>
              <p>{product.description}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
              <ul>
                <li>Color: <span>{product.colors}</span></li>
                <li>Available: <span>{product.available}</span></li>
                <li>Category: <span>{product.category}</span></li>
                <li>Gender: <span>{product.gender}</span></li>
                <li>Shipping Fee: <span>Free</span></li>
              </ul>
            </div>
            <div className="purchase-info">
            <div className="count-container">
        <button type="button" className="btn" onClick={handleDecrement}>
          <FaMinus />
        </button>
        <input type="number" min={0} value={count} readOnly />
        <button type="button" className="btn" onClick={handleIncrement}>
          <FaPlus />
        </button>
        <button className="btn-trash" onClick={handleTrash}>
          <FaTrash />
        </button>
        <button type="button" className="btn-neon">
                Add to Cart <i className="fas fa-shopping-cart" />
              </button>
        </div>
            </div>
            <div className="social-links">
              <p>Share At: </p>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}






       
  
      
 