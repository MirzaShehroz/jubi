import React, { useState } from 'react'


function Dashboard() {
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
    const [btnClr4, setBtnClr4] = useState({
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
        setBtnClr4({
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
        setBtnClr4({
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
        setBtnClr4({
            background: '#4A7389',
            color: '#C1D6E1'
        });
    }
    const changeBtnClr4 = () => {
        setBtnClr1({
            background: '#4A7389',
            color: '#C1D6E1'
        });
        setBtnClr2({
            background: '#4A7389',
            color: '#C1D6E1'
        });
        setBtnClr3({
            background: '#4A7389',
            color: '#C1D6E1'
        });
        setBtnClr4({
            background: '#FFFFFF',
            color: '#3E6578'
        });
    }

    return (
        <div className='dashboard'>
            <div className='dashboard_child1'>
                <div className='dashboard_child11'>
                    <div className='dashboard_child11_1'>
                        <p>Period</p>
                        <div className='dashboard_child11_1_btn'>
                            <button onClick={changeBtnClr1} style={btnClr1} >1 month</button>
                            <button onClick={changeBtnClr2} style={btnClr2}>3 months</button>
                            <button onClick={changeBtnClr3} style={btnClr3}>6 months</button>
                            <button onClick={changeBtnClr4} style={btnClr4}>1 year</button>
                        </div>
                    </div>
                    <div className='dashboard_child11_2'>
                        <p>Sep. 2021 - Nov. 2021</p>
                        <div className='dashboard_child11_2_1'>
                            <p>Since</p>
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
                </div>
                <div className='dashboard_child12'>
                    <div className='dashboard_child12_1'>
                        <div>
                            <h4>All</h4>
                            <p className='dashboard_child12_p'>Total 206</p>
                            <div className='dashboard_child12_graphNum'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='dashboard_child12_2'>
                        <div>
                            <h4>JUBI Watch Only</h4>
                            <p className='dashboard_child12_p'>Total 206</p>
                            
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='dashboard_child12_3'>
                        <div>
                            <h4>Status</h4>
                        </div>
                        <div className='dashboard_child12_31'>
                            <div><p></p>Under 30%</div>
                            <div><p></p>Under 50%</div>
                            <div><p></p>50 and more</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dashboard_child2'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, doloremque.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, doloremque.</p>
            </div>
        </div >
    )
}

export default Dashboard
