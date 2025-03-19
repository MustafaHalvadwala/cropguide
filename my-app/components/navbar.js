
import React from 'react'
import Link from 'next/link'




function Navbar() {
  return (
    <nav className=''>

      <div className='flex justify-center'>
        <div className='bg-emerald-950 text-white fixed translate-y-5 z-10 flex justify-between items-center h-20 w-[90vw] px-10 rounded-full'>

          <h2 className='text-lg font-semibold'>Crop Guide</h2>

          <ul className='text-lg flex gap-10'>
            <li>
              <Link href='/#home' className='hover:text-gray-300'>
                Home
              </Link>
            </li>

            <li>
              <Link href='/#purpose' className='hover:text-gray-300'>
                Purpose
              </Link>
            </li>

            <li>
              <Link href='/#features' className='hover:text-gray-300'>
                Features
              </Link>
            </li>

            <li>
              <Link href='/#benefits' className='hover:text-gray-300'>
                Benefits
              </Link>
            </li>

            <li>
              <Link href='/#weather' className='hover:text-gray-300'>
                Weather
              </Link>
            </li>
          </ul>

        </div>
      </div>

    </nav>
  )
}
export default Navbar