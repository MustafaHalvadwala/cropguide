'use client'
import React, { useEffect, useState, use } from 'react'
import Image from 'next/image'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts'


function Page({ params }) {

  const [soil, setsoil] = useState("")

  const { slug } = use(params)

  console.log(slug)

  useEffect(() => {

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      slug: slug
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    const fetchData = async () => {
      try {
        const response = await fetch("/api/soil", requestOptions)
        const result = await response.json()
        setsoil(result)
      }
      catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    console.log(soil)
  }, [soil])
  
  const data = [
    { name: 'Nitrogen', value: soil.nitrogen, unit: 'kg/ha', fill: '#ff7f0e' },
    { name: 'Phosphorus', value: soil.phosphorus, unit: 'kg/ha', fill: '#1f77b4' },
    { name: 'Potassium', value: soil.potassium, unit: 'kg/ha', fill: '#2ca02c' },
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Value: ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  // Colors for each segment
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className='bg-amber-100 grid grid-flow-col max-w-[100vw] min-h-screen'>

        <div className='flex justify-center items-center min-w-[50vw]'>
          <Image src={`/soil/${soil.type}.png`} width='500' height='500' alt={`${soil.imagetag}`} />
        </div>

        <div className='flex flex-col justify-center gap-5 pr-20 min-w-[50vw] text-balance'>
          <p className='text-sm uppercase'>{soil.tagline}</p>
          <h2 className='text-5xl font-bold'>{soil.title}</h2>
          <p className='text-lg'>{soil.paragraph}</p>
        </div>

      </div>

      <div className='bg-orange-300 flex flex-col max-w-[100vw] min-h-screen justify-center items-center'>

        <p className='text-sm uppercase m-2'> AI Insights </p>

        <h2 className='text-5xl font-bold'> Nutriention available in {soil.type} soil</h2>

        <div className='grid grid-flow-col gap-10 p-5'>

          <div className='min-w-[40vw] bg-white'>
            <table className='w-full h-full border border-black'>
              <thead>
                <tr className='bg-gray-200'>
                  <th className='border border-black'>Feature</th>
                  <th className='border border-black'>Average Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className='text-center'>
                    <td className='border border-black font-semibold'>{item.name}</td>
                    <td className='border border-black'>{item.value} {item.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='bg-amber-100 rounded-xl shadow-lg min-w-[50vw] flex justify-center items-center'>
          <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
          </div>

        </div>

      </div>

      <div className='bg-amber-100 grid grid-flow-col max-w-[100vw] min-h-screen'>
      </div>
    </>
  )
}

export default Page