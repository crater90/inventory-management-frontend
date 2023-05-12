import React from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
import {Chart as ChartJs, LineElement, LinearScale} from "chart.js/auto"
import { Bar, Line, Pie } from 'react-chartjs-2';
import Layout from '../components/Layout';

const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    barThickness: 50 // Increase the bar thickness to 40 pixels
    ,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20 // Increase the font size of the label to 20 pixels
          }
        }
      }
    }
  };
  
  

const data={
    labels:["2019", "2020", "2021", "2022", "2023"],
    datasets:[
        {
            label:"Increase in godowns count ",
            data:[20, 30, 50, 75, 100],
            backgroundColor:["#f44336", "#9c27b0", "#03a9f4", "#8bc34a", "#ffc107"],
            // backgroundColor:["bg-red-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"],
            borderColor:"#f44336",
            borderWidth:0
        
        }
    ]
}




const data1={
    labels:["2019", "2020", "2021", "2022", "2023"],
    datasets:[
        {
            label:"Increase in deliveries count ",
            data:[1000, 3400, 4500, 6800, 9800],
            backgroundColor:["#9c27b0", "#f44336", "#03a9f4", "#8bc34a", "#ffc107"],
            //  backgroundColor:["bg-red-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"],
            borderColor:"#f44336",
            borderWidth:0
        }
    ]
}

const data2={
    labels:["2019", "2020", "2021", "2022", "2023"],
    datasets:[
        {
            label:"Increase in Employees count ",
            data:[80, 140, 210, 380, 490],
            backgroundColor:["#9c27b0", "#f44336", "#03a9f4", "#8bc34a", "#ffc107"],
            //  backgroundColor:["bg-red-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"],
            borderColor:"#f44336",
            borderWidth:0
        }
    ]
}

export const Reports1=()=>{
    return (
        <Layout >
        <div 
        className="w-1/2 mx-auto"
        >
           <Bar data={data} options={options} />
           <br>
           </br>
           <br></br>
           {/* <Pie data={data}  /> */}
           <center>Increase in Deliveries Count</center>
           <Pie data={data1} options={options}  />
           <Line data={data2} options={options}  />
        </div>
        </Layout>
    );

};
