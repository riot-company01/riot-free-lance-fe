import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Modal, Typography } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import * as Styles from "./styles";
import { MultiSelectItems } from "@/components/user/edit/common/multi-select-items";
import { FRAME_WORKS } from "@/components/user/edit/common/multi-select-items/mock";

type FrameWorkProps = { selectedOptions: string[]; setSelectedOptions: Dispatch<SetStateAction<string[]>> };
export const FrameWork = (props: FrameWorkProps) => {
  const { selectedOptions, setSelectedOptions } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

      <Modal open={open} onClose={handleClose}>
        <Box sx={Styles.ModalStyle}>
          <Styles.HeadContentTitle>フレームワーク</Styles.HeadContentTitle>
          <Styles.DivItemsWrapper>
            <MultiSelectItems
              data={FRAME_WORKS}
              name={"FrameWorks"}
              selectedStyle={{
                height: "48px",
                width: "176px",
                margin: "4px",
                textTransform: "none",
                background: "#2c345c",
              }}
              notSelectedStyle={{
                height: "48px",
                width: "176px",
                margin: "4px",
                border: "1px solid #a1a1a1",
                color: "#a1a1a1",
                textTransform: "none",
              }}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
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
