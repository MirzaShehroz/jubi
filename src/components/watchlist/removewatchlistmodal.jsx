import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import user1 from '../../assets/img/user.jpg'
import { userDataIndividual, watchList, watchListComment } from "../../data/atom";
import ApiServices from "../../services/apiservices";

function RemoveWatchModal(props) {

    let date = new Date().getFullYear();
    const [userId, setUserId] = useState(null);
    const addUser = useRecoilValue(userDataIndividual);
    const [/*..*/, setUserWatchList] = useRecoilState(watchList);
    const comment = useRecoilValue(watchListComment);
    const history = useHistory();
    useEffect(() => {
        addUser.map(item => setUserId(item.uid))
    }, [addUser])
    const getUserWatchList = async () => {
        const res = await ApiServices.getWatchList();
        if (res.status === 200) {
            setUserWatchList(res.data.data);
        } else if (res.data.code === 403 || res.data.code === 401) {
            history.push('/sign-in');
        }
    }
    const removeUserToList = async (id) => {
        const res = await ApiServices.removeWatchlistUser(id);
        if (res.status === 200) {
            getUserWatchList();
            props.onHide();
        } else if (res.data.code === 403 || res.data.code === 401) {
            history.push('/sign-in');
        }
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
                            <textarea value={comment} readOnly className="form-control" id="modalTextarea" rows="3"></textarea>
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