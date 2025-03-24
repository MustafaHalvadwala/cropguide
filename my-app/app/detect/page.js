'use client'
import React, { useState, useEffect } from 'react'
import * as tf from '@tensorflow/tfjs'
import Image from 'next/image'

export default function ImageUpload() {

    const [state, setState] = useState("")

    const [district, setDistrict] = useState("")

    const [market, setMarket] = useState("")

    const [options, setOptions] = useState({
        states: [],
        districts: [],
        markets: [],
    })

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow"
        }

        fetch("/api/input", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setOptions(result)
            })
            .catch((error) => console.error(error))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const raw = JSON.stringify({
            state: state,
            district: district,
            market: market
        })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        if (!image) return

        const img = document.createElement("img")
        img.src = image
        img.onload = async () => {
            const canvas = document.createElement("canvas")
            const ctx = canvas.getContext("2d")

            canvas.width = 150
            canvas.height = 150
            ctx.drawImage(img, 0, 0, 150, 150)

            let imageTensor = tf.browser.fromPixels(canvas)
            imageTensor = imageTensor.div(tf.scalar(255))
            imageTensor = imageTensor.expandDims(0)

            const tensorData = await imageTensor.array()

            const response = await fetch("/api/detection", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ imageTensor: tensorData, state: state, district: district, market: market }),
            });

            const data = await response.json()
            setPrediction(data)
            setLoading(false)
        }
    }

    const [image, setImage] = useState(null)
    const [prediction, setPrediction] = useState(null)

    const handleImageUpload = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => setImage(reader.result)
            reader.readAsDataURL(file)
        }

    }

    return (
        <>
            <div className='bg-lime-300 min-h-screen flex flex-col justify-center items-center gap-10'>
                <form action='' onSubmit={handleSubmit} className='flex flex-col gap-5 min-w-[60vw] justify-center p-20 mt-10'>

                    {/* State Dropdown */}
                    <select value={state} onChange={(e) => setState(e.target.value)}>
                        <option value=''>Select State</option>
                        {options.states.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>

                    {/* District Dropdown (Filtered by State) */}
                    <select value={district} onChange={(e) => setDistrict(e.target.value)}>
                        <option value=''>Select District</option>
                        {options.districts
                            .filter((d) => d.state == state)
                            .map((d, i) => (
                                <option key={i} value={d.district}>{d.district}</option>
                            ))}
                    </select>

                    {/* Market Dropdown (Filtered by District) */}
                    <select value={market} onChange={(e) => setMarket(e.target.value)}>
                        <option value=''>Select Market</option>
                        {options.markets
                            .filter((m) => m.district == district)
                            .map((m, i) => (
                                <option key={i} value={m.market}>{m.market}</option>
                            ))}
                    </select>

                    <input type='file' onChange={handleImageUpload} accept='image/*' />
                    {image && <>
                        <div className='flex flex-col gap-5'>
                            <Image src={image} alt='Uploaded' width={400} height={400} />
                        </div>
                    </>}

                    <button type='submit' className='btn bg-orange-500' disabled={loading}>
                        {loading ? "Loading..." : "Get Recommendation"}
                    </button>

                </form>

                {prediction && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

                        <div className="bg-emerald-950 bg-opacity-90 text-white rounded-3xl p-10 flex flex-col gap-10 justify-center items-center relative w-[40vw]">

                            {/* Close Button */}
                            <button onClick={() => setPrediction("")} className="absolute top-10 right-10 text-white text-3xl">
                                X
                            </button>

                            {/* Title */}
                            <h2 className="text-5xl font-semibold uppercase">{prediction.detectedSoil}</h2>

                            <h3>The type of Soil is {prediction.detectedSoil}</h3>

                            <p>The recommended Crop and its Prices are:</p>
                            <ul>
                                {prediction.cropPrices.map((crop, index) => (
                                    <li key={index}>
                                        <strong>{crop.crop}:</strong> {crop.price !== "No data available" ? `₹${crop.price} per quintal` : "No data available"}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                )}
            </div>
        </>

    );
}
