'use client'
import React, { useState, useEffect } from 'react'
import * as tf from '@tensorflow/tfjs'
import Image from 'next/image'

export default function ImageUpload() {

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

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
                body: JSON.stringify({ imageTensor: tensorData }),
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
                <form action='' onSubmit={handleSubmit} className='flex flex-col gap-5 min-w-[60vw] justify-center items-center p-20 mt-10'>

                    <input type='file' onChange={handleImageUpload} accept='image/*' className='border border-black bg-white' />
                    {image && <>
                        <div className='flex flex-col gap-5'>
                            <Image src={image} alt='Uploaded' width={400} height={400} />
                        </div>
                    </>}

                    <button type='submit' className='btn bg-orange-500' disabled={loading}>
                        {loading ? "Loading..." : "Detect Soil Type"}
                    </button>

                </form>

                {prediction && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

                        <div className="bg-emerald-950 bg-opacity-90 text-white rounded-3xl p-10 flex flex-col gap-10 justify-center items-center relative w-[40vw] h-[50vh]">

                            {/* Close Button */}
                            <button onClick={() => setPrediction("")} className="absolute top-10 right-10 text-white text-3xl">
                                X
                            </button>

                            {/* Title */}
                            <h2 className="text-5xl font-semibold uppercase">{prediction.detectedSoil}</h2>

                            <h3>The type of Soil is <strong>{prediction.detectedSoil}</strong></h3>

                            <div className='text-center'>
                                <p>The recommended Crops are:</p>
                                <ul className='flex gap-5'>
                                    {prediction.crops.map((crop, index) => (
                                        <li key={index} className=''>
                                            <strong>{crop}</strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </>

    );
}
