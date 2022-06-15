import React from 'react'
import { Modal } from '@mui/material';
import { BiPlusCircle } from "react-icons/bi";
import AddHostModal from '../modals/addHostModal';
export default function HostActions({next}) {
    const [showAddModal, setShowAddModal] = React.useState(false);
    const openModal = (event) => {
        setShowAddModal(true);
    }
    const closeModal = (event) => {
        setShowAddModal(false);
    }

    return(
        <div>
            <div className='left-align'>
                <div className='btn h-center'  onClick={openModal}>
                    <BiPlusCircle/>
                </div>
            </div>
            <Modal open={showAddModal} onClose={closeModal}>
                <AddHostModal onClose={closeModal}/>
            </Modal>
        </div>
    )

}