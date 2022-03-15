import SignUpLayout from "../components/signup.layout"
import LogInLayout from "../components/login.layout";

import { Button, TextField } from "@mui/material";
import Link from "next/link";
import Utils from "../util/utils";
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material'

export default function SignUp(){
    return(
        checkLevel()?(
            personalInfo()
        ):(
            connectionInfo()
        )
    )
}

const personalInfo = () =>{
    return(
        <SignUpLayout>
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
        </SignUpLayout>
    )
}

const connectionInfo = () =>{
    return(
        <LogInLayout>
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
        </LogInLayout>
    )
}

const nextPage  = () =>{
    console.log("next")
}

const previousPage = () =>{
    console.log("previous")
}

const createAccount = () =>{
    console.log("createAccount")
}

const checkInputsP = () =>{
    
    return false
}

const checkInputsC = () =>{
    
    return false
}

const onChange = () =>{

}

const checkLevel = () =>{
    return true
}