import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
  } from 'chart.js'
  
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
  )

const Linechart = ({data}) => {

    const [chartData, setChartData] = useState({
        datasets: []
      })
    
      const [chartOptions, setChartOptions] = useState({})
    
      useEffect(()=> {
    
        setChartData({
          labels: data.map(item => item.name ),
          datasets: [
            {
              label: "Revenue Generated 2023",
              fill: false,
              data: data.map(item => item.amount ),
              borderColor: '#7688A7',
              backgroundColor: 'transparent',
              pointBorderColor: 'transparent',
              tension: 0.1
            },
          ],
          
        })
    
        setChartOptions({
          maintainAspectRatio: false,
          responsive: true,
          plugins:{
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: 'Total Revenue'
            },
          },
          scales: {
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
              }
            },
            y: {
              border: {
                display: false
              },
              grid: {
                display: false,
              }
          }}
          
        })
        
      }, [data])
    
    return ( 
        <>
            <Line
                data={chartData}
                options={chartOptions}
            />
        </>
     );
}
 
export default Linechart;