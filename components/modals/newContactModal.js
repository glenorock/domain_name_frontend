import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function newContactModal({show,onClose,setter,checkSetter}){

    return(
        <Modal
            show={show}
            onHide={onClose}
            centered
            animation={false}
            className="modal box"
        >
            <Modal.Body>
                <div className='reg'>
                    <div className="box form">

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>
    )
}