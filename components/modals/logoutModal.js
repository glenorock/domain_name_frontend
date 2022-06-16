import React from "react";
import Router from 'next/router';
import { useTranslation } from 'react-i18next';
export default function LogOutModal({onClose}) {
    const submit = async (e) => {
        e.preventDefault();
        Router.replace(`/`);
        onClose(e);
    }
    const { t } = useTranslation();

    return(
        <div className='modal box'>
            <div className='modal-body'>
                Disconnect ?
            </div>
            <hr/>
            <div className='action'>
                <div className='btn' onClick={submit}>
                    {t("Yes")}
                </div>
                <div className='btn btn-danger' onClick={onClose}>
                    {t("No")}
                </div>
            </div>
        </div>
    )
}