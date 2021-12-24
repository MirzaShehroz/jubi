import '../assets/css/chat.css';
import {useState} from 'react'
import user from '../assets/img/user.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import bookMarkIcon from '../assets/img/bookmark.png'
import chatUserPic from '../assets/img/chatUserPic.png'

function Chat() {

    let [child1_1,setChild1_1]=useState('none')
    let [child1_2,setChild1_2]=useState('28%');
    let [child1_3,setChild1_3]=useState('68%');


    function toogleViewProfile() {
       if (child1_1 === 'none')
       {
           setChild1_1('block');
           setChild1_2('23%');
           setChild1_3('53%');
       }
       else
       {
           setChild1_1('none');
           setChild1_2('28%');
           setChild1_3('68%');
       }
    }


    return(
        <div style={{width: '100%',height: '100vh',overflow: 'auto',background: 'gray',margin: 'auto'}}>
            <br/>
            <p style={{background: 'gray',width: '100%',fontSize: '25px',fontWeight: 'bold',paddingLeft: '95%',color: 'white'}}>X</p>
            <div style={{margin: 'auto',width: '85%',height: '90%',background: 'white',borderRadius: '10px'}}>

                <div className={'chatParent1'}>
                    <div style={{width: '20%',display: child1_1}} className={'child1-1'}>
                        <p className={'text-center'}><img id={'userImg'} src={user}/></p>
                        <br/>
                        <h5 className={'text-center'}>John Doe</h5>
                        <p className={'text-center'}>Female</p>
                        <p className={'text-center'}>31 y.o. <span>(05/15/2020)</span></p>
                        <br/>
                        <table>
                            <tr>
                                <td className={'emailHead'}>Email</td>
                                <td>hitman@gmail.com</td>
                            </tr>
                            <tr>
                                <td className={'phoneHead'}>Phone</td>
                                <td>+9256821566</td>
                            </tr>
                        </table>
                        <br/>
                        <p style={{color: '#3E6578',cursor: 'pointer'}} className={'text-center'}><u>Allergies (11) & Conditions (3)</u></p>
                        <br/>
                        <div id={'memo'}>
                            <table>
                                <tr>
                                    <td className={'memoHead'}>Memo</td>
                                    <td className={'memoHeadIcon'}><FontAwesomeIcon icon={faPen}/></td>
                                </tr>
                            </table>
                            <br/>
                            <p className={'memoMsg'}>
                                She has heart attack family history.
                            </p>
                        </div>
                        <p className={'text-center'}><Button className={'chatButtons'} variant="outline-dark">View Detail Page</Button></p>

                        <p className={'text-center'}><Button className={'chatButtons'} variant="outline-danger"><span><img src={bookMarkIcon}/> </span> Add to Wishlist</Button></p>
                    </div>
                    <div style={{width: child1_2}} className={'child1-2'}>
                        <div>
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-lg-3 col-sm-3'}>
                                        <p className={'text-center'}>
                                            <img id={'chatUserPic'} src={chatUserPic}/>
                                        </p>
                                    </div>
                                    <div className={'col-lg-9 col-sm-9'}>
                                        <table>
                                            <tr>
                                                <td id={'chatName'}>Name 1</td>
                                                <td>11:12, today</td>
                                            </tr>
                                        </table>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-lg-3 col-sm-3'}>
                                        <p className={'text-center'}>
                                            <img id={'chatUserPic'} src={chatUserPic}/>
                                        </p>
                                    </div>
                                    <div className={'col-lg-9 col-sm-9'}>
                                        <table>
                                            <tr>
                                                <td id={'chatName'}>Name 1</td>
                                                <td>11:12, today</td>
                                            </tr>
                                        </table>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-lg-3 col-sm-3'}>
                                        <p className={'text-center'}>
                                            <img id={'chatUserPic'} src={chatUserPic}/>
                                        </p>
                                    </div>
                                    <div className={'col-lg-9 col-sm-9'}>
                                        <table>
                                            <tr>
                                                <td id={'chatName'}>Name 1</td>
                                                <td>11:12, today</td>
                                            </tr>
                                        </table>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-lg-3 col-sm-3'}>
                                        <p className={'text-center'}>
                                            <img id={'chatUserPic'} src={chatUserPic}/>
                                        </p>
                                    </div>
                                    <div className={'col-lg-9 col-sm-9'}>
                                        <table>
                                            <tr>
                                                <td id={'chatName'}>Name 1</td>
                                                <td>11:12, today</td>
                                            </tr>
                                        </table>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-lg-3 col-sm-3'}>
                                        <p className={'text-center'}>
                                            <img id={'chatUserPic'} src={chatUserPic}/>
                                        </p>
                                    </div>
                                    <div className={'col-lg-9 col-sm-9'}>
                                        <table>
                                            <tr>
                                                <td id={'chatName'}>Name 1</td>
                                                <td>11:12, today</td>
                                            </tr>
                                        </table>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-lg-3 col-sm-3'}>
                                        <p className={'text-center'}>
                                            <img id={'chatUserPic'} src={chatUserPic}/>
                                        </p>
                                    </div>
                                    <div className={'col-lg-9 col-sm-9'}>
                                        <table>
                                            <tr>
                                                <td id={'chatName'}>Name 1</td>
                                                <td>11:12, today</td>
                                            </tr>
                                        </table>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-lg-3 col-sm-3'}>
                                        <p className={'text-center'}>
                                            <img id={'chatUserPic'} src={chatUserPic}/>
                                        </p>
                                    </div>
                                    <div className={'col-lg-9 col-sm-9'}>
                                        <table>
                                            <tr>
                                                <td id={'chatName'}>Name 1</td>
                                                <td>11:12, today</td>
                                            </tr>
                                        </table>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-lg-3 col-sm-3'}>
                                        <p className={'text-center'}>
                                            <img id={'chatUserPic'} src={chatUserPic}/>
                                        </p>
                                    </div>
                                    <div className={'col-lg-9 col-sm-9'}>
                                        <table>
                                            <tr>
                                                <td id={'chatName'}>Name 1</td>
                                                <td>11:12, today</td>
                                            </tr>
                                        </table>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-lg-3 col-sm-3'}>
                                        <p className={'text-center'}>
                                            <img id={'chatUserPic'} src={chatUserPic}/>
                                        </p>
                                    </div>
                                    <div className={'col-lg-9 col-sm-9'}>
                                        <table>
                                            <tr>
                                                <td id={'chatName'}>Name 1</td>
                                                <td>11:12, today</td>
                                            </tr>
                                        </table>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'container'}>
                                <div className={'row'}>
                                    <div className={'col-lg-3 col-sm-3'}>
                                        <p className={'text-center'}>
                                            <img id={'chatUserPic'} src={chatUserPic}/>
                                        </p>
                                    </div>
                                    <div className={'col-lg-9 col-sm-9'}>
                                        <table>
                                            <tr>
                                                <td id={'chatName'}>Name 1</td>
                                                <td>11:12, today</td>
                                            </tr>
                                        </table>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div style={{width: child1_3}} className={'child1-3'}>
                        <p onClick={toogleViewProfile}>Hitman</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default  Chat;