import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <footer className=''>
      <div className='bg-emerald-950 text-white py-10 min-h-[25vh]'>

        <div className='flex justify-center gap-60'>

          {/* Navigation Links */}
          <div>
            <h3 className='text-xl font-semibold'>Navigate</h3>
            <ul className='flex flex-col gap-4 my-4 text-sm'>
              {['Home', 'Our Purpose', 'Our Features', 'Benefits', 'Weather'].map(
                (item) => (
                  <li key={item}>
                    <Link href='#' className='hover:text-white text-gray-500'>{item}</Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Utility Links */}
          <div>
            <h3 className='text-xl font-semibold'>Utility</h3>
            <ul className='flex flex-col gap-4 my-4 text-sm'>
              {['Get Started', 'Style Guide', 'License', 'Changelog', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href='#' className='hover:text-white text-gray-500'>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <Image src='/group1.png' width='400' height='400' alt='Crop' />

        </div>

        <p className='w-fit mx-auto mt-10 text-sm'>Copyright 	&#169; Crop Guide. All rights reserved.</p>

      </div>
    </footer>
  )
}

export default Footer