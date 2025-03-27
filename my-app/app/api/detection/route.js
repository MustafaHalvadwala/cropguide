import * as tf from '@tensorflow/tfjs'
import clientPromise from '@/lib/mongodb'


export async function POST(request) {

    const model = await tf.loadLayersModel('http://localhost:3000/models/soil/model.json')


    const { imageTensor } = await request.json()

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

    const recommendedCrops = { 
        'black soil': ['Cotton','Sugarcane','Wheat','Jowar','Rice'],
        'red soil': ['Wheat','Pulses','Millets','Potatoes','Mangoes'],
        'alluvial soil': ['Rice','Jute','Maize','Bajra','Chickpea'],
        'clay soil': ['Lettuce','Spinach','Broccoli','Cabbage','Pumpkin']
    }

    const crops = recommendedCrops[detectedSoil]

    model.dispose()
    console.log(crops)

    return Response.json({detectedSoil, crops})

}