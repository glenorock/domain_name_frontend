import React from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return(
        <div className="site-footer">
            Footer
        </div>
    );
};

export default Footer;
