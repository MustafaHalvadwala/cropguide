'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Recommend() {

    const [formData, setFormData] = useState({
        nitrogen: "",
        phosphorous: "",
        potassium: "",
        ph: "",
        rainfall: "",
        temperature: "",
        humidity: ""
    })

    const [crop, setCrop] = useState("")

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value, type } = e.target

        setFormData({
            ...formData,
            [name]: type == "number" ? Number(value) : value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        setLoading(true)


        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const raw = JSON.stringify({
            "nitrogen": formData.nitrogen,
            "potassium": formData.potassium,
            "phosphorous": formData.phosphorous,
            "temperature": formData.temperature,
            "humidity": formData.humidity,
            "ph": formData.ph,
            "rainfall": formData.rainfall
        })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        fetch("/api/recommendation", requestOptions)
            .then((response) => response.json())
            .then((result) => {

                console.log(result.message)
                setCrop(result.message)
                setLoading(false)

            })
            .catch((error) => console.error(error))
    }

    const statesWithCities = {
        "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Prayagraj"],
        "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
    }

    return (
        <>

            <div className='min-h-screen bg-lime-300 grid grid-flow-col max-h-screen'>

                <div className='flex justify-center items-center min-w-[40vw]'>
                    <Image src='/farmer3.jpg' width='500' height='500' alt='A side-by-side comparison of two farm fields.' />
                </div>

                <form action='' className='flex flex-col gap-5 min-w-[60vw] justify-center p-20 mt-10'>
                    <div className='flex flex-col'>
                        <label htmlFor='nitrogen' className='text-xl font-semibold'>Nitrogen:</label>
                        <input type='number' name='nitrogen' placeholder='Enter ratio of Nitrogen content in soil' className='py-2 px-4 rounded-lg' value={formData.nitrogen} onChange={handleChange} />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='phosphorous' className='text-xl font-semibold'>Phosphorous:</label>
                        <input type='number' name='phosphorous' placeholder='Enter ratio of Phosphorous content in soil' className='py-2 px-4 rounded-lg' value={formData.phosphorous} onChange={handleChange} />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='potassium' className='text-xl font-semibold'>Potassium:</label>
                        <input type='number' name='potassium' placeholder='Enter ratio of Potassium content in soil' className='py-2 px-4 rounded-lg' value={formData.potassium} onChange={handleChange} />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='ph' className='text-xl font-semibold'>ph:</label>
                        <input type='number' name='ph' placeholder='Enter ph value of the soil' className='py-2 px-4 rounded-lg' value={formData.ph} onChange={handleChange} />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='rainfall' className='text-xl font-semibold'>Rainfall:</label>
                        <input type='number' name='rainfall' placeholder='Enter rainfall in mm' className='py-2 px-4 rounded-lg' value={formData.rainfall} onChange={handleChange} />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='' className='text-xl font-semibold'>Climate:</label>
                        <div className='flex gap-10'>
                            {/* <select name='state' className='py-2 px-4 rounded-lg w-full' value={formData.state} onChange={handleChange}>
                                <option value=''>Select your State</option>
                                {Object.keys(statesWithCities).map((state) => (
                                    <option key={state} value={state}> {state} </option>
                                ))}
                            </select>
                            <select name='city' className='py-2 px-4 rounded-lg w-full' value={formData.city} onChange={handleChange}>
                                <option value=''>Select your City</option>
                                {formData.state && statesWithCities[formData.state].map((city) => (
                                    <option key={city} value={city}> {city} </option>
                                ))}
                            </select> */}
                            <input type='number' name='temperature' placeholder='Enter temperature in degree Celsius' className='py-2 px-4 rounded-lg w-full' value={formData.temperature} onChange={handleChange} />
                            <input type='number' name='humidity' placeholder='Enter relative humidity in %' className='py-2 px-4 rounded-lg w-full' value={formData.humidity} onChange={handleChange} />

                        </div>
                    </div>

                    <button type='button' className='bg-orange-500 btn mt-5 w-[25vw] mx-auto' onClick={handleSubmit} disabled={loading}>
                        {loading ? "Loading..." : "Get Recommendation"}
                    </button>
                </form>

                {crop && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

                        <div className="bg-emerald-950 bg-opacity-90 text-white rounded-3xl p-10 flex flex-col gap-10 justify-center items-center relative w-[40vw]">

                            {/* Close Button */}
                            <button onClick={() => setCrop("")} className="absolute top-10 right-10 text-white text-3xl">
                                X
                            </button>

                            {/* Title */}
                            <h2 className="text-5xl font-semibold uppercase">{crop}</h2>

                            <p>The recommended Crop is {crop}</p>

                            {/* Image */}
                            <Image src={`/crop/${crop}.png`} className='' width='300' height='300' alt='Image of the crop' />

                            <Link href={`/crop/${crop}`}>
                                <button className='bg-lime-300 text-black hover:scale-105 py-2 px-4 rounded-full w-40 text-lg bg-opacity-90'>Learn More</button>
                            </Link>

                        </div>
                    </div>
                )}


            </div>

        </>
    )
}

export default Recommend