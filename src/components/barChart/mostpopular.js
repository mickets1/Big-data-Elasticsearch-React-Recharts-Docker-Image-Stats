import React  from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'
import { useEffect, useState } from "react"
import axios from 'axios'


/**
 * Showing the most popular docker images by downloads.
 *
 * @return {*} 
 */
function BarChartComponent() {
  const [elasticData, setElastic] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/mostpopular').then((response) => {
      setElastic(response.data)
    })
  }, [])

  if (!elasticData) return "No Content"

  const data = []
  elasticData.map(object => {
    data.push({
      name: object._source.full_name,
      uv: object._source.popularity
    })
})
  
return (
  <BarChart width={900} height={600} data={data}  margin={{
    top: 40,
    right: 30,
    left: 70,
    bottom: 15
  }}>
    <Bar dataKey="uv" fill="#8884d8" />
    <XAxis dataKey="name" label={{ value: 'Docker Image', position: "outside", dy: 20 }}/>
    <YAxis type="number" label={{ value: 'Downloads', position: "top", dy: -10 }}/>
  </BarChart>
)
}



export default BarChartComponent