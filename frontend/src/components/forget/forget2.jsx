import '../../assets/css/forget.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/img/jubiwatch_logo.png';


function Forget2() {
    const history = useHistory();
    const cancelButton = () => {
        history.push('/sign-in')
    }
    return (
        <div className="signin">
            <div className="signin_cont">
                <div className="signin_logo_cont forget_logo">
                    <img src={logo} alt="Jubiwatch_logo" />
                    <p>for Doctors</p>
                </div>
                <form>
                    <div className='signin_fields_cont'>
                        <div className='forget_text'>
                            <p>This email is not registered to our service.
                                Create an account with this email.</p>
                        </div>

                        <div className='forget_emailShow_cont'>
                            <p>abc@emailadress.com</p>
                        </div>

                        <div className='signup_btn_cont'>
                            <button onClick={cancelButton} type='button' className='signup_btn signup_btn1'>Cancel</button>
                            <Link to='sign-up'><button type='button' className='signup_btn signup_btn2' style={{ background: "#3E6578" }} >Sign up</button></Link>
                        </div>
                        <div className='signin_bottom_cont'>
                            <p><Link to={'sign-in'}>Sign in with a different account</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Forget2
