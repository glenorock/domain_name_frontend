import React from 'react'
import { Modal } from '@mui/material';
import { BiSync } from "react-icons/bi";

export default function DomainActions({domain}) {
    const [showRenewModal, setShowRenewModal] = React.useState(false);
    const openRenewModal = (event) => {
        event.preventDefault();
        setShowRenewModal(true);
    }
    const closeRenewModal = (event) => {
        event.preventDefault();
        setShowRenewModal(false);
    }

    return(
        <div>
            <div className='left-align'>
                <div className='btn h-center'  onClick={openRenewModal}>
                    <BiSync/> Renew
                </div>
            </div>
            <Modal open={showRenewModal} onClose={closeRenewModal}>
                <div>
                    Here is the modal
                </div>
            </Modal>
        </div>
    )
}