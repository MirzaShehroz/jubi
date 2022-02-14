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
const labels = ['W1', 'W2', 'W3', 'W4', 'W5', 'W1', 'W2', 'W3', 'W4', 'W5', 'W1', 'W2', 'W3', 'W4', 'W5'];
const options = {
    plugins: {
        legend: {
            display: false,

        }
    },
    maintainAspectRatio: false
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
            data: labels.map(() => faker.datatype.number({ min: 1, max: 100 })),
        },
        {
            type: 'bar',
            label: '',
            backgroundColor: '#7D9DAE',
            data: labels.map(() => faker.datatype.number({ min: 1, max: 100 })),
            borderColor: 'white',
            borderWidth: 0,
            borderRadius: 100,

        },

    ],
};

function LBChart() {
    return (
        <div className={'chartBox'}>
            <Chart
                type='bar'
                data={data}
                options={options}
            />
        </div>

    )

}

export default LBChart
