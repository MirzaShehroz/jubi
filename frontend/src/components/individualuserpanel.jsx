import user from "../assets/img/user.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import cancelButton from "../assets/img/closeButton.png";
import {Button} from "react-bootstrap";
import chatIcon from "../assets/img/chaticon.png";
import exportIcon from "../assets/img/export.png";
import React from "react";

function IndividualUserPanel() {
    return(
        <>
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
        </>
    )
}

export default IndividualUserPanel;