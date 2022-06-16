import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

function SidebarMenu({ children, href }) {
  const { t } = useTranslation();
  const router = useRouter();
  
  const active = router.asPath === href;

  return (
    <li className={active ? 'active' : 'inactive'}>
      <Link href={href}>
        <a>
          {children}
        </a>
      </Link>
    </li>
  );
}

export default SidebarMenu;
