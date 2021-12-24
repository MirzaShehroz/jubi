import '../assets/css/individualpanel.css';
import React from 'react'
import { useHistory } from 'react-router-dom';
import closeIcon from '../assets/img/cancelicon2.png'

function IndividualPanel() {
    const history = useHistory();
    const closeHandle = () => {
        history.push('/chat');
    }
    return (
        <div className='individualPanel'>
            <div className='individualPanel_close'>
                <img onClick={closeHandle} src={closeIcon} alt="something7" />
            </div>
            <div className='individualPanel_main'>
                <div className='individualPanel_child1'>

                </div>
                <div className='individualPanel_child2'>

                </div>
            </div>
        </div>
    )
}

export default IndividualPanel
