import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const params = await request.json()

    const client = await clientPromise
    const db = client.db("CropGuide")
    const collection = db.collection("soils")

    const soil = await collection.findOne({type: params.slug}, { projection: { _id: 0, type: 1, nitrogen: 1, potassium: 1, phosphorus: 1, carbon: 1, imagetag: 1, title: 1, tagline:1, paragraph: 1  } })
    console.log(soil)

    return Response.json(soil)
}
