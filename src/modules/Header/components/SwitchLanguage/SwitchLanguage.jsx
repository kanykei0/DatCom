import classes from "./SwitchLanguage.module.scss";
import i18n from "utils/I18next/I18n";
import Select from "react-select";
import { EarthIcon } from "assets/index";
import { useEffect, useState } from "react";

export const SwitchLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const options = [
    { value: "ru", label: "Русский" },
    { value: "en", label: "English" },
  ];

  const handleLanguageChange = (selectedOption) => {
    if (selectedOption) {
      const selectedLanguage = selectedOption.value;
      i18n.changeLanguage(selectedLanguage);
      setSelectedLanguage(selectedLanguage);
    }
  };

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className={classes.text}>
      <EarthIcon />
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "none",
            background: "none",
            color: "var(--color-black)",
            flexGrow: "1",
            cursor: "pointer",
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            cursor: "pointer",
          }),
        }}
        isSearchable={false}
        options={options}
        value={options.find((option) => option.value === i18n.language)}
        onChange={handleLanguageChange}
        placeholder={selectedLanguage}
      />
    </div>
  );
};
