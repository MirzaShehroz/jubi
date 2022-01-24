import '../../assets/css/signin.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/jubiwatch_logo.png';
import logo2 from '../../assets/img//passwordcomplete.png';


function Forget5() {
    return (
        <div className="signin">
            <div className="signin_cont">
                <div className="signin_logo_cont">
                    <img src={logo} alt="Jubiwatch_logo" />
                    <p>for Doctors</p>
                </div>

                <div className='signin_fields_cont'>
                    <div className='passComp'>
                        <img src={logo2} alt="logo2" />
                        <p id='passCompMsg'>Complete!</p>
                        <p>Your password has been changed successfully.</p>
                    </div>
                    <div className='sign_btn_cont'>
                        <Link to='sign-in'><button className='sign_btn signbtn_clr'>Sign In Now</button></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Forget5;
