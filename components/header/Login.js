import { Button } from "@mui/material";
import React from "react";
import { BiLogIn } from "react-icons/bi";
import {Modal} from "@mui/material";
import LoginModal from "../modals/logInModal";
import { useTranslation } from 'react-i18next';

export default function Login() {
    const [showModal, setShowModal] = React.useState(false);
    const { t } = useTranslation();
    const openModal = (event) => {
        event.preventDefault();
        setShowModal(true);
    }
    
    const closeModal = () => {
        setShowModal(false);
    }

    return(
        <div>
            <Button
                className="btn"
                onClick={openModal}
            >
                <BiLogIn/> {t('Login')}
            </Button>
            <Modal open={showModal} onClose={closeModal}>
                <LoginModal onClose={closeModal}/>
            </Modal>
        </div>
    )
}