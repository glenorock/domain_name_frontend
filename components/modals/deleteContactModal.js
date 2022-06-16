import React from 'react';
import { useTranslation } from 'react-i18next';

export default function DeleteHostModal({onSubmit, onClose}) {
    const { t } = useTranslation();
    return(
        <div className='modal box'>
            <div className='modal-body'>
                 Delete this contact?
            </div>
            <hr/>
            <div className='action'>
                <div className='btn' onClick={onSubmit}>
                    Delete
                </div>
                <div className='btn btn-danger' onClick={onClose}>
                    Cancel
                </div>
            </div>
        </div>
    )
}