import LogOutController from "../../lib/Logout";
import {BiLogOut} from 'react-icons/bi'
const LogOutButt = () => {
    return(
        <div className=" btn v-center" onClick={LogOutController}>
            <BiLogOut/>
            <div>
                LogOut
            </div>
        </div>
    )
}

export default LogOutButt;