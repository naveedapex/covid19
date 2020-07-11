import React, {useContext} from "react";
import {Pie} from 'react-chartjs-2';

import AppContext from './../AppContext';

function Chart() {
    const { data } = useContext(AppContext);
    console.log(data)
    const {current} =data;
    const {active, recovered, deaths}=current;
  
  
    return <Pie
  data={{
    labels: ['Active', 'Recovered', 'Deaths'
             ],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          'rgba(255, 196, 0, 0.89)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)',
          
        ],
        hoverBackgroundColor: [
        'rgba(255, 196, 0, 0.89)',
        'rgba(0, 255, 0, 0.5)',
        'rgba(255, 0, 0, 0.5)',
       
        ],
        data: [active, recovered, deaths]
      }
    ]
  }
}
  options={{
    title:{
      display:true,
      text:'Current Position',
      fontSize:20
    },
    legend:{
      display:true,
      position:'right'
    }
  }}
/>
}

export default Chart;
