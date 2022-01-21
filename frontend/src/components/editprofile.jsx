import React, { useCallback, useEffect } from 'react'
import logo from '../assets/img/jubiwatch_logo2.png';
import addIcon from '../assets/img/addicon.png';
import picUpload from '../assets/img/pic_upload_icon.png';
import { docData, userPicUpload } from '../data/atom';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function EditProfile() {
    const [avatarPreview, setAvatarPreview] = useRecoilState(userPicUpload);
    const [docData_, setDocData] = useRecoilState(docData);
    const history = useHistory();
    const cancelButton = () => {
        history.push('/')
    }

    const getData = useCallback(() => {
        axios.get('/affiliate/v1/doctor/profile', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`
            }
        }).then(res => {
            setDocData((obj) => ({
                dId: res.data.data.did,
                firstName: res.data.data.first_nmae,
                middleName: res.data.data.middle_name,
                lastName: res.data.data.last_name,
                email: res.data.data.email,
                hospital: res.data.data.hospital,
                specialty: res.data.data.speciality,
                title: res.data.data.title,
                phone_number: res.data.data.phone_number,
            }))
        }).catch(err => console.log(err))
    }, [setDocData])

    useEffect(() => {
        getData();
    }, [getData])

    const submitSignForm = (e) => {
        e.preventDefault();
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
            <div className="signup" >
                <div className="signup_cont signup_cont2">
                    <p className='signup_heading'>Edit profile</p>
                    <form onSubmit={submitSignForm}>
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
                            <label className='signup_label'>Name <span>*</span></label>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    value={docData_.firstName}
                                    onChange={(e) => setDocData((obj) => ({
                                        ...obj,
                                        firstName: e.target.value,
                                    }))}
                                    placeholder='First name' />
                            </div>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    value={docData_.middleName}
                                    onChange={(e) => setDocData((obj) => ({
                                        ...obj,
                                        middleName: e.target.value,
                                    }))}
                                    placeholder='Middle name (can be empty)' />
                            </div>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    value={docData_.lastName}
                                    onChange={(e) => setDocData((obj) => ({
                                        ...obj,
                                        lastName: e.target.value,
                                    }))}
                                    placeholder='Last name' />
                            </div>
                            <div className='signup_email' id='editP_1'>
                                <label className='signup_label'>Office <span>*</span></label>
                                <div className='signin_fields'>
                                    <input
                                        type="text"
                                        value={docData_.hospital}
                                        onChange={(e) => setDocData((obj) => ({
                                            ...obj,
                                            hospital: e.target.value,
                                        }))}
                                        placeholder='Clinic name' />
                                </div>
                                <div className='signin_fields'>
                                    <input
                                        type="text"
                                        value={docData_.specialty}
                                        onChange={(e) => setDocData((obj) => ({
                                            ...obj,
                                            specialty: e.target.value,
                                        }))}
                                        placeholder='Specialty or Department name' />
                                </div>
                                <div className='signin_fields'>
                                    <input
                                        type="text"
                                        value={docData_.title}
                                        onChange={(e) => setDocData((obj) => ({
                                            ...obj,
                                            title: e.target.value,
                                        }))}
                                        placeholder='Your title' />
                                </div>
                            </div>
                            <div className='signup_email' id='editP_2'>
                                <label className='signup_label'>Contact info <span>*</span></label>
                                <div className='signin_fields sign_phone'>
                                    <select name="Phone" id="Phone">
                                        <option value="Phone">Phone</option>
                                    </select>
                                    <input
                                        type="text"
                                        value={docData_.phone_number}
                                        onChange={(e) => setDocData((obj) => ({
                                            ...obj,
                                            phone_number: e.target.value,
                                        }))}
                                        placeholder='Number'
                                    />
                                </div>
                                <input
                                    type="button"
                                    placeholder='Add'
                                    value={'Add'}
                                    id='addBtn'
                                />
                                <img id='addBtnIcon' src={addIcon} alt="something2" />
                            </div>

                            <div className='signup_btn_cont'>
                                <button onClick={cancelButton} type='button' className='signup_btn signup_btn1'>Cancel</button>
                                <button type='submit' className='signup_btn signup_btn2' style={{ background: '#3E6578' }}>Save</button>
                            </div>
                        </div>
                    </form>
                    <div className="signup_logo_bottom">
                        <img src={logo} alt="Jubiwatch_logo" />
                    </div>
                </div>
            </div >

        </>
    )
}

export default EditProfile
