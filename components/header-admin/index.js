import LanguageSwitch from '../header/LanguageSwitch';
import LogOut from './logout';
import { useTranslation } from 'react-i18next';

const Header = ({name}) => {
    const { t } = useTranslation();

    return(
        <div className='admin-header'>
            <div className='title'>
                {name}
            </div>
            <div className='action_cont'>
                <LanguageSwitch/>
                <LogOut/>
            </div>
        </div>
    )
}

export default Header;