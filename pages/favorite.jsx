// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Navbar from '@/components/nav';
import Card from '@/components/card';

// const inter = Inter({ subsets: ['latin'] })

export default function Favorite() {
  return (
    <>
      <Navbar/>
      <div className='container-top'>
        <Card/>
      </div>

    </>
  )
}
