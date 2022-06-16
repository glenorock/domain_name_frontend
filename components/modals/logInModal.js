import React from "react";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import Router from 'next/router';
import { useTranslation } from 'react-i18next';

export default function LoginModal({onClose}) {
    const [state, setState] = React.useState({
        domain:"",
        password:""
    })
    const { t } = useTranslation();

    const onChange = (key) => (event) => {
        setState({
            ...state,
            [key]: event.target.value
        })
    }

    const submit = async (e) => {
        e.preventDefault();
        Router.replace(`/domain`);
        onClose(e);
    }

    return(
        <div className='modal box'>
            <div className='modal-body'>
                <Stack spacing={3} direction="column">
                    <TextField
                        id="domain"
                        value={state.domain}
                        onChange={onChange("domain")}
                        fullWidth
                        required
                        label="Domain name"
                    />
                    <TextField
                        id="password"
                        value={state.password}
                        fullWidth
                        onChange={onChange("password")}
                        required
                        label="Password"
                        type="password"
                    />
                </Stack>
            </div>
            <hr/>
            <div className='action'>
                <div className='btn' onClick={submit}>
                    Login
                </div>
                <div className='btn btn-danger' onClick={onClose}>
                    Cancel
                </div>
            </div>
        </div>
    )
}