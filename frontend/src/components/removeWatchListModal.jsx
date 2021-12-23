import {Modal,Button} from "react-bootstrap";
import user1 from '../assets/img/user.jpg'

function RemoveWatchModal(props)
{
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{color: '#3E6578'}}>
                    Remove this person to watchlist?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-lg-4 col-sm-4'}>
                            <img id={'modalImage'} src={user1} />
                        </div>
                        <div className={'col-lg-8 col-sm-8'}>
                            <span>John Doe</span><br/>
                            <span style={{color: '#767676'}}>52 y.o. (02/19/1966)</span>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-lg-12 col-sm-12'}>
                            <textarea  className="form-control" id="modalTextarea" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{width: '150px',background: '#3E6578'}} onClick={props.onHide}>Cancel</Button>
                <Button  style={{width: '150px',background: '#3E6578'}}>Remove</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveWatchModal;