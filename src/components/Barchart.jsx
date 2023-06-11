import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)


const BarChart = ({data}) => {

  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(()=> {

    setChartData({
      labels: data.map(item => item.name ),
      datasets: [
        {
          label: "Total expenditure per budget",
          backgroundColor: "teal",
          borderColor: "",
          borderWidth: 0,
          hoverBackgroundColor: "#408C7D",
          hoverBorderColor: "#408C7D",
          data: data.map(item => item.amount ),
        },
      ],
      
    })

    setChartOptions({
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'sales 2023'
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
      <Bar
        data={chartData}
        options={chartOptions}
      />
    </>
  );
};

export default BarChart;
