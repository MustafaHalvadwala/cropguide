"use client";
import { useState, useRef } from "react";
import * as tf from "@tensorflow/tfjs";

export default function SoilPrediction() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState("");
  const fileInputRef = useRef(null);
  let model;

  const loadModel = async () => {
    model = await tf.loadLayersModel("/models/soil/model.json");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const predictSoilType = async () => {
    if (!image) return;

    await loadModel();

    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.onload = async () => {
      const tensor = tf.browser.fromPixels(imgElement)
        .resizeNearestNeighbor([225, 225])
        .toFloat()
        .expandDims();

      const predictions = model.predict(tensor);
      const classIndex = predictions.argMax(1).dataSync()[0];

      const classLabels = ["Alluvial soil", "Black soil", "Clay soil", "Red soil"];
      setPrediction(classLabels[classIndex] || "Unknown soil type");
    };
  };

  return (
    <div>
      <h1>Soil Type Prediction</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} ref={fileInputRef} />
      {image && <img src={image} alt="Uploaded" width={200} />}
      <button onClick={predictSoilType}>Predict</button>
      {prediction && <h2>Prediction: {prediction}</h2>}
    </div>
  );
}
