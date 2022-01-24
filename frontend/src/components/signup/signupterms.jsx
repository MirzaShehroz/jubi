import '../../assets/css/signup.css';
import React, { useState } from 'react';
import SignUp2 from './signupform';
import logo from '../../assets/img/jubiwatch_logo.png';
import { useHistory } from 'react-router-dom';

function SignUp() {
    const [show, setShow] = useState(false);
    const [checkboxShow, setCBS] = useState(false);
    const history = useHistory();
    const cancelButton = () => {
        history.push('/sign-in')
    }
    const submitTermsHandle = (e) => {
        e.preventDefault();
        if (checkboxShow) {
            setShow(true);
        }
    }

    return (
        <>
            {!show ? <div className="signup" >
                <div className="signup_cont">
                    <div className="signin_logo_cont signup_logo_cont">
                        <img src={logo} alt="Jubiwatch_logo" />
                        <p>for Doctors</p>
                    </div>
                    <form onSubmit={submitTermsHandle}>
                        <div className='signin_fields_cont'>
                            <div className='signup_checkout signin_checkout'>
                                <input type="checkbox" onClick={() => setCBS(!checkboxShow)} />
                                <span>약관 전체동의</span>
                            </div>
                            <hr />
                            <div className='signup_terms'>
                                <div className='signup_terms_child'>
                                    <div className='signup_checkout signin_checkout'>
                                        {checkboxShow ?
                                            <input type="checkbox" checked /> :
                                            <input type="checkbox" />
                                        }
                                        <span>Terms of use (필수)</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className='signup_terms_child'>
                                    <div className='signup_checkout signin_checkout'>
                                        {checkboxShow ?
                                            <input type="checkbox" checked /> :
                                            <input type="checkbox" />
                                        }
                                        <span>Privacy policy (필수)</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className='signup_terms_child'>
                                    <div className='signup_checkout signin_checkout'>
                                        {checkboxShow ?
                                            <input type="checkbox" checked /> :
                                            <input type="checkbox" />
                                        }
                                        <span>Data Security (선택)</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                            <div className='signup_btn_cont'>
                                <button onClick={cancelButton} type='button' className='signup_btn signup_btn1'>Cancel</button>
                                <button type='submit' style={{ background: checkboxShow ? '#3E6578' : '#c6c6c6' }} className='signup_btn signup_btn2'>Next</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
                :
                <SignUp2 />}
        </>
    )
}

export default SignUp
