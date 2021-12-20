import React, { useState } from 'react'
import logo from '../assets/img/jubiwatch_logo2.png';
import avatar from '../assets/img/signup_avatar.png';
import addIcon from '../assets/img/addicon.png';
import SignUp2 from './signupform';

function SignUpAddress() {
    const [showPrevPage, setShowPrevPage] = useState(false);

    const submitSignAddress = (e) => {
        e.preventDefault();
    }

    const showPrev = () => {
        setShowPrevPage(true);
    }

    return (
        <>
            {!showPrevPage ? <div className="signup" >
                <div className="signup_cont signup_cont2">
                    <p className='signup_heading'>Sign up</p>
                    <form onSubmit={submitSignAddress}>
                        <div className='signin_fields_cont'>
                            <div className='signup_avatar'>
                                <img src={avatar} alt="avatar" />
                            </div>
                            <label className='signup_label'>Office <span>*</span></label>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    placeholder='Clinic name' />
                            </div>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    placeholder='Specialty or Department name' />
                            </div>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    placeholder='Your title' />
                            </div>
                            <div className='signup_email'>
                                <label className='signup_label'>Contact info <span>*</span></label>
                                <div className='signin_fields sign_phone'>
                                    <select name="Phone" id="Phone">
                                        <option value="Phone">Phone</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder='Number'
                                    />
                                </div>
                                <input
                                    type="button"
                                    placeholder='Add'
                                    value={'Add'}
                                    id='addBtn'
                                />
                                <img id='addBtnIcon' src={addIcon} alt=""/>
                            </div>
                            <div className='signup_btn_cont'>
                                <button type='button' onClick={showPrev} className='signup_btn signup_btn1'>Previous</button>
                                <button type='submit' className='signup_btn signup_btn2'>Save</button>
                            </div>
                        </div>
                    </form>
                    <div className="signup_logo_bottom">
                        <img src={logo} alt="Jubiwatch_logo" />
                    </div>
                </div>
            </div >
                :
                <SignUp2 />}
        </>
    )
}

export default SignUpAddress
