import Link from 'next/link';
// import 'styles/nav.css'
// const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <>
      <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
    

            <div className='nav-wrapper'>
              <div className='nav-logo'>
                <h2>DannSneaky.</h2>
              </div>
              <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars" />
        </label>
              <ul>
               <li><Link href="/">Home</Link></li> 
               <li><Link href="/favorite">Best Seller</Link></li> 
               <li><Link href="/aboutus">Developer</Link></li> 
               <li><Link href="https://muhammadzidaneportfolio.vercel.app/" target='_blank'>Portfolio</Link></li> 
                </ul>
                </div>
    </>
  )
}
