import Image from 'next/image';
import { useState, useEffect } from 'react';
import products from '../data/products.json';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Card() {
  const router = useRouter();
  const [filter, setFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleBuyNowClick = (productId) => {
    router.push(`/detail/${productId}`);
  };

//   const handleFilter = (event) => {
//     setFilter(event.target.value);
//   };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const filteredResults = products.filter((product) => {
      return product.category.includes(filter) && product.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchResults(filteredResults);
  }, [filter, searchValue]);

  return (
    <>
      <div className='container'>
     
        <h1 className='title'>Best Seller</h1>
        <p className='subtitle'>Check out our most popular products</p>
        <div className='filter-bar'>
          <input type='text' placeholder='Search products...' value={searchValue} onChange={handleSearch} />
          {/* <select onChange={handleFilter}>
            <option value=''>All categories</option>
            <option value='converse'>converse</option>
            <option value='clothing'>Clothing</option>
            <option value='accessories'>Accessories</option>
          </select> */}
        </div>
        <div className='card-group'>
          {searchResults.map((product, index) => (
            <div className='card-home' key={index}>
              <Image src={product.image} alt={product.name} width={500} height={500} />
              <div className='details'>
                <h3>{product.name}</h3>
                <p className='price'>$ {product.price}</p>
                <button onClick={() => handleBuyNowClick(product.id)} className="buy-button">Buy Now</button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
