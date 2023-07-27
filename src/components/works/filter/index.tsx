import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, Select, MenuItem, Chip, Stack } from "@mui/material";
import { useRouter } from "next/router";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";
import { removeObjectKey } from "@/util/remove-object-key";

type Props = {
  defaultFilters?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  worksLength?: number;
};

const list = [
  {
    value: "price",
    displayName: "高単価順",
  },
  {
    value: "new",
    displayName: "新着順",
  },
];

export function Filter({ defaultFilters, selectedSkillIds, worksLength }: Props) {
  const router = useRouter();
  const inputKeyword = (router.query["keyword"] as string) || "";
  const sort = (router.query["sort"] as string) || "new";

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
          <Select value={sort}>
            {list.map((i) => {
              return (
                <MenuItem
                  key={i.value}
                  value={i.value}
                  onClick={() => {
                    router.push({
                      query: {
                        ...router.query,
                        sort: i.value,
                      },
                    });
                  }}
                >
                  {i.displayName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Wrapper>

      <Container>
        <Stack direction="row" spacing={1}>
          {selectedSkillIds.map((value) => {
            const skillIds = selectedSkillIds.filter((i) => i !== value);
            return (
              <Chip
                key={value}
                label={defaultFilters?.find((i) => i.id === Number(value))?.name}
                onDelete={() => {
                  router.push({
                    query:
                      skillIds.length !== 0
                        ? {
                            ...router.query,
                            [`skill-ids`]: `${skillIds.join()}`,
                          }
                        : {
                            ...removeObjectKey(router.query, "skill-ids"),
                          },
                  });
                }}
              />
            );
          })}
          {inputKeyword && (
            <Chip
              icon={<SearchIcon fontSize="small" />}
              key={inputKeyword}
              label={inputKeyword}
              onDelete={() => {
                router.push({
                  query: {
                    ...removeObjectKey(router.query, "keyword"),
                  },
                });
              }}
            />
          )}
        </Stack>
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
