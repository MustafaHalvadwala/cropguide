import React from 'react'

function Footer() {
  return (
   <footer className="bg-green-900 text-white py-10">
   <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
     {/* Logo & Address */}
     

     {/* Navigation Links */}
     <div>
       <h3 className="text-lg font-semibold">Navigate</h3>
       <ul className="mt-2 space-y-1">
         {["About Us", "Our Story", "Our Harvest", "Benefits", "Reviews", "Contact Us", "Privacy Policy"].map(
           (item) => (
             <li key={item}>
               <a href="#" className="hover:text-gray-300">{item}</a>
             </li>
           )
         )}
       </ul>
     </div>

     {/* Utility Links */}
     <div>
       <h3 className="text-lg font-semibold">Utility</h3>
       <ul className="mt-2 space-y-1">
         {["Get Started", "Style Guide", "License", "Changelog"].map((item) => (
           <li key={item}>
             <a href="#" className="hover:text-gray-300">{item}</a>
           </li>
         ))}
       </ul>
     </div>
   </div>

   {/* Bottom Section */}
   <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
     

     {/* Social Media Icons */}
     <div className="flex space-x-4">
       {["facebook", "twitter", "instagram"].map((platform) => (
         <a key={platform} href="#" className="text-white hover:text-gray-400">
           <i className={`fab fa-${platform} text-xl`} />
         </a>
       ))}
     </div>
   </div>

   </footer>
  )
}

export default Footer