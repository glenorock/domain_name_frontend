import React from 'react';
import { useTranslation } from 'react-i18next';
import {BiHomeSmile, BiPaperPlane, BiPlusCircle, BiServer, BiUser} from 'react-icons/bi';
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
              <div className='icon-btn'>
                <BiHomeSmile />
                <span>{t('Domain')}</span>
              </div>
            </SidebarMenu>
            <SidebarMenu href="/contact">
              <div className='icon-btn'>
                <BiUser />
                <span>{t('Contacts')}</span>
              </div>
            </SidebarMenu>
            <SidebarMenu href="/host">
              <div className='icon-btn'>
                <BiServer />
                <span>{t('Name severs')}</span>
              </div>
            </SidebarMenu>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
