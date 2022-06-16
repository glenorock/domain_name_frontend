import React from 'react'
import { Modal } from '@mui/material';
import { BiSync, BiEditAlt } from "react-icons/bi";
import RenewDomainModal from '../modals/renewDomainModal';
import EditDomainModal from '../modals/editDomainModal';
import { useTranslation } from 'react-i18next';

export default function DomainActions({domain}) {
    const { t } = useTranslation();

    const [showRenewModal, setShowRenewModal] = React.useState(false);
    const [showEditModal, setShowEditModal] = React.useState(false);
    
    const openRenewModal = (event) => {
        event.preventDefault();
        setShowRenewModal(true);
    }
    const closeRenewModal = (event) => {
        event.preventDefault();
        setShowRenewModal(false);
    }

    const openEditModal = (event) => {
        event.preventDefault();
        setShowEditModal(true);
    }

    const closeEditModal = (event) => {
        event.preventDefault();
        setShowEditModal(false);
    }



    return(
        <div>
            <div className='left-align'>
            <div className='btn h-center'  onClick={openRenewModal}>
                    <BiSync/> Renew
                </div>
                <div className='btn h-center'  onClick={openEditModal}>
                    <BiEditAlt/> Modify
                </div> 
            </div>
            <Modal open={showRenewModal} onClose={closeRenewModal}>
                <RenewDomainModal domain={domain} onClose={closeRenewModal}/>
            </Modal>
            <Modal open={showEditModal} onClose={closeEditModal}>
                <div>
                    <EditDomainModal domain={domain} onClose={closeEditModal}/>
                </div>
            </Modal>
        </div>
    )
}