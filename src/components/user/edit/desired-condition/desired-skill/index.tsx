import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import * as Styles from "./styles";
import { MultiSelectItems } from "@/components/user/edit/common/multi-select-items";
import { DESIRED_SKILL } from "@/components/user/edit/desired-condition/desired-skill/const";

type DesiredSkillsProps = {
  selectedDesiredSkills: string[];
  setSelectedDesiredSkills: Dispatch<SetStateAction<string[]>>;
};

export const DesiredSkill = (props: DesiredSkillsProps) => {
  const { selectedDesiredSkills, setSelectedDesiredSkills } = props;
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
      {selectedDesiredSkills.length !== 0 ? (
        <Styles.DivSelectedItems>
          {selectedDesiredSkills.map((item, idx) => {
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
                {idx === selectedDesiredSkills.length - 1 && (
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
              data={DESIRED_SKILL}
              name={"DesiredSkills"}
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
              selectedOptions={selectedDesiredSkills}
              setSelectedOptions={setSelectedDesiredSkills}
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
