import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { LANGUAGE_LIBRARY } from "@/components/user/edit/skill/language-library/const";
import AddIcon from "@mui/icons-material/Add";
import * as Styles from "./styles";
import { FRAME_WORK } from "@/components/user/edit/skill/frame-work/const";

export const FrameWork = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleButtonClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleCancelButtonClick = () => {
    handleClose();
  };

  const handleKeepButtonClick = () => {
    handleClose();
  };

  return (
    <>
      {selectedOptions.length !== 0 ? (
        <Styles.DivSelectedItems>
          {selectedOptions.map((item, idx) => {
            return (
              <>
                <Typography
                  key={idx}
                  style={{
                    height: "48px",
                    width: "150px",
                    margin: "4px",
                    textTransform: "none",
                    background: "#2c345c",
                    borderRadius: "4px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item}
                </Typography>
                {idx === selectedOptions.length - 1 && (
                  <Button onClick={handleOpen}>
                    <AddIcon style={{ fontSize: 40, color: "#a1a1a1" }} />
                  </Button>
                )}
              </>
            );
          })}
        </Styles.DivSelectedItems>
      ) : (
        <>
          <Button onClick={handleOpen}>
            <AddIcon style={{ fontSize: 40, color: "#a1a1a1" }} />
          </Button>
        </>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Styles.ModalStyle}>
          <Styles.HeadContentTitle>フレームワーク</Styles.HeadContentTitle>
          <Styles.DivItemsWrapper>
            {FRAME_WORK.map((item, idx) => {
              if (selectedOptions.includes(item)) {
                return (
                  <Button
                    variant="contained"
                    key={idx}
                    name="selectedFrameWorkButton"
                    onClick={() => handleButtonClick(item)}
                    style={{
                      height: "48px",
                      width: "176px",
                      margin: "4px",
                      textTransform: "none",
                      background: "#2c345c",
                    }}
                  >
                    {item}
                  </Button>
                );
              } else {
                return (
                  <Button
                    variant="outlined"
                    key={idx}
                    name="selectFrameWorkButtonButton"
                    onClick={() => handleButtonClick(item)}
                    style={{
                      height: "48px",
                      width: "176px",
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
          </Styles.DivItemsWrapper>
          <Styles.DivButtonWrapper>
            <Button
              variant="outlined"
              name="cancelButton"
              onClick={() => handleCancelButtonClick()}
              style={{ height: "40px", width: "250px", border: "1px solid #a1a1a1", color: "#a1a1a1" }}
            >
              キャンセル
            </Button>

            <Button
              variant="contained"
              name="keepButton"
              onClick={() => handleKeepButtonClick()}
              style={{ height: "40px", width: "250px", background: "#2c345c" }}
            >
              保存する
            </Button>
          </Styles.DivButtonWrapper>
        </Box>
      </Modal>
    </>
  );
};
