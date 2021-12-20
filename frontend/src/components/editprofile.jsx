import React from 'react'
import logo from '../assets/img/jubiwatch_logo2.png';
import avatar from '../assets/img/signup_avatar.png';
import addIcon from '../assets/img/addicon.png';

function EditProfile() {

    const submitSignForm = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <div className="signup" >
                <div className="signup_cont signup_cont2">
                    <p className='signup_heading'>Edit profile</p>
                    <form onSubmit={submitSignForm}>
                        <div className='signin_fields_cont'>
                            <div className='signup_avatar'>
                                <img src={avatar} alt="avatar" />
                            </div>
                            <label className='signup_label'>Name <span>*</span></label>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    placeholder='First name' />
                            </div>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    placeholder='Middle name (can be empty)' />
                            </div>
                            <div className='signin_fields'>
                                <input
                                    type="text"
                                    placeholder='Last name' />
                            </div>
                            <div className='signup_email' id='editP_1'>
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
                            </div>
                            <div className='signup_email' id='editP_2'>
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
                                <img id='addBtnIcon' src={addIcon} alt="" />
                            </div>

                            <div className='signup_btn_cont'>
                                <button type='button' className='signup_btn signup_btn1'>Cancel</button>
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
