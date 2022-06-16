import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const languages = [
    {
      code: 'en',
      label: 'English',
      icon:''
    },
    {
      code: 'fr',
      label: 'Français',
      icon: '',
    },
  ];

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en';
    const findLang = languages.find((lng) => lng.code === lang);
    setSelectedLang(findLang);
  }, []);

  const setLang = (lng) => {
    setSelectedLang(lng);
    localStorage.setItem('lang', lng?.code);
    localStorage.setItem('langLabel', lng?.label);
    i18n.changeLanguage(lng?.code);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="btn"
      >
        <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${(selectedLang?.code.toLowerCase() === "en")?"gb":selectedLang?.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${(selectedLang?.code.toLowerCase() === "en")?"gb":selectedLang?.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {selectedLang?.label}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {languages.map((lng) => (
          <MenuItem onClick={() => {
            handleClose(),
            setLang(lng)
          }}>
              <div className='lang-option'>
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${(lng?.code.toLowerCase() === "en")?"gb":lng?.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${(lng?.code.toLowerCase() === "en")?"gb":lng?.code.toLowerCase()}.png 2x`}
                  alt=""
                />                 
                <div>
                  {lng?.label}
                </div>
              </div>
          </MenuItem>  
        ))}
      </Menu>
    </div>
  );
};

export default LanguageSwitch;
