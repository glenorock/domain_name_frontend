import { Button } from "@mui/material";
import React from "react";
import { BiLogIn } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import Router from 'next/router';

export default function Login() {
    const { t } = useTranslation();
    const submit = async (e) => {
        e.preventDefault();
        Router.replace(`/login`);
    }

    return(
        <div>
            <Button
                className="btn"
                onClick={submit}
            >
                <BiLogIn/> {t('Login')}
            </Button>
        </div>
    )
}