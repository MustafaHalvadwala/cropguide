'use client'
import React, { useState, useEffect } from 'react'

function Predict() {

  const [state, setState] = useState("")

  const [district, setDistrict] = useState("")

  const [market, setMarket] = useState("")

  const [commodity, setCommodity] = useState("")

  const [variety, setVariety] = useState("")

  const [options, setOptions] = useState({
    states: [],
    districts: [],
    markets: [],
    commodities: [],
    varieties: [],
  })

  const [loading, setLoading] = useState(false)

  const [price, setPrice] = useState("")

  useEffect(() => {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    }

    fetch("/api/input", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOptions(result)
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    console.log("Updated options:", options) // Debugging
  }, [options])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      state: state,
      district: district,
      market: market,
      commodity: commodity,
      variety: variety
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    fetch("/api/prediction", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (!result) {
          alert("⚠️ Price is not available in the database.");
        }
        else {
          setPrice(result)
        }
        setLoading(false)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    console.log("Updated price:", price) // Debugging
  }, [price])

  return (
    <>
      <div className='bg-lime-300 min-h-screen grid grid-flow-col max-h-screen'>

        <div></div>

        <form action='' onSubmit={handleSubmit} className='flex flex-col gap-5 min-w-[60vw] justify-center p-20 mt-10'>

          {/* State Dropdown */}
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value=''>Select State</option>
            {options.states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          {/* District Dropdown (Filtered by State) */}
          <select value={district} onChange={(e) => setDistrict(e.target.value)}>
            <option value=''>Select District</option>
            {options.districts
              .filter((d) => d.state == state)
              .map((d, i) => (
                <option key={i} value={d.district}>{d.district}</option>
              ))}
          </select>

          {/* Market Dropdown (Filtered by District) */}
          <select value={market} onChange={(e) => setMarket(e.target.value)}>
            <option value=''>Select Market</option>
            {options.markets
              .filter((m) => m.district == district)
              .map((m, i) => (
                <option key={i} value={m.market}>{m.market}</option>
              ))}
          </select>

          {/* Commodity Dropdown */}
          <select value={commodity} onChange={(e) => setCommodity(e.target.value)}>
            <option value=''>Select Commodity</option>
            {options.commodities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Variety Dropdown */}
          <select value={variety} onChange={(e) => setVariety(e.target.value)}>
            <option value=''>Select Variety</option>
            {options.varieties.filter((v) => v.commodity == commodity).map((v, i) => (
              <option key={i} value={v.variety}> {v.variety} </option>
            ))}
          </select>

          {/* Submit Button (Disabled While Loading) */}
          <button type='submit' className='btn bg-orange-500' disabled={loading}>
            {loading ? "Loading..." : "Check Prices"}
          </button>
        </form>

        {price && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

            <div className="bg-emerald-950 bg-opacity-90 text-white rounded-3xl p-10 flex flex-col gap-10 justify-center items-center relative w-[40vw]">

              {/* Close Button */}
              <button onClick={() => setPrice("")} className="absolute top-10 right-10 text-white text-3xl">
                X
              </button>

              {/* Title */}
              <h2 className="text-5xl font-semibold uppercase">Crop Price</h2>

              <p>Min Price: {price.Min_x0020_Price}</p>
              <p>Max Price: {price.Max_x0020_Price}</p>
              <p>Modal Price: {price.Modal_x0020_Price}</p>


            </div>
          </div>
        )}

      </div>
    </>
  )
}

export default Predict