import React, { useState } from 'react'
import '../assets/css/individualpanel2.css';
import medicAdd from '../assets/img/medicadd.png';
import medicDel from '../assets/img/medicdel.png';
function IndividualPanel2() {
    const data = [
        {
            date: '2021.07.31',
            image: medicAdd,
            medic: [
                {
                    name: 'Medicine Name 1',
                    time: '12:30 PM',
                    image: medicDel
                },
                {
                    name: 'Medicine Name 2',
                    time: '12:30 PM',
                    image: medicAdd
                },
                {
                    name: 'Medicine Name 3',
                    time: '12:30 PM',
                    image: medicDel
                },
                {
                    name: 'Medicine Name 4',
                    time: '12:30 PM',
                    image: medicAdd
                },
            ]
        },
        {
            date: '2021.07.30',
            image: medicDel,
            medic: [
                {
                    name: 'Medicine Name 1',
                    time: '12:30 PM',
                    image: medicAdd
                },
                {
                    name: 'Medicine Name 2',
                    time: '12:30 PM',
                    image: medicAdd
                },
                {
                    name: 'Medicine Name 3',
                    time: '12:30 PM',
                    image: medicDel
                },
                {
                    name: 'Medicine Name 4',
                    time: '12:30 PM',
                    image: medicAdd
                },
            ]
        }
    ]
    const [btnClr1, setBtnClr1] = useState({
        background: '#4A7389',
        color: '#C1D6E1'
    })
    const [btnClr2, setBtnClr2] = useState({
        background: '#4A7389',
        color: '#C1D6E1'
    })
    const [btnClr3, setBtnClr3] = useState({
        background: '#4A7389',
        color: '#C1D6E1'
    })
    const changeBtnClr1 = () => {
        setBtnClr1({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr2({
            background: '#4A7389',
            color: '#C1D6E1'
        });
        setBtnClr3({
            background: '#4A7389',
            color: '#C1D6E1'
        });
    }
    const changeBtnClr2 = () => {
        setBtnClr1({
            background: '#4A7389',
            color: '#C1D6E1'
        });
        setBtnClr2({
            background: '#FFFFFF',
            color: '#3E6578'
        });
        setBtnClr3({
            background: '#4A7389',
            color: '#C1D6E1'
        });
    }
    const changeBtnClr3 = () => {
        setBtnClr1({
            background: '#4A7389',
            color: '#C1D6E1'
        });
        setBtnClr2({
            background: '#4A7389',
            color: '#C1D6E1'
        });
        setBtnClr3({
            background: '#FFFFFF',
            color: '#3E6578'
        });
    }
    return (
        <>
            <div className='individualPanel_child21'>
                <h5 style={{ color: 'white' }}>Period</h5>
                <div className='dashboard_child11_1_btn' style={{ margin: '0 2% 0 2%' }}>
                    <button onClick={changeBtnClr1} style={btnClr1} >Weekly</button>
                    <button onClick={changeBtnClr2} style={btnClr2}>Monthly</button>
                    <button onClick={changeBtnClr3} style={btnClr3}>Annual</button>
                </div>
                <div className='dashboard_child11_2_1'>
                    <form >
                        <select name="months" id="dashboard_month_select">
                            <option value="Jan">Jan</option>
                            <option value="Feb">Feb</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="Aug">Aug</option>
                            <option value="Sep">Sep</option>
                            <option value="Oct">Oct</option>
                            <option value="Nov">Nov</option>
                            <option value="Dec">Dec</option>
                        </select>
                        <select name="years" id="dashboard_year_select">
                            <option value={2019}>2019</option>
                            <option value={2020}>2020</option>
                            <option value={2021}>2021</option>
                            <option value={2022}>2022</option>
                            <option value={2023}>2023</option>
                            <option value={2024}>2024</option>
                            <option value={2025}>2025</option>
                        </select>
                        <button type='button'>G0!</button>
                    </form>
                </div>
            </div>
            <div className='individualPanel_child22'>
                <div className='individualPanel_child22_1'></div>
                <div className='individualPanel_child22_2'>
                    <div className='individualPanel_child22_2_child'>
                        <h4>History Logs</h4>
                    </div>
                    {data.map((item) => (
                        <div className='individual_History'>
                            <div className='individual_History_date'>
                                <p>{item.date}</p>
                            </div>
                            {item.medic.map(item1 => (
                                <div className='individual_History_medics'>
                                    <div className='medicsImg'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="individual_History_medic">
                                        <div className='medicsH5'>
                                            <h5>{item1.name}</h5>
                                            <p>{item1.time}</p>
                                        </div>
                                        <div>
                                            <img src={item1.image} style={{ cursor: 'pointer' }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default IndividualPanel2