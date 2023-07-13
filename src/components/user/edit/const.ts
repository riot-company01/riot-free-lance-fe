export const myStyle = {
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#2C345C", // ホバー時のボーダー色(アウトライン)
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2C345C", // フォーカス時のボーダー色(アウトライン)
    },
  },
};

// export const selectMyStyle = {
//   "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
//     borderColor: "red", // フォーカスされたときのボーダーの色を指定
//   },
// };
export const selectMyStyle = {
  // 他のスタイル...
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#2C345C", // フォーカス時のボーダー色を指定
  },
};
