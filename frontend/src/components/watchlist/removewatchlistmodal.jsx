import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import user1 from '../../assets/img/user.jpg'
import { userDataIndividual, watchList } from "../../data/atom";
import { Notifications } from '../../helpers/helpers';

function RemoveWatchModal(props) {

    let date = new Date().getFullYear();
    const [userId, setUserId] = useState(null);
    const addUser = useRecoilValue(userDataIndividual);
    const [/*userWatchList*/, setUserWatchList] = useRecoilState(watchList);

    useEffect(() => {
        addUser.map(item => setUserId(item.uid))
    }, [addUser])

    const getUserWatchList = () => {
        axios.get('/affiliate/v1/doctor/watchlist', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`
            }
        })
            .then(res => {
                setUserWatchList(res.data.data);
            })
            .catch(error => {
                if (error.response.data.data.code === 403) {
                    sessionStorage.clear();
                }
            });
    }

    const removeUserToList = (id) => {
        axios.delete(`/affiliate/v1/doctor/watchlist?uid=${id}`, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('authData')}`
            }
        }).then(res => {
            getUserWatchList();
            props.onHide();
        }).catch(err => {
            Notifications('error', "Interval Server Error!")
        })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{ color: '#3E6578' }}>
                    Remove this person to watchlist?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    addUser.map(item => (
                        <div className={'container-fluid'} key={item.uid}>
                            <div className={'row'}>
                                <div className={'col-lg-4 col-sm-4'}>
                                    <img id={'modalImage'} alt='user1' src={user1} />
                                </div>
                                <div className={'col-lg-8 col-sm-8 pop_username'}>
                                    <span >{item.first_name} {item.last_name}</span><br />
                                    <span style={{ color: '#767676' }}>{date - parseInt(item.date_of_birth.slice(6))} y.o.  ({item.date_of_birth})</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <br />
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-lg-12 col-sm-12'}>
                            <textarea className="form-control" id="modalTextarea" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="pop_btn" onClick={props.onHide}>Cancel</Button>
                <Button className='pop_btn pop_btn1' onClick={() => removeUserToList(userId)}>Remove</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveWatchModal;