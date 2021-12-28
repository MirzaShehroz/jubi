import React, { useState } from 'react'
import logo from '../assets/img/jubiwatch_logo2.png';
import addIcon from '../assets/img/addicon.png';
import SignUp2 from './signupform';
import picUpload from '../assets/img/pic_upload_icon.png';
import { useRecoilState } from 'recoil';
import { userPicUpload } from '../data/atom';

function SignUpAddress() {
    const [showPrevPage, setShowPrevPage] = useState(false);
    const [avatarPreview, setAvatarPreview] = useRecoilState(userPicUpload);


    const submitSignAddress = (e) => {
        e.preventDefault();
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
                                    <div class="custom-file">
                                        <div>
                                            <input
                                                type="file"
                                                class="custom-file-input"
                                                id="images"
                                                accept="image/*"
                                                onChange={updateProfileDataChange}
                                            />
                                            <label for="images" class="custom-file-label"> <img src={picUpload} alt="avatar" /></label>
                                        </div>
                                    </div>
                                </div>
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
                                <img id='addBtnIcon' src={addIcon} alt="something17" />
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
