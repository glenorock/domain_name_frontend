import React from "react";
import Router from 'next/router';

export default function LogOutModal({onClose}) {
    const submit = async (e) => {
        e.preventDefault();
        Router.replace(`/`);
        onClose(e);
    }

    return(
        <div className='modal box'>
            <div className='modal-body'>
                Disconnect ?
            </div>
            <hr/>
            <div className='action'>
                <div className='btn' onClick={submit}>
                    Yes
                </div>
                <div className='btn btn-danger' onClick={onClose}>
                    No
                </div>
            </div>
        </div>
    )
}