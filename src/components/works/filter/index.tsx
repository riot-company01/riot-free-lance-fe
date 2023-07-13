import styled from "@emotion/styled";
import { FormControl, Select, MenuItem, Chip } from "@mui/material";

export function Filter() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
      <Wrapper>
        <div>案件:10,000件</div>
        <FormControl
          size="small"
          sx={{
            width: 220,
          }}
        >
          <Select
            value={10}
            onChange={() => {
              //
            }}
          >
            <MenuItem value={10}>高単価順</MenuItem>
            <MenuItem value={20}>新着順</MenuItem>
            <MenuItem value={30}>おすすめ順</MenuItem>
          </Select>
        </FormControl>
      </Wrapper>
      <Container>
        <Chip label="Clickable Deletable" onClick={handleClick} onDelete={handleDelete} />
        <Chip label="Clickable Deletable" variant="outlined" onClick={handleClick} onDelete={handleDelete} />
      </Container>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  padding-top: 16px;
`;
