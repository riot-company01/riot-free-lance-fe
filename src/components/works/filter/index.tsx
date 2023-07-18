import styled from "@emotion/styled";
import { FormControl, Select, MenuItem, Chip } from "@mui/material";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";

type Props = {
  selectedValues: GetSkillsQuery["skills"];
  onSelectedValue: (args: GetSkillsQuery["skills"][number]) => void;
};

export function Filter({ selectedValues, onSelectedValue }: Props) {
  const handleDelete = (value: GetSkillsQuery["skills"][number]) => {
    onSelectedValue(value);
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
        {selectedValues.map((value, idx) => {
          return <Chip key={idx} label={value.name} onDelete={() => handleDelete(value)} />;
        })}
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
