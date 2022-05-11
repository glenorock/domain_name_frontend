import styles from '../styles/layout.module.css'
import Utils from '../../util/utils'
import React from 'react';

import { Button, TextField } from "@mui/material";
import Link from "next/link";
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material'


export default function SignUpPage(){
    const [page,setPage] = React.useState(0);
    const personalInfo = () =>{
        return(
            <div>
                <div
                    className="field_container_mult_col"
                >
                    <div className={Utils.classes(["left_col","two_col"])}>
                        <TextField
                            autoFocus={true}
                            id={"password"}
                            label={"password"}
                            required={true}
                            onChange={onChange()}
                            fullWidth={true}
                            type={"password"}
                        />
                        {Utils.space(10)}
                        <TextField
                            autoFocus={true}
                            id={"password"}
                            label={"password"}
                            required={true}
                            onChange={onChange()}
                            fullWidth={true}
                            type={"password"}
                        />
                        {Utils.space(10)}
                        <TextField
                            autoFocus={true}
                            id={"password"}
                            label={"password"}
                            required={true}
                            onChange={onChange()}
                            fullWidth={true}
                            type={"password"}
                        />
                        {Utils.space(10)}
                        <TextField
                            autoFocus={true}
                            id={"password"}
                            label={"password"}
                            required={true}
                            onChange={onChange()}
                            fullWidth={true}
                            type={"password"}
                        />
                    </div>
                    <div className={Utils.classes(["right_col","two_col"])}>
                    <TextField
                            autoFocus={true}
                            id={"password"}
                            label={"password"}
                            required={true}
                            onChange={onChange()}
                            fullWidth={true}
                            type={"password"}
                        />
                        {Utils.space(10)}
                        <TextField
                            autoFocus={true}
                            id={"password"}
                            label={"password"}
                            required={true}
                            onChange={onChange()}
                            fullWidth={true}
                            type={"password"}
                        />
                        {Utils.space(10)}
                        <TextField
                            autoFocus={true}
                            id={"password"}
                            label={"password"}
                            required={true}
                            onChange={onChange()}
                            fullWidth={true}
                            type={"password"}
                        />
                        {Utils.space(10)}
                        <TextField
                            autoFocus={true}
                            id={"password"}
                            label={"password"}
                            required={true}
                            onChange={onChange()}
                            fullWidth={true}
                            type={"password"}
                        />
                    </div>
                </div>
                {Utils.space(10)}
                <div className="flow_right">
                    <Button
                        color="primary"
                        disabled={checkInputsP()}
                        disableFocusRipple={false}
                        variant="contained"
                        endIcon={<ArrowForwardIos/>}
                        onClick={nextPage()}
                    >
                        Next
                    </Button>
                </div>
                {Utils.space(25)}
            </div>
        )
    }
    
    const connectionInfo = () =>{
        return(
            <div>
                <div
                    className="field_container"
                >
                    <TextField
                        autoFocus={true}
                        id={"login"}
                        label={"email address or username"}
                        placeholder={"user@example.com"}
                        required={true}
                        onChange={onChange()}
                        fullWidth={true}
                    />
                    {Utils.space(20)}
                    <TextField
                        autoFocus={true}
                        id={"password"}
                        label={"password"}
                        required={true}
                        onChange={onChange()}
                        fullWidth={true}
                        type={"password"}
                    />
                    {Utils.space(20)}
                    <TextField
                        autoFocus={true}
                        id={"password"}
                        label={"password"}
                        required={true}
                        onChange={onChange()}
                        fullWidth={true}
                        type={"password"}
                    />
                    
                </div>
                {Utils.space(10)}
                <div className="flow_right">
                    <Button
                        color="primary"
                        disabled={checkInputsC()}
                        disableFocusRipple={false}
                        variant="contained"
                        startIcon={<ArrowBackIos/>}
                        className={"button1"}
                        onClick={previousPage()}
                    >
                        previous
                    </Button>
                    <Button
                        color="primary"
                        disabled={checkInputsC()}
                        disableFocusRipple={false}
                        variant="contained"
                        className={"button1"}
                        endIcon={<ArrowForwardIos/>}
                        onClick={createAccount()}
                    >
                        Validate
                    </Button>
                </div>
            </div>
        )
    }
    
    const nextPage  = () =>{
        console.log("next")
        setLevel(1)
    }
    
    const previousPage = () =>{
        console.log("previous")
        setLevel(0)
    }
    
    const createAccount = () =>{
        console.log("createAccount")
    }
    
    const checkInputsP = () =>{
        return isFinalPage
    }
    
    const checkInputsC = () =>{
        return false
    }
    
    const onChange = () =>{
    
    }
    
    const setLevel = (level) =>{
        let lev
        if(level == 0){
            lev  = false
        }else{
            lev = true
        }
        setPage(lev)
    }
    return(
        <div className={styles.main_layout}>
            <div className={Utils.classes([styles.signup_box,styles.layout_container])}>
                <img
                    src="/images/logo.jpg"
                    alt="logo"
                    className={Utils.classes([styles.signup_layout_logo,styles.layout_logo])}
                />
                {
                    page?(
                        personalInfo()
                    ):(
                        connectionInfo()
                    )
                }
            </div>
        </div>
    )
}

