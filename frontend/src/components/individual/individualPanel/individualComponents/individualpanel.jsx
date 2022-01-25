import '../../../../assets/css/individualpanel.css';
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import Alergies from "../../../alergies/alergies";
import closeIcon from '../../../../assets/img/cancelicon2.png'
import IndividualPanel2 from "./individualpanel2";
import IndividualUserPanel from "../individualuserpanel";

function IndividualPanel() {
    const history = useHistory();
    const closeHandle = () => {
        history.push('/');
    }

    return (
        <div className='individualPanel'>
            <div className='individualPanel_close'>
                <img onClick={closeHandle} src={closeIcon} alt="" />
            </div>
            <div className='individualPanel_main'>
                <div className='individualPanel_child1'>
                    <IndividualUserPanel />
                </div>
                <div className='individualPanel_child2'>
                    {useLocation().pathname === '/individual' ? <IndividualPanel2 /> : null}
                    {useLocation().pathname === '/allergies-condition' ? <Alergies /> : null}

                </div>
            </div>
        </div>
    )
}

export default IndividualPanel