import React, { useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@mui/material';
const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const lang = typeof window !== 'undefined' ? localStorage.getItem('lang') : 'en'; 
  const [selectedLang, setSelectedLang] = useState(lang);
  const handleChange = (event) => {
    let lng = event?.target?.value;
    setSelectedLang(lng);
    localStorage.setItem('lang', lng);
    i18n.changeLanguage(lng?.code);
  };
  const languages = [
    {
      code: 'en',
      label: 'English'
    },
    {
      code: 'fr',
      label: 'Français'
    },
  ];


  return (
    <div className='lang'>
       <Select
          id="language-select"
          value={selectedLang}
          label={"Language"}
          onChange={handleChange}
          
        >
          {languages.map((lng) => (
            <MenuItem value={lng?.code}>{lng?.label}</MenuItem>
          ))}
        </Select>
    </div>
  );
};

export default LanguageSwitch;
