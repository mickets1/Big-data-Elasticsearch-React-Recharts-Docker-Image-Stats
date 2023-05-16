import { PieChart, Pie } from 'recharts'
import React, { useEffect, useState } from "react"
import axios from 'axios'


/**
 * Piechart showing the top docker image publishers.
 *
 * @return {*} 
 */
function BarChartComponent() {
  const [elasticData, setElastic] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/publisher').then((response) => {
      setElastic(response.data)
    })
  }, [])

  if (!elasticData) return "No Content"

  const data = []
  // eslint-disable-next-line array-callback-return
  elasticData.map(object => {
    data.push({
      name: object.key, 
      value: object.doc_count
    })
})
  
return (
  <PieChart width={900} height={500}>
  <Pie
    dataKey="value"
    startAngle={180}
    endAngle={0}
    data={data}
    cx="50%"
    cy="50%"
    fill="#8884d8"
    label={(entry) => entry.value + '-' + entry.name}
  />
</PieChart>
)
}



export default BarChartComponent