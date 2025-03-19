import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const params = await request.json()

    const client = await clientPromise
    const db = client.db("CropGuide")
    const collection = db.collection("crops")

    const crop = await collection.findOne({name: params.slug}, { projection: { _id: 0, title: 1, name: 1, tagline: 1, paragraph: 1, imagetag: 1, min_N: 1, max_N: 1, range_N: 1, mean_N: 1, min_P: 1, max_P: 1, range_P: 1, mean_P: 1, min_K: 1, max_K: 1, range_K: 1, mean_K: 1, min_Temp: 1, max_Temp: 1, range_Temp: 1, mean_Temp: 1, min_RH: 1, max_RH: 1, range_RH: 1, mean_RH: 1, min_Rf: 1, max_Rf: 1, range_Rf: 1, mean_Rf: 1, min_ph: 1, max_ph: 1, range_ph: 1, mean_ph: 1 } })
    console.log(crop)

    return Response.json(crop)
}
