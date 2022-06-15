import React from 'react';

export default function DeleteHostModal({onSubmit, onClose}) {
    return(
        <div className='modal box'>
            <div className='modal-body'>
                 Delete this address?
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