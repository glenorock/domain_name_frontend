import React from 'react';
import { Modal } from 'react-bootstrap';

import RegistrationForm from '../registration_form';

export default function PaymentModal({show, onClose, name}){
    return(
        <Modal
            show={show}
            onHide={onClose}
            size="sm"
            centered
            animation={false}
            className="modal"
        >
            <RegistrationForm name={name} close={onClose}/>
        </Modal>
    )
}