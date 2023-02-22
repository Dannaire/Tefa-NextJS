import Link from 'next/link';
import Image from 'next/image';
// import 'styles/nav.css'
// const inter = Inter({ subsets: ['latin'] })
import nike from '../public/Assets/image/shoe.png'
import jordan from '../public/Assets/image/jordan.png'

export default function Card() {
  return (
    <>
    <div className='container'>
        <h1 className='title'>Best Seller</h1>
        <p className='subtitle'>Check out our most popular products</p>
<div className='card-group'>
    <div className='card-home'>
        <Image src={nike} alt="Product Image"/>
        <div className='details'>
            <h3>Adidas Falcon Shoes for men - 2021 Edition</h3>
            <p className='price'>$120.99</p>
        </div>
    </div>
    <div className='card-home'>
        <Image src={nike} alt="Product Image"/>
        <div className='details'>
            <h3>Adidas Falcon Shoes for men - 2021 Edition</h3>
            <p className='price'>$120.99</p>
        </div>
    </div>
    <div className='card-home'>
        <Image src={nike} alt="Product Image"/>
        <div className='details'>
            <h3>Adidas Falcon Shoes for men - 2021 Edition</h3>
            <p className='price'>$120.99</p>
        </div>
    </div>
    <div className='card-home'>
        <Image src={nike} alt="Product Image"/>
        <div className='details'>
            <h3>Adidas Falcon Shoes for men - 2021 Edition</h3>
            <p className='price'>$120.99</p>
        </div>
    </div>
</div>
    
</div>
</>
  )
}