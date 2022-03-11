import LogInLayout from "../components/login.layout";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import Utils from "../util/utils";
export default function LogIn(){
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
                
            </div>
            {Utils.space(25)}
            <Button
                color="primary"
                disabled={checkInputs()}
                disableFocusRipple={false}
                fullWidth={true}
                variant="contained"
            >
                LogIn
            </Button>
            <div className="align_right">
                <Link
                    href="/signup"
                >
                    create an account
                </Link>
            </div>
        </LogInLayout>
    )
}

const checkInputs = () =>{
    
    return false
}

const onChange = () =>{

}