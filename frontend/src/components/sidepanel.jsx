import '../assets/css/sidepanel.css'
import React from 'react'
import { useRecoilState } from 'recoil';
import { sidePanelFunc } from '../data/atom';
import icon from '../assets/img/stripicon.png'

function SidePanel({ display }) {
    const [showSidePanel, setSP] = useRecoilState(sidePanelFunc);
    const showSidePanelHandle = () => {
        setSP((obj) => ({
            showSP: 'none',
        }))
    }

    return (

        <div id='sidePanel' style={{ display: display }} >
            <div className='sidePanel_child1'></div>
            <div className='sidePanel_child2'>
                <img style={{ transform: "rotate(180deg)" }} src={icon} alt="" onClick={showSidePanelHandle} />
            </div>
            <div className='sidePanel_child3'>
                <div className='sidePanel_child31'>
                    <div className='sidePanel_child31_1'>
                        <p>Messages</p>
                    </div>
                    <div className='sidePanel_child31_2'>
                        <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <p>Jamie Cloud</p>
                                <p>Yes, please</p>
                            </div>
                            <div>
                                <p>5:02pm</p>
                            </div>
                        </div>
                    </div>
                    <div className='sidePanel_child31_3'>
                        <button>View all</button>
                    </div>
                </div>
                <div className='sidePanel_child32'></div>
                <div className='sidePanel_child33'></div>
            </div>
        </div>
    )
}

export default SidePanel
