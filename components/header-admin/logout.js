import React from 'react';
import { Button } from "@mui/material";
import {BiLogOut} from 'react-icons/bi';
import LogOutModal from "../modals/logoutModal";
import Modal from '@mui/material/Modal';
import { useTranslation } from 'react-i18next';
const LogOutButt = () => {
    const [showModal, setShowModal] = React.useState(false);
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);
    const { t } = useTranslation();

    return(
        <div>
            <Button className=" btn" onClick={openModal}>
                <BiLogOut/>
                LogOut
            </Button>
            <Modal open={showModal} onClose={closeModal} >
                <LogOutModal onClose={closeModal}/>
            </Modal>
        </div>
    )
}

export default LogOutButt;