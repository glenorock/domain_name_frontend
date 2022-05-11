import styles from '../styles/layout.module.css'
import Utils from '../../util/utils'
import { Button,TextField } from '@mui/material'
import Link from "next/link";

export default function LogInPage(){
    return(
        <div className={styles.main_layout}>
            <div className={Utils.classes([styles.login_box,styles.layout_container])}>
                <img
                    src="/images/logo.jpg"
                    alt="logo"
                    className={Utils.classes([styles.login_layout_logo,styles.layout_logo])}
                />
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
            </div>
        </div>
    )
}


const checkInputs = () =>{
    
    return false
}

const onChange = () =>{

}