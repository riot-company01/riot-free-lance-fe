import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";
import { COMMON_Z_INDEX } from "@/constants";

export function CircularIndeterminate() {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: ${COMMON_Z_INDEX.LOADING};
  transform: translate(-50%, 0%);
`;
