import React from "react";
import LanguageSwitch from "./LanguageSwitch";
import Image from 'next/image'
import Logo from '../../images/logo.png';
import Login from "./Login";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return(
        <div className="site-header">
            <div className="brand-logo">
                <Image
                    src={Logo}
                    alt="logo"
                    width={50}
                    height={50}
                />
            </div>
            <div className="title-header">
                <h1>Domain name management platform</h1>
            </div>
            <div className="lng-switch-cont">
                <LanguageSwitch/>
            </div>
            <div className="lng-switch-cont">
                <Login/>
            </div>
        </div>
    )
};

export default Header;
