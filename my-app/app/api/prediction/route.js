import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const { state, district, market, commodity, variety } = await request.json()
    console.log(market)

    const client = await clientPromise
    const db = client.db('CropGuide')
    const collection = db.collection("prices")

    const price = await collection.findOne({ State: state, District: district, Market: market, Commodity: commodity, Variety: variety }, { projection: { _id: 0, Min_x0020_Price: 1, Max_x0020_Price: 1, Modal_x0020_Price: 1 } })
    console.log(price)

    return Response.json(price)

}