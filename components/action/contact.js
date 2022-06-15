import React from 'react'
import { Modal } from '@mui/material';
import { BiPlusCircle } from "react-icons/bi";
import AddContactModal from '../modals/addContactModal';
export default function ContactActions() {
    const [showAddModal, setShowAddModal] = React.useState(false);
    const openModal = (event) => {
        event.preventDefault();
        setShowAddModal(true);
    }
    const closeModal = (event) => {
        event.preventDefault();
        setShowAddModal(false);
    }

    return(
        <div>
            <div className='left-align'>
                <div className='btn h-center'  onClick={openModal}>
                    <BiPlusCircle/> Add
                </div>
            </div>
            <Modal open={showAddModal} onClose={closeModal}>
                <AddContactModal onClose={closeModal}/>
            </Modal>
        </div>
    )
}