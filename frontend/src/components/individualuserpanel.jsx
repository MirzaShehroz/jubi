import user from "../assets/img/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import cancelButton from "../assets/img/closeButton.png";
import chatIcon from "../assets/img/chaticon.png";
import watchListIcon from "../assets/img/bookmark.png";
import exportIcon from "../assets/img/export.png";
import React from "react";
import { useHistory, useLocation } from 'react-router-dom';

function IndividualUserPanel() {
    const history = useHistory();

    const showChat = () => {
        history.push('/chat')
    }
    const showIndividual = () => {
        history.push('/individual')
    }
    const showAllergies = () => {
        history.push('/allergies-condition')
    }

    return (
        <>
            <p className={'text-center'}><img onClick={showIndividual} alt="user" id={'userImg'} src={user} /></p>
            <br />
            <h5 className={'text-center'} style={{ fontSize: '16px' }}>John Doe</h5>
            <p className={'text-center'} style={{ fontSize: '13px' }}>Female</p>
            <p className={'text-center'} style={{ fontSize: '13px' }}>31 y.o. <span>(05/15/2020)</span></p>
            <p className={'text-center'} style={{ fontSize: '13px' }}>Wt: 5ft 4in / Ht: 140 lbs</p>
            <br />
            <table className="userPanel_table">
                <tbody>
                    <tr>
                        <td className={'emailHead'}>Email</td>
                        <td>hitman@gmail.com</td>
                    </tr>
                    <tr>
                        <td className={'phoneHead'}>Phone</td>
                        <td>+9256821566</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <p onClick={showAllergies} id={'alergies'}><u>Allergies (11) & Conditions (3)</u></p>
            <br />
            <div id={'memo'}>
                <table>
                    <tbody>
                        <tr>
                            <td className={'memoHead'}>Memo</td>
                            <td className={'memoHeadIcon'}><FontAwesomeIcon icon={faPen} /></td>
                        </tr>
                    </tbody>
                </table>
                <p className={'memoMsg'}>
                    She has heart attack family history.
                </p>
                <table>
                    <tbody>
                        <tr>
                            <td className={'memoHead'}>Watchlist Comments</td>
                            <td className={'memoHeadIcon'} style={{ color: '#D7575F' }}>Done</td>
                        </tr>
                    </tbody>
                </table>
                <div className={'container'}>
                    <div className={'row memoWatchlist'}>
                        <div className={'col-lg-10 col-sm-10'}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis error, incidunt nemo perferendis perspiciatis</p>
                        </div>
                        <div className={'col-lg-2 col-sm-2'}>
                            <img src={cancelButton} alt={'cancel'} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="userPanelInd_btn">
                {useLocation().pathname === '/chat' ?
                    <>
                        <button onClick={showIndividual} >View detailed page</button>
                        <button style={{ color: '#D7575F', borderColor: '#D7575F' }}><img src={watchListIcon} alt={'exportIcon'} />Add to watchlist</button>
                    </>
                    :
                    <>
                        <button onClick={showChat}><img src={chatIcon} alt={'chatIcon'} />Send Message</button>
                        <button><img src={exportIcon} alt={'exportIcon'} />Export to PDF</button>
                        <button style={{ background: '#D7575F', color: '#FFFFFF', borderColor: '#D7575F' }}>Remove from Watchlist</button>
                    </>}
            </div>
        </>
    )
}

export default IndividualUserPanel;