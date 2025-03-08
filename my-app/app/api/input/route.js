import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const client = await clientPromise
    const db = client.db('CropGuide')
    const collection = db.collection("prices")

    const states = await collection.distinct("State")
    console.log(states)

    const districts = await collection.aggregate([
        { $group: { _id: { district: "$District", state: "$State" } } },
        { $project: { _id: 0, district: "$_id.district", state: "$_id.state" } }
    ]).toArray()


    const markets = await collection.aggregate([
        { $group: { _id: { market: "$Market", district: "$District" } } },
        { $project: { _id: 0, market: "$_id.market", district: "$_id.district" } }
    ]).toArray()


    const commodities = await collection.distinct("Commodity")

    const varieties = await collection.aggregate([
        { $group: { _id: { variety: "$Variety", commodity: "$Commodity" } } },
        { $project: { _id: 0, variety: "$_id.variety", commodity: "$_id.commodity" } }
    ]).toArray()
    console.log(varieties)

    return Response.json({ states, districts, markets, commodities, varieties })

}