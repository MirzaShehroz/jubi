import React, { useState } from 'react'
import logo from '../../assets/img/jubiwatch_logo2.png';
import addIcon from '../../assets/img/addicon.png';
import SignUp2 from './signupform';
import picUpload from '../../assets/img/pic_upload_icon.png';
import { useRecoilState } from 'recoil';
import { docSignUpData, userPicUpload } from '../../data/atom';
import axios from 'axios';
import { Notifications } from '../../helpers/helpers';
import { useHistory } from 'react-router-dom';

function SignUpAddress() {
    const history = useHistory();
    const [showPrevPage, setShowPrevPage] = useState(false);
    const [avatarPreview, setAvatarPreview] = useRecoilState(userPicUpload);
    const [docSignUp, setDocSignUp] = useRecoilState(docSignUpData);

    const submitSignAddress = (e) => {
        e.preventDefault();
        postForm();
    }

    const postForm = () => {
        const body = {
            first_name: docSignUp.firstName,
            middle: docSignUp.middleName,
            last_name: docSignUp.lastName,
            email: docSignUp.email,
            password: docSignUp.password,
            phone_number: docSignUp.phone_number,
            hospital: docSignUp.hospital,
            speciality: docSignUp.specialty,
            title: docSignUp.title
        }
        axios.post(`http://ec2-13-125-149-247.ap-northeast-2.compute.amazonaws.com:9090/affiliate/v1/doctor/signup`, body)
            .then(res => {
                Notifications('success', res.data.data.message);
                history.push('/');
            })
            .catch(err => {
                Notifications('error', `${err.response.data.data.message}`);
            });
    }
    const showPrev = () => {
        setShowPrevPage(true);
    }
    const updateProfileDataChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview((obj) => ({
                    avatar: reader.result
                }));
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <>
            {!showPrevPage ? <div className="signup" >
                <div className="signup_cont signup_cont2">
                    <p className='signup_heading'>Sign up</p>
                    <form onSubmit={submitSignAddress} encType="multipart/form-data">
                        <div className='signin_fields_cont'>
                            <div className='signup_avatar'>
                                <div>
                                    <img src={avatarPreview.avatar} alt="avatar" />
                                    <div className="custom-file">
                                        <div>
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="images"
                                                accept="image/*"
                                                onChange={updateProfileDataChange}
                                            />
                                            <label htmlFor="images" className="custom-file-label"> <img src={picUpload} alt="avatar" /></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label className='signup_label'>Office <span>*</span></label>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    required
                                    value={docSignUp.hospital}
                                    onChange={(e) => setDocSignUp(obj => ({
                                        ...obj,
                                        hospital: e.target.value
                                    }))}
                                    placeholder='Clinic name' />
                            </div>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    required
                                    value={docSignUp.specialty}
                                    onChange={(e) => setDocSignUp(obj => ({
                                        ...obj,
                                        specialty: e.target.value
                                    }))}
                                    placeholder='Specialty or Department name' />
                            </div>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    required
                                    value={docSignUp.title}
                                    onChange={(e) => setDocSignUp(obj => ({
                                        ...obj,
                                        title: e.target.value
                                    }))}
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
                                        required
                                        value={docSignUp.phone_number}
                                        onChange={(e) => setDocSignUp(obj => ({
                                            ...obj,
                                            phone_number: e.target.value
                                        }))}
                                    />
                                </div>
                                <input
                                    type="button"
                                    placeholder='Add'
                                    value={'Add'}
                                    id='addBtn'
                                />
                                <img id='addBtnIcon' src={addIcon} alt="something17" />
                            </div>
                            <div className='signup_btn_cont'>
                                <button type='button' onClick={showPrev} className='signup_btn signup_btn1'>Previous</button>
                                <button type='submit' className='signup_btn signup_btn2' style={{background:'#3E6578'}}>Save</button>
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
