import { Button } from "@mui/material";
import React from "react";
import { BiLogIn } from "react-icons/bi";
import {Modal} from "@mui/material";
import LoginModal from "../modals/logInModal";

export default function Login() {
    const [showModal, setShowModal] = React.useState(false);
    
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
                <BiLogIn/> Login
            </Button>
            <Modal open={showModal} onClose={closeModal}>
                <LoginModal onClose={closeModal}/>
            </Modal>
        </div>
    )
}