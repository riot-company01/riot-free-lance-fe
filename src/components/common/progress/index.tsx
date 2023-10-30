import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";

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
  transform: translate(-50%, 0%);
`;
