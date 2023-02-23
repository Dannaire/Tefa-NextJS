
import Link from 'next/link';
import Navbar from '@/components/nav';
import Image from 'next/image';
import sneaker from '../public/Assets/image/sneaker.png';
import sneakerleft from '../public/Assets/image/samba.png';
import adidas from '../public/Assets/image/adidaslogo.png';
import nb from '../public/Assets/image/nblogo.png';
import nike from '../public/Assets/image/nikelogo.png';
import puma from '../public/Assets/image/pumalogo.png';
import Favorite from './favorite';

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='container-top'>
        <div className='left-column slide-in'>
          <h2>Walk like a king with Our Trendy Shoes!</h2>
          <p>Our collections include a wide range of shoes for men, women, and children. <br></br><a href='/favorite' class="index-button">Shop Now <i className="fa-solid fa-arrow-right"/></a></p>
          
        </div>
        <div className='right-column'>
          <div className='sepatu-kanan'>
            <Image
            src={sneaker}
            alt="My Image"
            width={200}
            height={200}
            layout="responsive"
            priority
            />

          </div>
          <div className='right-background'>
            
          </div>
        </div>
      </div>
      <div className='container-second'>
        <div className='left-column-second'>
          <div className='image-second-left'>
           <Image
            src={sneakerleft}
            alt="My Image"
            width={200}
            height={200}
            layout="responsive"
            priority
           />
          </div>

        </div>
        <div className='right-column-second slide-in-sec'>
        <h2>Step Up Your Style !</h2>
          <p>Find Your Perfect Fit and Express Your Unique Personality with Our Trendy and Affordable Shoe Collection <br></br><a href='/favorite' class="index-button">Shop Now <i className="fa-solid fa-arrow-right"/></a></p>
        </div>
        {/* <div className='left-column-second'> */}
        <div className='left-background-second'>
          </div>
      </div>
      {/* </div> */}
      <div className='merek-container'>
        <h1>Favorite Brands</h1>
        <h2>"Experience Unmatched Comfort with Your Favorite Brands Shoes"</h2>
        <div className='brand-wrapper'>
            <div className='merek-card-1'>
            <div className='image-4'>
            <Image
            src={puma}
            alt="My Image"
            width={200}
            height={200}
            layout="responsive"
            priority
           />
           </div>
            </div>
              <div className='merek-card-2'>
              <div className='image-2'>
              <Image
            src={adidas}
            alt="My Image"
            width={200}
            height={200}
            layout="responsive"
            priority
           />
              </div>
              </div>
              <div className='merek-card-3'>
              <div className='image-3'>
              <Image
            src={nike}
            alt="My Image"
            width={200}
            height={200}
            layout="responsive"
            priority
           />
           </div>
              </div>
              <div className='merek-card-4'>
                <div className='image-4'>
              <Image
            src={nb}
            alt="My Image"
            width={200}
            height={10}
            layout="responsive"
            priority
           />
           </div>
              </div>
          </div>
          </div>
      <Favorite/>
    </>
  )
}
