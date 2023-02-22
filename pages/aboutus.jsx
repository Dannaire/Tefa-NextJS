// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Navbar from '@/components/nav';
import Image from 'next/image';
import contactfoto from '../public/Assets/image/aboutmefoto.png'

// const inter = Inter({ subsets: ['latin'] })

export default function Aboutus() {
  return (
    <>
     <Navbar/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
                <div className='contact-title'>
                 Contact Me
                </div>
                <div className='contact-content'>
                <div className='contact-wrapper'>
                    <div className='contact-foto'><Image src={contactfoto}/></div>
                <div className='contact-content-title'>Muhammad Zidane Fajarianto</div>
                <div className='contact-content-subtitle'>You can find me at </div>
                <div className='contact-sosmed'>
                <ul className="sosmed-wrapper">
        <a className="hover-target" href="https://open.spotify.com/user/31ekar7nxdchnqxdkgophz45b3hq" target='_blank'>
            <li className="icon Spotify">
                <span className="tooltip">Spotify</span>
                <span><i className="fa-brands fa-spotify" /></span>
            </li>
        </a>
        <a className="hover-target" href="https://www.linkedin.com/in/muhammad-zidane-fajarianto-317393245/" target='_blank'>
            <li className="icon linkedin">
                <span className="tooltip">LinkedIn</span>
                <span><i className="fa-brands fa-linkedin-in" /></span>
         
             </li>
        </a>
        <a className="hover-target" href="https://www.instagram.com/dann_moriarty/" target='_blank'>
            <li className="icon instagram">
                <span className="tooltip">Instagram</span>
                <span><i className="fab fa-instagram" /></span>
            </li>
        </a>
        <a className="hover-target" href="https://github.com/Dannaire/Tugas-TEFA-Frontend-1" target='_blank'>
            <li className="icon github">
                <span className="tooltip">Github</span>
             <span><i className="fab fa-github" /></span>
          
             </li>
        </a>
   
      </ul>
      
      </div>
               
                </div>
                </div>
            
    </>
  )
}
