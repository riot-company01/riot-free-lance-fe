import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { Stack, Chip, Button } from "@mui/material";
import router from "next/router";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";
import { removeObjectKey } from "@/util/remove-object-key";

export function NotResult({
  keepSkills,
  selectedSkillIds,
  inputKeyword,
}: {
  keepSkills: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  inputKeyword: string;
}) {
  return (
    <NotResultWrapper>
      <As>該当する案件がありません。</As>
      <div>絞り込み条件を見直してください。</div>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          margin: "0 auto",
        }}
      >
        {selectedSkillIds.map((value) => {
          const skillIds = selectedSkillIds.filter((i) => i !== value);
          return (
            keepSkills?.find((i) => i.id === Number(value))?.name && (
              <Chip
                key={value}
                label={keepSkills?.find((i) => i.id === Number(value))?.name}
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
            )
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
      <Button
        variant="contained"
        sx={{
          maxWidth: 220,
          margin: "0 auto",
        }}
        onClick={() => {
          router.push({
            pathname: "works/",
          });
        }}
      >
        絞りみ条件をリセットする
      </Button>
    </NotResultWrapper>
  );
}

const NotResultWrapper = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  padding-top: 10%;
  flex-direction: column;
`;

const As = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
