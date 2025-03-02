'use client'
import React from 'react'
import { useState } from 'react'

function Recommendation() {

    const [formData, setFormData] = useState({
        nitrogen: "",
        phosphorous: "",
        potassium: "",
        ph: "",
        rainfall: "",
        state: "",
        city: ""
    })

    const handleChange = (e) => {
        const { name, value, type } = e.target

        setFormData({
            ...formData,
            [name]: type == "number" ? Number(value) : value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData);
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

                <div className='min-w-[40vw]'>

                </div>

                <form action='' className='flex flex-col gap-5 min-w-[60vw] justify-center p-20 mt-10' onSubmit={handleSubmit}>
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
                        <label htmlFor='' className='text-xl font-semibold'>Location:</label>
                        <div className='flex gap-10'>
                            <select name='state' className='py-2 px-4 rounded-lg w-full' value={formData.state} onChange={handleChange}>
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
                            </select>
                        </div>
                    </div>

                    <input type='submit' value='Get Recommendation' className='bg-orange-500 btn mt-5 w-[25vw] mx-auto' />
                </form>

            </div>

        </>
    )
}

export default Recommendation