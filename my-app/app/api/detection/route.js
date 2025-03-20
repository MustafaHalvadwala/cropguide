import * as tf from '@tensorflow/tfjs'


export async function POST(request) {

    const model = await tf.loadLayersModel('http://localhost:3000/models/soil/model.json')

    const { imageTensor } = await request.json();

        if (!imageTensor) {
            return new Response(JSON.stringify({ error: "No image data provided" }), { status: 400 });
        }

        // Convert array data back to tensor
        let tensor = tf.tensor(imageTensor);
        tensor = tensor.reshape([1, 150, 150, 3]); // Ensure correct shape

        // Run the model prediction
        const prediction = model.predict(tensor);
        const probabilities = await prediction.data();
        const predictedClass = probabilities.indexOf(Math.max(...probabilities));

    console.log(probabilities)

    model.dispose()

    return Response.json({ predictedClass })

}