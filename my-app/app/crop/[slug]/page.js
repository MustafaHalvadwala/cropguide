'use client'
import React, { useEffect, useState, use } from 'react'
import Image from 'next/image'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip, Legend, ResponsiveContainer } from 'recharts'


function Page({ params }) {

  const [crop, setCrop] = useState("")

  const { slug } = use(params)

  console.log(slug)

  useEffect(() => {

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      slug: slug
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    const fetchData = async () => {
      try {
        const response = await fetch("/api/crop", requestOptions)
        const result = await response.json()
        setCrop(result)
      }
      catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    console.log(crop)
  }, [crop])

  const data = [
    { label: "N (Nitrogen)", min: crop.min_N, max: crop.max_N, mean: crop.mean_N, range: crop.range_N },
    { label: "P (Phosphorus)", min: crop.min_P, max: crop.max_P, mean: crop.mean_P, range: crop.range_P },
    { label: "K (Potassium)", min: crop.min_K, max: crop.max_K, mean: crop.mean_K, range: crop.range_K },
    { label: "🌡 Temperature", min: crop.min_Temp, max: crop.max_Temp, mean: crop.mean_Temp, range: crop.range_Temp },
    { label: "💧 Humidity", min: crop.min_RH, max: crop.max_RH, mean: crop.mean_RH, range: crop.range_RH },
    { label: "🧪 Soil pH", min: crop.min_ph, max: crop.max_ph, mean: crop.mean_ph, range: crop.range_ph },
    { label: "🌧 Rainfall", min: crop.min_Rf, max: crop.max_Rf, mean: crop.mean_Rf, range: crop.range_Rf },
  ]

  return (
    <>
      <div className='bg-amber-100 grid grid-flow-col max-w-[100vw] min-h-screen'>

        <div className='flex justify-center items-center min-w-[50vw]'>
          <Image src={`/${crop.name}.png`} width='500' height='500' alt={`${crop.imagetag}`} />
        </div>

        <div className='flex flex-col justify-center gap-5 pr-20 min-w-[50vw] text-balance'>
          <p className='text-sm uppercase'>{crop.tagline}</p>
          <h2 className='text-5xl font-bold'>{crop.title}</h2>
          <p className='text-lg'>{crop.paragraph}</p>
        </div>

      </div>

      <div className='bg-orange-300 flex flex-col max-w-[100vw] min-h-screen justify-center items-center'>

        <p className='text-sm uppercase'> Text </p>

        <h2 className='text-5xl font-bold'> Conditions requird by {crop.name} </h2>

        <div className='grid grid-flow-col gap-10 p-5'>

          <div className='min-w-[40vw] bg-white'>
            <table className='w-full h-full border border-black'>
              <thead>
                <tr className='bg-gray-200'>
                  <th className='border border-black'>Feature</th>
                  <th className='border border-black'>Min</th>
                  <th className='border border-black'>Max</th>
                  <th className='border border-black'>Range</th>
                  <th className='border border-black'>Mean</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className='text-center'>
                    <td className='border border-black font-semibold'>{item.label}</td>
                    <td className='border border-black'>{item.min}</td>
                    <td className='border border-black'>{item.max}</td>
                    <td className='border border-black'>{item.range}</td>
                    <td className='border border-black'>{item.mean}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='bg-amber-100 rounded-xl shadow-lg min-w-[50vw] flex justify-center items-center'>
            <ResponsiveContainer width={500} height={500}>
              <RadarChart outerRadius={150} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="label" />
                <Tooltip />
                <Legend />

                {/* Minimum Range Radar */}
                <Radar name="Min" dataKey="min" stroke="#ff4d4d" fill="#ff4d4d" fillOpacity={0.6} />

                {/* Maximum Range Radar */}
                <Radar name="Max" dataKey="max" stroke="#4d79ff" fill="#4d79ff" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>

      <div className='bg-amber-100 grid grid-flow-col max-w-[100vw] min-h-screen'>
        <div className="py-16 px-4 sm:px-10">
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
    </>
  )
}

export default Page