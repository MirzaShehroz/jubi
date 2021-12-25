import user from "../assets/img/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import cancelButton from "../assets/img/closeButton.png";
import { Button } from "react-bootstrap";
import chatIcon from "../assets/img/chaticon.png";
import exportIcon from "../assets/img/export.png";
import React from "react";

function IndividualUserPanel() {
    return (
        <>
            <p className={'text-center'}><img alt="user" id={'userImg'} src={user} /></p>
            <br />
            <h5 className={'text-center'} style={{ fontSize: '16px' }}>John Doe</h5>
            <p className={'text-center'} style={{ fontSize: '13px' }}>Female</p>
            <p className={'text-center'} style={{ fontSize: '13px' }}>31 y.o. <span>(05/15/2020)</span></p>
            <p className={'text-center'} style={{ fontSize: '13px' }}>Wt: 5ft 4in / Ht: 140 lbs</p>
            <br />
            <table className="userPanel_table">
                <tr>
                    <td className={'emailHead'}>Email</td>
                    <td>hitman@gmail.com</td>
                </tr>
                <tr>
                    <td className={'phoneHead'}>Phone</td>
                    <td>+9256821566</td>
                </tr>
            </table>
            <br />
            <p id={'alergies'}><u>Allergies (11) & Conditions (3)</u></p>
            <br />
            <div id={'memo'}>
                <table>
                    <tr>
                        <td className={'memoHead'}>Memo</td>
                        <td className={'memoHeadIcon'}><FontAwesomeIcon icon={faPen} /></td>
                    </tr>
                </table>
                <p className={'memoMsg'}>
                    She has heart attack family history.
                </p>
                <table>
                    <tr>
                        <td className={'memoHead'}>Watchlist Comments</td>
                        <td className={'memoHeadIcon'} style={{ color: '#D7575F' }}>Done</td>
                    </tr>
                </table>
                <div className={'container'}>
                    <div className={'row memoWatchlist'}>
                        <div className={'col-lg-10 col-sm-10'}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis error, incidunt nemo perferendis perspiciatis</p>
                        </div>
                        <div className={'col-lg-2 col-sm-2'}>
                            <img src={cancelButton} alt={'cancel'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="userPanelInd_btn">
                <button><img src={chatIcon} alt={'chatIcon'} />Send Message</button>
                <button><img src={exportIcon} alt={'exportIcon'} />View Detail Page</button>
                <button style={{background:'#D7575F',color:'#FFFFFF',borderColor:'#D7575F'}}>Remove from Watchlist</button>
            </div>
        </>
    )
}

export default IndividualUserPanel;