import AddIcon from "@mui/icons-material/Add";
import { Box, Modal, Button } from "@mui/material";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import * as Styles from "./styles";
import { KeywordTag } from "@/components/user/edit/common/keyword-tag";
import { MultiSelectItems } from "@/components/user/edit/common/multi-select-items";
import { DESIRED_SKILL } from "@/components/user/edit/desired-condition/desired-skill/const";
import { COLOR } from "@/styles/colors";

type DesiredSkillsProps = {
  selectedDesiredSkills: string[];
  setSelectedDesiredSkills: Dispatch<SetStateAction<string[] | null | undefined>>;
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
      {selectedDesiredSkills?.length !== 0 ? (
        <Styles.DivSelectedItems>
          {selectedDesiredSkills?.map((item, idx) => {
            return (
              <>
                <KeywordTag item={item} width={150} />
                {idx === selectedDesiredSkills.length - 1 && (
                  <Button onClick={handleOpen}>
                    <AddIcon sx={{ fontSize: 40, color: COLOR.LIGHT_GRAY.code }} />
                  </Button>
                )}
              </>
            );
          })}
        </Styles.DivSelectedItems>
      ) : (
        <>
          <Button onClick={handleOpen}>
            <AddIcon sx={{ fontSize: 40, color: COLOR.LIGHT_GRAY.code }} />
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
              width={176}
              selectedOptions={selectedDesiredSkills || []}
              setSelectedOptions={setSelectedDesiredSkills}
            />
          </Styles.DivItemsWrapper>
          <Styles.DivButtonWrapper>
            <Button variant="outlined" onClick={handleCancelButtonClick}>
              キャンセル
            </Button>

            <Button variant="contained" onClick={handleKeepButtonClick}>
              保存する
            </Button>
          </Styles.DivButtonWrapper>
        </Box>
      </Modal>
    </>
  );
};
