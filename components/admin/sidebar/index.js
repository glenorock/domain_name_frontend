import React from 'react';
import { useTranslation } from 'react-i18next';
import {BiHomeSmile, BiPaperPlane, BiPlusCircle, BiServer, BiUser} from 'react-icons/bi';
import SidebarMenu from './sideBarMenu';
import Image from 'next/image'
import Logo from '../../../images/logo.png';
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
            <SidebarMenu href="/admin/requests">
              <div className='icon-btn'>
                <BiHomeSmile />
                <span>{t('Requests')}</span>
              </div>
            </SidebarMenu>
            <SidebarMenu href="/admin/users">
              <div className='icon-btn'>
                <BiHomeSmile />
                <span>{t('Users')}</span>
              </div>
            </SidebarMenu>
            {/* <SidebarMenu href="/admin/contacts">
              <div className='icon-btn'>
                <BiHomeSmile />
                <span>{t('Contacts')}</span>
              </div>
            </SidebarMenu>
            <SidebarMenu href="/admin/settings">
              <div className='icon-btn'>
                <BiHomeSmile />
                <span>{t('Settings')}</span>
              </div>
            </SidebarMenu> */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
