"use client";
import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";

export default function ImageUpload() {
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const processAndSendImage = async () => {
        if (!image) return;

        const img = document.createElement("img");
        img.src = image;
        img.onload = async () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = 150;
            canvas.height = 150;
            ctx.drawImage(img, 0, 0, 150, 150);

            let imageTensor = tf.browser.fromPixels(canvas);
            imageTensor = imageTensor.div(tf.scalar(255));
            imageTensor = imageTensor.expandDims(0);

            const tensorData = await imageTensor.array();

            const response = await fetch("/api/detection", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ imageTensor: tensorData }),
            });

            const data = await response.json();
            setPrediction(data);
        };
    };

    return (
        <div>
            <input type="file" onChange={handleImageUpload} accept="image/*" />
            {image && <img src={image} alt="Uploaded" width={150} height={150} />}
            <button onClick={processAndSendImage}>Classify Image</button>
            {prediction && <p>Predicted Class: {prediction.predictedClass}</p>}
        </div>
    );
}
