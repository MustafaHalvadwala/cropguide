import React from 'react'
import Image from 'next/image'

function Page() {
  return (
    <div>
      <div className='bg-amber-100 grid grid-flow-col max-w-[100vw] min-h-screen'>

        <div className='flex justify-center items-center min-w-[50vw]'>
          <Image src='/apple.jpg' width='500' height='500' alt='Tomato' />
        </div>
        <div className='flex flex-col justify-center pr-20 gap-10 '>
          <p className='text-xl'>Organically Grown, Freshly Harvested
          </p>
          <h2 className='text-7xl'>
            Savor the Bursting Flavor of Our Sun-Kissed Tomatoes
          </h2>
          <p className='text-2xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga hic impedit dolorum, provident eos assumenda molestias ab quisquam neque non laborum totam ad ut voluptates sequi doloremque, deserunt cupiditate libero.
          </p>

        </div>
      </div>

      <div className='bg-orange-300 flex flex-col max-w-[100vw] min-h-screen text-center gap-10 p-10'>

        <p className="text-xl font-semibold text-gray-700 tracking-widest uppercase">
          Gallery
        </p>

        <h2 className="text-5xl font-bold text-gray-900">
          The Visual Journey of Our <br /> Tomatoes
        </h2>

        <div className="flex flex-wrap justify-center gap-5">

          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/ph.jpg" // Replace with actual image
              alt="Tomatoes on plant"
              width='100'
              height='100'
              className="w-full h-full object-cover"
              
            />
          </div>
          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/tomatoes2.jpg" // Replace with actual image
              alt="Tomatoes in bowl"
              width='500'
              height='500'
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/tomatoes3.jpg" // Replace with actual image
              alt="Tomatoes dish"
              width='300'
              height='300'
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/tomatoes3.jpg" // Replace with actual image
              alt="Tomatoes dish"
              width='300'
              height='300'
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/tomatoes3.jpg" // Replace with actual image
              alt="Tomatoes dish"
              width='300'
              height='300'
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/tomatoes3.jpg" // Replace with actual image
              alt="Tomatoes dish"
              width='300'
              height='300'
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/tomatoes3.jpg" // Replace with actual image
              alt="Tomatoes dish"
              width='300'
              height='300'
              className="w-full h-full object-cover"
            />
          </div>
        </div>


      </div>

      <div className='bg-amber-100 grid grid-flow-col max-w-[100vw] min-h-screen'>
        <div className="bg-[#FDF8EC] py-16 px-4 sm:px-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Card Section */}
            <div className=" p-6 sm:p-10 rounded-xl shadow-lg border-4 border-grey-950">
              <h3 className="text-lg font-semibold text-gray-600 uppercase">
                Key Nutrients
              </h3>
              <h2 className="text-3xl font-bold text-green-900 mt-2">
                Unlock the Healthful Richness of Tomatoes
              </h2>
              <ul className="mt-4 text-gray-700 space-y-2 text-lg">
                <li><strong>Vitamin C:</strong> Essential for skin health and immunity.</li>
                <li><strong>Folate (Vitamin B9):</strong> Important for tissue growth.</li>
                <li><strong>Lycopene:</strong> Reduces risk of heart disease and cancer.</li>
                <li><strong>Vitamin K:</strong> Crucial for blood clotting.</li>
                <li><strong>Vitamin E:</strong> Helps maintain healthy skin and eyes.</li>
              </ul>
            </div>

            {/* Image Box */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/tomato-greenhouse.jpg" // Update with your actual image path
                alt="Tomato Greenhouse"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page