import React , {useEffect}  from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


export default function PayUnitModal({show, onClose, request}){
    const { t } = useTranslation();
    const validate = () => {
        onClose()
    }
    const reject = () => {
        onClose()
    }
    return(
        <Modal
            show={show}
            onHide={onClose}
            size="sm"
            centered
            animation={true}
            className="modal box"
        >
            <Modal.Header>
                <Modal.Title className="title">
                    {request?.domain}
                </Modal.Title>
                <hr/>
            </Modal.Header>
            <Modal.Body>
                {JSON.stringify(request)}
            </Modal.Body>
            <Modal.Footer>
                <hr/>
                <div className='action'>
                    <button className='btn' onClick={validate}>
                        {("Validate")}
                    </button>
                    <button className='btn  btn-danger' onClick={reject}>
                        {("Reject")}
                    </button>
                    
                    <button className='btn btn-warning' onClick={onClose}>
                        {("Close")}
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}