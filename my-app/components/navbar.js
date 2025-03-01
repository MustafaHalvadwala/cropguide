
"use client";
import React, { useState } from 'react';
import Link from "next/link";




function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-950 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
        <ul
          className={`md:flex space-x-6 text-lg ${isOpen ? 'block' : 'hidden'} md:block`}
        >
          <li>
            <Link href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/story">
              Our Story
            </Link>
          </li>
          <li>
            <Link href="/harvest">
              Our Harvest
            </Link>
          </li>
          <li>
            <Link href="/benefits">
              Benefits
            </Link>
          </li>
          <li>
            <Link href="/reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}
export default Navbar