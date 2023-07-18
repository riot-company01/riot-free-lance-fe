import styled from "@emotion/styled";
import { FormControl, Select, MenuItem, Chip } from "@mui/material";
import { useRouter } from "next/router";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";

type Props = {
  defaultFilters?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  worksLength?: number;
};

export function Filter({ defaultFilters, selectedSkillIds, worksLength }: Props) {
  const { push } = useRouter();
  return (
    <>
      <Wrapper>
        <div>案件: {worksLength?.toLocaleString()} 件</div>
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
        {selectedSkillIds.map((value) => {
          const skillIds = selectedSkillIds.filter((i) => i !== value);
          return (
            <Chip
              key={value}
              label={defaultFilters?.find((i) => i.id === Number(value))?.name}
              onDelete={() => {
                push({
                  query:
                    skillIds.length !== 0
                      ? {
                          [`skill-ids`]: `${skillIds.join()}`,
                        }
                      : {},
                });
              }}
            />
          );
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
