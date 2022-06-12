import LanguageSwitch from '../header/LanguageSwitch';
import LogOut from './logout';

const Header = () => {
    return(
        <div className='admin-header'>
            <div className='title'>
                Domain name
            </div>
            <div className='action_cont'>
                <LanguageSwitch/>
                <LogOut/>
            </div>
        </div>
    )
}

export default Header;