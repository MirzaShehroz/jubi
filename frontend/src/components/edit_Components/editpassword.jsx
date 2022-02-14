import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userPassEdit } from '../../data/atom';
import logo from '../../assets/img/jubiwatch_logo.png';
import lockIcon from '../../assets/img/lockicon.png';
import passIcon1 from '../../assets/img/passwordicon1.png';
import passIcon2 from '../../assets/img/passwordicon2.png';
import logo2 from '../../assets/img//passwordcomplete.png';
import PasswordValidation from '../password_validation/password_validation';
import ConfirmPasswordValid from '../password_validation/confirm_password_valid';
import { Notifications } from '../../helpers/notifications';
import ApiServices from '../../services/apiservices';

function EditPassword() {

    const [passAtom, setPassAtom] = useRecoilState(userPassEdit);
    const [passVisi, setPassVisi] = useState(false);
    const [passReq, setPassReq] = useState(false);
    const [curPass, setCurPass] = useState('');
    const [pass, setPass] = useState('');
    const [cPass, setCPass] = useState('');
    const [invalidVer, setInvalidVer] = useState(false);
    const history = useHistory();
    const cancelButton = () => {
        history.push('/')
    }
    const passHandle = () => {
        setPassReq(true);
    }
    const showPassVisibility = () => {
        setPassVisi(!passVisi);
    }

    const updatePassword = async () => {
        const res = await ApiServices.updateDoctorProfile({ password: { current_password: curPass, new_password: pass } });
        if (res.status === 200) {
            setInvalidVer(false);
            setPassReq(false);
            setPassAtom((obj) => ({ currentPass: false, editPass: false, successPass: true }));
            sessionStorage.clear();
        } else {
            setPassAtom((obj) => ({ currentPass: true, editPass: false, successPass: false, }));
        }
    }
    const submitSignForm = (e) => {
        e.preventDefault();
        if (pass !== cPass) {
            setInvalidVer(true);
        } else {
            updatePassword();
        }
    }
    const showPassContent = async () => {
        if (curPass !== '') {
            let isPass = sessionStorage.getItem('unKnown').slice(9);
            if (isPass !== curPass) {
                return Notifications('warning', 'Incorrect Current Password');
            }
            if (isPass === curPass) {
                setPassAtom((obj) => ({ currentPass: false, editPass: true, successPass: false, }))
            }
        } else {
            Notifications('warning', 'Enter Current Password');
        }
    }

    return (
        <div>
            <div className="signup" >
                <div className="signup_cont signup_cont2">
                    <div className="signin_logo_cont idPassLogo">
                        <img src={logo} alt="Jubiwatch_logo" />
                        <p>for Doctors</p>
                    </div>
                    <form onSubmit={submitSignForm}>
                        <div className='signin_fields_cont'>
                            <div className='forget_text forget_pass_create'>
                                {
                                    passAtom.currentPass ? <p>Input password to identify you </p> :
                                        passAtom.editPass ? <p>Edit Password </p> : null
                                }
                            </div>
                            {
                                passAtom.currentPass ? <div className='idPassCont'>
                                    <label className='signup_label'>Current Password</label>
                                    <div className='signin_fields passIconSet'>
                                        <input
                                            placeholder='Current Password'
                                            required
                                            onChange={(e) => setCurPass(e.target.value)}
                                            type={passVisi ? 'text' : 'password'}
                                        />
                                        <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                    </div>
                                </div> :
                                    passAtom.editPass ?
                                        <div className='forget_pass'>
                                            <label className='signup_label'>New password</label>
                                            <div className='signin_fields passIconSet'>
                                                <input
                                                    type={passVisi ? 'text' : 'password'}
                                                    placeholder='Password'
                                                    required
                                                    value={pass}
                                                    onChange={(e) => {
                                                        passHandle();
                                                        setPass(e.target.value);
                                                    }}
                                                />
                                                <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                            </div>
                                            {passReq ? <div className='forget_showPassVal'>
                                                <div className='forget_field_21 forget_showPassVal1'>
                                                    <img src={lockIcon} alt="something" />
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
                                                        setCPass(e.target.value)
                                                        setInvalidVer(true)
                                                    }}
                                                />
                                                <img src={passVisi ? passIcon2 : passIcon1} alt='' onClick={showPassVisibility} />
                                            </div>
                                            {invalidVer ? <div className='forget_showPassVal' style={{ margin: '0' }}>
                                                <ConfirmPasswordValid pass={pass} cPass={cPass} />
                                            </div> : null
                                            }
                                        </div> :
                                        <>
                                            <div className='passComp'>
                                                <img src={logo2} alt="logo2" />
                                                <p id='passCompMsg'>Complete!</p>
                                                <p style={{ marginBottom: '40px' }}>Your password has been changed successfully.</p>
                                            </div>
                                        </>
                            }

                            {!passAtom.successPass ?
                                <div className='signup_btn_cont'>
                                    <button onClick={cancelButton} type='button' className='signup_btn signup_btn1'>Cancel</button>
                                    {
                                        passAtom.currentPass ?
                                            <button
                                                type='button'
                                                className='signup_btn signup_btn2'
                                                style={{ background: '#3E6578' }}
                                                onClick={showPassContent}
                                            >Continue</button> :
                                            passAtom.editPass ?
                                                <button
                                                    type='submit'
                                                    className='signup_btn signup_btn2'
                                                    style={{ background: '#3E6578' }}>Save</button>
                                                : null
                                    }

                                </div> :
                                <Link to='sign-in'>
                                    <button
                                        className='sign_btn signbtn_clr'
                                        style={{ background: '#3E6578', width: '100%' }}
                                        type='button'
                                        onClick={() => setPassAtom((obj) => ({
                                            currentPass: true,
                                            editPass: false,
                                            successPass: false,
                                        }))}
                                    >Sign In Now</button></Link>
                            }
                        </div>
                    </form>
                </div>
            </div >
        </div>

    )
}

export default EditPassword
