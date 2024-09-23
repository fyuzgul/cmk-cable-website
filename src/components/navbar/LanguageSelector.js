import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";
import SelectLanguageMenuItemButton from "../buttons/SelectLanguageMenuItemButton";
import LanguageSelectButton from "../buttons/LanguageSelectButton";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "tr", name: "Türkçe" },
    { code: "gb", name: "İngilizce" },
    { code: "fr", name: "Fransızca" },
    { code: "sa", name: "Arapça" },
    { code: "ru", name: "Rusça" },
    { code: "pt", name: "Portekizce" },
    { code: "es", name: "İspanyolca" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = async (language) => {
    await i18n.changeLanguage(language.code);
    setIsOpen(false);
  };

  const selectedLanguage = languages.find(
    (lang) => lang.code === i18n.language
  ) || { code: "gb", name: "Language" };

  return (
    <div className="relative inline-block text-left">
      <LanguageSelectButton
        onClick={toggleDropdown}
        selectedLanguage={selectedLanguage}
      />

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {languages.map((language) => (
              <SelectLanguageMenuItemButton
                onClick={() => handleLanguageChange(language)}
                language={language}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
