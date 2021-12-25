import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const options= {
    plugins: {
        legend: {
            display: false,

        }
    },
    scales: {
        xAxes: [{
            barThickness: 6,  // number (pixels) or 'flex'
            maxBarThickness: 8 // number (pixels)
        }]
    }
}
const data = {
    labels,

    datasets: [
        {
            type: 'line',
            label: '',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 3,
            fill: false,
            data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
        },
        {
            type: 'bar' ,
            label: '',
            backgroundColor: '#7D9DAE',
            data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
            borderColor: 'white',
            borderWidth: 0,
            borderRadius: 100,

        },

    ],
};

function LBChart() {
    // return
    // (
    //     <Chart type='bar' data={data} />
    // )
    return(
        <Chart
            type='bar'
            data={data}
            options={options}

        />

    )

}

export default LBChart
