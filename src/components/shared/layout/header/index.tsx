import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import { HeaderLd } from "@/components/shared/layout/header/lg";
import { HeaderMd } from "@/components/shared/layout/header/md";
import { BREAK_POINT, COMMON_Z_INDEX, LG_BREAK_POINT, MD_BREAK_POINT } from "@/constants";

export const LayoutHeader = () => {
  return (
    <Wrapper>
      <Box
        component="div"
        sx={{
          display: { ...LG_BREAK_POINT, width: "100%" },
        }}
      >
        <HeaderLd />
      </Box>
      <Box
        component="div"
        sx={{
          display: { ...MD_BREAK_POINT, width: "100%" },
        }}
      >
        <HeaderMd />
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  position: sticky;
  background-color: ${blue[500]};
  color: white;
  font-size: 14px;
  top: 0;
  z-index: ${COMMON_Z_INDEX.HEADER};
  justify-content: space-around;
  align-items: center;
  height: 45px;
  @media (min-width: ${BREAK_POINT.sm}px) {
    height: 49px;
  }
`;
