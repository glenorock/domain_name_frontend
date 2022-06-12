import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState();

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
      <Dropdown>
        <Dropdown.Toggle className=" btn" variant="link">
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${(selectedLang?.code.toLowerCase() === "en")?"gb":selectedLang?.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${(selectedLang?.code.toLowerCase() === "en")?"gb":selectedLang?.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {selectedLang?.label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {languages.map((lng) => (
            <Dropdown.Item key={lng?.code} onClick={() => setLang(lng)}>
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${(lng?.code.toLowerCase() === "en")?"gb":lng?.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${(lng?.code.toLowerCase() === "en")?"gb":lng?.code.toLowerCase()}.png 2x`}
                alt=""
              />
              <span>    </span>                 
              {lng?.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageSwitch;
