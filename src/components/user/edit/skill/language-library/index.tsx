import { Button } from "@mui/material";
import { useState } from "react";
import { LANGUAGE_LIBRARY } from "@/components/user/edit/skill/language-library/const";

export const LanguageLibrary = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleButtonClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      {LANGUAGE_LIBRARY.map((item, idx) => {
        if (selectedOptions.includes(item)) {
          return (
            <Button
              variant="contained"
              key={idx}
              name="selectedLanguageButton"
              onClick={() => handleButtonClick(item)}
              style={{ height: "48px", width: "150px", margin: "4px", textTransform: "none", background: "#2c345c" }}
            >
              {item}
            </Button>
          );
        } else {
          return (
            <Button
              variant="outlined"
              key={idx}
              name="selectProfessionaExperienceButton"
              onClick={() => handleButtonClick(item)}
              style={{
                height: "48px",
                width: "150px",
                margin: "4px",
                border: "1px solid #a1a1a1",
                color: "#a1a1a1",
                textTransform: "none",
              }}
            >
              {item}
            </Button>
          );
        }
      })}
    </>
  );
};
