import React,{useState,useEffect} from 'react';
import "./chart.css";
import {fatchDailyData} from "../../api"
import { Line , Bar } from 'react-chartjs-2';

const Chart = ({data:{confirmed,recovered,deaths},country}) => {
    const[dailyData,setDailyData]=useState([]);

    useEffect(() => {
       const fetchApi=async ()=>{ 
           setDailyData(await fatchDailyData());
       }
       fetchApi();
    }, []);

    const lineChart = ( 
        dailyData!==0
        ?(
         <Line
           data={{ 
               labels:dailyData.map(({date})=> date),
               datasets:[{
                 data:dailyData.map(({confirmed})=> confirmed),
                 label:'Infected',
                 borderColor:'#6200EA',
                 fill:true,
               },{
                data:dailyData.map(({deaths})=> deaths),
                label:'Deaths',
                borderColor:'red',
                fill:true,
               },]
           }}

         />   

        ):null
    );

    const barChart=( 
       confirmed
        ?(
            <Bar
             data={{ 
                labels:['Infected','recovered' ,'deaths'],
                datasets:[{
                    label: 'People',
                    backgroundColor:['#6200EA','#4CAF50','#FF5733'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
             }}
             options={{ 
                 legend:{ display : false },
                 title: { display : true , text : `Current state in ${country}` }
             }}
            
            />
        ):null
    );

    return (
        <div className="chart-container">
            {country ? barChart : lineChart }
        </div>
    );
};

export default Chart;