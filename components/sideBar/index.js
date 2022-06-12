import React from 'react';
import { useTranslation } from 'react-i18next';
import {BiHomeSmile, BiPaperPlane, BiPlusCircle} from 'react-icons/bi';
import SidebarMenu from './sideBarMenu';
import Image from 'next/image'
import Logo from '../../images/logo.png';
const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="sidebar">
        <div className="brand-logo">
            <div className='logo'>
                <Image
                    src={Logo}
                    alt="logo"
                    layout="intrinsic"
                />
            </div>
        </div>
        <ul>
            <SidebarMenu href="/domain">
              <BiHomeSmile />
              <span>{t('Domain')}</span>
            </SidebarMenu>
            <SidebarMenu href="/contact">
              <BiPlusCircle />
              <span>{t('Contact')}</span>
            </SidebarMenu>
            <SidebarMenu href="/host">
              <BiPaperPlane />
              <span>{t('Name sever')}</span>
            </SidebarMenu>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
