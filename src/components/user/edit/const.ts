import { COLOR } from "@/styles/colors";
export const myStyle = {
  "& .MuiOutlinedInput-root": {
    width: "458px",
    "&:hover fieldset": {
      borderColor: COLOR.BASE_COLOR.code,
    },
    "&.Mui-focused fieldset": {
      borderColor: COLOR.BASE_COLOR.code,
    },
  },
};

export const selectBigStyle = {
  "& .MuiInputBase-root": {
    width: "380px",
    marginRight: "32px",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: COLOR.BASE_COLOR.code,
  },
};

export const selectSmallStyle = {
  "& .MuiInputBase-root": {
    width: "200px",
    marginRight: "32px",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    marginRight: "32px",
    borderColor: COLOR.BASE_COLOR.code,
  },
};
