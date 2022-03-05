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
    registerables as registerablesJS
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(...registerablesJS);
ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const options = {
    plugins: {
        legend: {
            display: false,

        }
    },
    maintainAspectRatio: false
}

function LBChart({ label }) {
    let labels = label.map(item => item.key)
    const data = {
        labels,
        datasets: [
            {
                type: 'line',
                label: '',
                borderColor: '#305162',
                borderWidth: 3,
                fill: false,
                data: label.map((item) => item.goal),
            },
            {
                type: 'bar',
                label: '',
                backgroundColor: '#7D9DAE',
                data: label.map((item) => item.goal),
                borderColor: 'white',
                borderWidth: 0,
                borderRadius: 100,

            },

        ],
    };

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
