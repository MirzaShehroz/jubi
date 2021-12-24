import '../assets/css/individualpanel.css';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import closeIcon from '../assets/img/cancelicon2.png'
import user from "../assets/img/user.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import chatIcon from '../assets/img/chaticon.png'
import exportIcon from '../assets/img/export.png'
import cancelButton from '../assets/img/closeButton.png'

function IndividualPanel() {
    const history = useHistory();
    const closeHandle = () => {
        history.push('/chat');
    }

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
        <div className='individualPanel'>
            <div className='individualPanel_close'>
                <img onClick={closeHandle} src={closeIcon} alt="" />
            </div>
            <div className='individualPanel_main'>
                <div className='individualPanel_child1'>
                    <p className={'text-center'}><img alt="user" id={'userImg'} src={user}/></p>
                    <br/>
                    <h5 className={'text-center'}>John Doe</h5>
                    <p className={'text-center'}>Female</p>
                    <p className={'text-center'}>31 y.o. <span>(05/15/2020)</span></p>
                    <br/>
                    <table>
                        <tr>
                            <td className={'emailHead'}>Email</td>
                            <td>hitman@gmail.com</td>
                        </tr>
                        <tr>
                            <td className={'phoneHead'}>Phone</td>
                            <td>+9256821566</td>
                        </tr>
                    </table>
                    <br/>
                    <p style={{color: '#3E6578',cursor: 'pointer'}} id={'alergies'} className={'text-center'}><u>Allergies (11) & Conditions (3)</u></p>
                    <br/>
                    <div id={'memo'}>
                        <table>
                            <tr>
                                <td className={'memoHead'}>Memo</td>
                                <td className={'memoHeadIcon'}><FontAwesomeIcon icon={faPen}/></td>
                            </tr>
                        </table>
                        <br/>
                        <p className={'memoMsg'}>
                            She has heart attack family history.
                        </p>
                        <table>
                            <tr>
                                <td className={'memoHead'}>Watchlist Comments</td>
                                <td className={'memoHeadIcon'}><u style={{color: 'red'}}>Done</u></td>
                            </tr>
                        </table>
                        <div className={'container'}>
                            <div className={'row memoWatchlist'}>
                                <div className={'col-lg-10 col-sm-10'}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis error, incidunt nemo perferendis perspiciatis</p>
                                </div>
                                <div className={'col-lg-2 col-sm-2'}>
                                    <img src={cancelButton} alt={'cancel'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={'text-center'}><Button className={'indiButtons'} variant="outline-dark"><img src={chatIcon} alt={'chatIcon'}/> Send Message</Button></p>
                    <p className={'text-center'}><Button className={'indiButtons'} variant="outline-dark"><img src={exportIcon} alt={'exportIcon'}/> View Detail Page</Button></p>

                    <p className={'text-center'}><Button className={'indiButtons'} variant="outline-danger">Remove from Watchlist</Button></p>
                </div>
                <div className='individualPanel_child2'>
                    <div className='individualPanel_child21'>
                        <p>Period</p>
                        <div className='dashboard_child11_1_btn'>
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
                    <div className='individualPanel_child22'></div>
                </div>
            </div>
        </div>
    )
}

export default IndividualPanel
