import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Modal } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import * as Styles from "./styles";
import { Button as _Button } from "@/components/common/button";
import { KeywordTag } from "@/components/user/edit/common/keyword-tag";
import { MultiSelectItems } from "@/components/user/edit/common/multi-select-items";
import { FRAME_WORKS } from "@/components/user/edit/common/multi-select-items/mock";
import { COLOR } from "@/styles/colors";

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
                <KeywordTag item={item} width={150} />
                {idx === selectedOptions.length - 1 && (
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
              data={FRAME_WORKS}
              name={"FrameWorks"}
              width={176}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          </Styles.DivItemsWrapper>
          <Styles.DivButtonWrapper>
            <_Button
              text="キャンセル"
              width={250}
              borderColor={COLOR.LIGHT_GRAY.code}
              backGround={COLOR.WHITE.code}
              fontColor={COLOR.LIGHT_GRAY.code}
              onClick={handleCancelButtonClick}
            />

            <_Button
              text="保存する"
              width={250}
              backGround={COLOR.BASE_COLOR.code}
              fontColor={COLOR.WHITE.code}
              onClick={handleKeepButtonClick}
            />
          </Styles.DivButtonWrapper>
        </Box>
      </Modal>
    </>
  );
};
