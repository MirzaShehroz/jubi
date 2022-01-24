import '../../assets/css/forget.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Forget2 from './forget2';
import Forget3 from './forget3';
import logo from '../../assets/img/jubiwatch_logo.png';
import iIcon from '../../assets/img/coolicon.png';

function Forget() {
    const [btnClr, setBtnClr] = useState('#C6C6C6');
    const [email, setEmail] = useState(null);
    const [showF2, setF2] = useState(false);
    const [showF3, setF3] = useState(false);
    const history = useHistory();
    const cancelButton = () => {
        history.push('/sign-in')
    }

    const emailHandle = (e) => {
        setEmail(e.target.value);
        if (email.includes('@') && email.includes('.co')) {
            setBtnClr('#3E6578');

        }
        else {
            setBtnClr('#C6C6C6');
        }
    }

    const submitForget1Handle = (e) => {
        e.preventDefault();
        if (btnClr === "#3E6578") {
            if (email === "a@gmail.com") {
                setF3(true);
            } else {
                setF2(true);
            }
        }
    }

    return (
        <>
            {
                showF2 ? <Forget2 /> :
                    showF3 ? <Forget3 /> :
                        <div className="signin">
                            <div className="signin_cont">
                                <div className="signin_logo_cont forget_logo">
                                    <img src={logo} alt="Jubiwatch_logo" />
                                    <p>for Doctors</p>
                                </div>
                                <form onSubmit={submitForget1Handle}>
                                    <div className='signin_fields_cont'>
                                        <div className='forget_text'>
                                            <p>Please enter your email ID to send you the code
                                                to reset your password</p>
                                        </div>
                                        <div className='signin_fields forget_field_1'>
                                            <input type="text" placeholder='Email ID' onChange={(e) => emailHandle(e)} />
                                        </div>
                                        <div className='signin_fields_bottom forget_field_2'>
                                            <div className='forget_field_21'>
                                                <img src={iIcon} alt="something5" />
                                                <span>Forgot Email ID?</span>
                                            </div>
                                        </div>
                                        <div className='signup_btn_cont'>
                                            <button onClick={cancelButton} type='button' className='signup_btn signup_btn1'>Cancel</button>
                                            <button type='submit' className='signup_btn signup_btn2' style={{ background: btnClr }}>Continue</button>
                                        </div>
                                        <div className='signin_bottom_cont'>
                                            <p>New to here? <Link to={'sign-up'}>Create account</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div >
            }
        </>
    )
}

export default Forget
