import * as tf from '@tensorflow/tfjs'
import clientPromise from '@/lib/mongodb'


export async function POST(request) {

    const model = await tf.loadLayersModel('http://localhost:3000/models/soil/model.json')


    const { imageTensor, state, district, market } = await request.json()

    console.log(state)

    // Convert array data back to tensor
    let tensor = tf.tensor(imageTensor)
    tensor = tensor.reshape([1, 150, 150, 3]) // Ensure correct shape

    // Run the model prediction
    const prediction = model.predict(tensor)
    const probabilities = await prediction.data()
    const predictedClass = probabilities.indexOf(Math.max(...probabilities))

    const index_to_soil = [ 'alluvial soil', 'black soil', 'clay soil', 'red soil' ];
    const detectedSoil = index_to_soil[predictedClass]

    console.log(detectedSoil)

    const client = await clientPromise
    const db = client.db("CropGuide")
    const collection = db.collection("prices")

    let cropPrices = [];
    const recommendedCrops = { 
        'black soil': ['Cotton','Sugarcane','Wheat','Jowar','Rice'],
        'red soil': ['Wheat','Pulses','Millets','Potatoes','Mangoes'],
        'alluvial soil': ['Rice','Jute','Maize','Bajra','Chickpea'],
        'clay soil': ['Lettuce','Spinach','Broccoli','Cabbage','Pumpkin']
    }


    for (let crop of recommendedCrops[detectedSoil]) {
        console.log(crop)
        const priceData = await collection.findOne({ State: state, District: district, Market: market, Commodity: crop });

        console.log(priceData)

        cropPrices.push({
            crop: priceData ? priceData.Commodity : crop, // Default to crop name if data is missing
            price: priceData ? priceData.Modal_x0020_Price : "No data available",
        });
    }

    model.dispose()
    console.log(cropPrices)

    return Response.json({detectedSoil, cropPrices})

}