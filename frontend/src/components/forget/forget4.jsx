import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PasswordValidation from '../password_validation/password_validation';
import ConfirmPasswordValid from '../password_validation/confirm_password_valid';
import Forget5 from './forget5';
import logo from '../../assets/img/jubiwatch_logo.png';
import lockIcon from '../../assets/img/lockicon.png';
import passIcon1 from '../../assets/img/passwordicon1.png';
import passIcon2 from '../../assets/img/passwordicon2.png';
import { forgetPassDoc } from '../../data/atom';
import { useRecoilValue } from 'recoil';
import ApiServices from '../../services/apiservices';

function Forget4() {
    const forgetDoc = useRecoilValue(forgetPassDoc);
    const [pass, setPass] = useState(null);
    const [cPass, setCPass] = useState(null);
    const [showF5, setF5] = useState(false);
    const [invalidVer, setInvalidVer] = useState(false);
    const [passVisi, setPassVisi] = useState(false);
    const [passReq, setPassReq] = useState(false);
    const history = useHistory();
    const cancelButton = () => {
        history.push('/sign-in')
    }
    const passHandle = () => {
        setPassReq(true);
    }
    const forgetPassword = async () => {
        const res = await ApiServices.postForgetPassword({ username: forgetDoc.email, password: pass });
        if (res.status === 200) {
            setInvalidVer(false);
            setPassReq(false);
            setF5(true);
        }
    }
    const submitPassForm = (e) => {
        e.preventDefault();
        if (pass !== cPass) {
            setInvalidVer(true);
        } else {
            forgetPassword();
        }
    }
    const showPassVisibility = () => {
        setPassVisi(!passVisi);
    }

    return (
        <>
            {
                !showF5 ?
                    <div className="signin">
                        <div className="signin_cont">
                            <div className="signin_logo_cont forget_logo">
                                <img src={logo} alt="Jubiwatch_logo" />
                                <p>for Doctors</p>
                            </div>
                            <form onSubmit={submitPassForm}>
                                <div className='signin_fields_cont'>
                                    <div className='forget_text forget_pass_create'>
                                        <p>Create a new password</p>
                                    </div>

                                    <div className='forget_pass'>
                                        <div className='signin_fields passIconSet'>
                                            <input
                                                type={passVisi ? 'text' : 'password'}
                                                placeholder='Password'
                                                required
                                                onChange={(e) => {
                                                    passHandle();
                                                    setPass(e.target.value);
                                                }}
                                            />
                                            <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                        </div>
                                        {passReq ? <div className='forget_showPassVal'>
                                            <div className='forget_field_21 forget_showPassVal1'>
                                                <img src={lockIcon} alt="something4" />
                                                <span>Requirements for a password</span>
                                            </div>
                                            <PasswordValidation pass={pass} />
                                        </div> : null}
                                        <div className='signin_fields passIconSet'>
                                            <input
                                                type={passVisi ? 'text' : 'password'}
                                                placeholder='Confirm Password'
                                                required
                                                onChange={(e) => {
                                                    setCPass(e.target.value);
                                                    setInvalidVer(true);
                                                }}
                                            />
                                            <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                        </div>
                                        {invalidVer ? <div className='forget_showPassVal' style={{ margin: '0' }}>
                                            <ConfirmPasswordValid pass={pass} cPass={cPass} />
                                        </div> : null
                                        }
                                    </div>
                                    <div className='signup_btn_cont'>
                                        <button onClick={cancelButton} type='button' className='signup_btn signup_btn1'>Cancel</button>
                                        <button type='submit' className='signup_btn signup_btn2' style={{ background: '#3E6578' }}>Continue</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div > :
                    <Forget5 />
            }


        </>
    )
}

export default Forget4
