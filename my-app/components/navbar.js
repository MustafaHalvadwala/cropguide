
import React from 'react'
import Link from 'next/link'




function Navbar() {
  return (
    <nav className=''>

      <div className='bg-emerald-950 text-white fixed top-4 right-16 z-10 flex justify-between items-center h-[10vh] w-[90vw] px-10 rounded-full'>

        <h2 className='text-lg font-semibold'>Crop Guide</h2>

        <ul className='text-lg flex gap-10'>
          <li>
            <Link href='/about'>
              About Us
            </Link>
          </li>

          <li>
            <Link href='/story'>
              Our Story
            </Link>
          </li>

          <li>
            <Link href='/harvest'>
              Our Harvest
            </Link>
          </li>

          <li>
            <Link href='/benefits'>
              Benefits
            </Link>
          </li>

          <li>
            <Link href='/reviews'>
              Reviews
            </Link>
          </li>

          <li>
            <Link href='/contact'>
              Contact Us
            </Link>
          </li>
        </ul>

      </div>

    </nav>
  );
}
export default Navbar