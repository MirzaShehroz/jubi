import '../assets/css/useroverlay.css'
import React from 'react'

function UserOverlay({ display , animate}) {
    return (
        <div id='overlay_user' className={animate} style={{ display: display }} >

        </div>
    )
}

export default UserOverlay
