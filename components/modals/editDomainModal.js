import React from "react";
import { TextField } from "@mui/material";
import { BiX,BiPlus } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
export default function EditDomainModal({domain, onClose}) {
    const [ns,setNs] = React.useState([...domain.ns]);
    const [tmp,setTmp] = React.useState('');
    
    const removeNs = (index) => (e) => {
        e.preventDefault();
        setNs(ns.filter((_,i) => i !== index));
    }
    const addNs = (e) => {
        e.preventDefault();
        setNs([...ns, tmp]);
        setTmp('');
    }

    const submit = (e) => {
        e.preventDefault();
        alert('Domain updated');
        onClose(e);
    }
    const { t } = useTranslation();

    return(
        <div className='modal box'>
            <div className='modal-body'>
                <div className="action-field">
                    <div>
                        <TextField
                            id="name-server"
                            value={tmp}
                            onChange={(event) => {
                                setTmp(event.target.value);
                            }}
                            fullWidth
                            required
                            label="Name server"
                        />
                    </div>
                    <div>
                        <div className='action-btn' onClick={addNs}>
                            <BiPlus />
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                    {
                        ns.map((row,index) => (
                            <div className="list-row">
                                <div>
                                    {row}
                                </div>
                                <div>
                                    <div className='action-btn' onClick={removeNs(index)}>
                                        <BiX/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr/>
            <div className='action'>
                <div className='btn' onClick={submit}>
                    {t("Save")}
                </div>
                <div className='btn btn-danger' onClick={onClose}>
                    {t("Cancel")}
                </div>
            </div>
        </div>
    )
}