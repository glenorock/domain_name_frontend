import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import RegistrationForm from '../components/registration_form';
const PayModal = dynamic(() => import('../components/modals/payUnitModal'), { ssr: false });

export default function Test() {
    const { t } = useTranslation();
    const [showModal,setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    return (
      <>
        {/* <button className='btn' onClick={openModal}>
            {t("Pay")}
        </button>
        <PayModal show={showModal} onClose={closeModal}/> */}
        <RegistrationForm name="test"/>
      </>
  )
}