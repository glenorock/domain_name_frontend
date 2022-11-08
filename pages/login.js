import React, {useState} from 'react';
import Image from 'next/image';
import Logo from '../images/logo.png'
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import Router from 'next/router';
import { useTranslation } from 'react-i18next';
import * as session from '../lib/session';
import * as cookies from 'cookies-next';

export default function Login(){
    const [state,setState]  = useState({
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
        let res = await session.login(state.domain,state.password)
        if (res.status === 200 && res.data.auth === true){
            cookies.setCookie("token",res.data.token)
            cookies.setCookie("user",res.data.userId)
            if (res.data.isAdmin){
                Router.replace(`/admin/requests`);
            }else{
                Router.replace(`/domain`);
            }
        }
    }
    const cancel = async (e) => {
        e.preventDefault();
        Router.replace(`/`);
    }
    return(
        <div className='login'>
            <div className='body'>
                <div className='logo-cont'>
                    <div className="logo">
                        <Image
                            src={Logo}
                            alt="logo"
                            layout="intrinsic"
                        />
                    </div>
                </div>
                <div className='form'>
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
                        {t("Login")}
                    </div>
                    <div className='btn btn-danger' onClick={cancel}>
                        {t("Cancel")}
                    </div>
                </div>
            </div>
        </div>
    )
}