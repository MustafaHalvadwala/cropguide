import * as tf from '@tensorflow/tfjs'


export async function POST(request) {

    const model = await tf.loadLayersModel('http://localhost:3000/models/crop/model.json')

    const inputData = await request.json()

    const inputArray = [
        inputData.nitrogen,
        inputData.phosphorous,
        inputData.potassium,
        inputData.temperature,
        inputData.humidity,
        inputData.ph,
        inputData.rainfall
    ]
    console.log(inputArray)

    const mean = [ 50.55181818,  53.36272727,  48.14909091,  25.61624385,  71.48177922,  6.46948007, 103.46365542]
    const std = [36.90894258, 32.97838509, 50.63641835, 5.06259762, 22.25875106,  0.77376177, 54.94589656]

    const standardizedInput = (input, mean, std) => {
        return input.map((value, index) => (value - mean[index]) / std[index])
    }

    const inputTensor = tf.tensor([standardizedInput(inputArray,mean,std)])

    const recommendation = model.predict(inputTensor)
    console.log(recommendation.dataSync())

    const recommendedClassIndex = recommendation.argMax(1).dataSync()
    console.log(recommendedClassIndex)

    const labelEncoderMapping = [
        "apple", "banana", "blackgram", "chickpea", "coconut", "coffee", "cotton", "grapes", "jute", "kidneybeans", "lentil", "maize", "mango", "mothbeans", "mungbean", "muskmelon", "orange", "papaya", "pigeonpeas", "pomegranate", "rice", "watermelon"
    ]

    const recommendedCrop = labelEncoderMapping[recommendedClassIndex]

    model.dispose()

    return Response.json({ message: recommendedCrop })

}