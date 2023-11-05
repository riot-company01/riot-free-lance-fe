import type { SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Check from "@mui/icons-material/Check";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import { Checkbox, Chip, FormControlLabel, FormGroup, Menu, MenuItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { sortBy, map, groupBy } from "lodash-es";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Modal } from "@/components/shared/modal";
import { WORKS_Z_INDEX } from "@/components/works/constants";
import { MD_GLOBAL_NAVIGATION } from "@/constants";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";
import { removeObjectKey } from "@/util/remove-object-key";

type Props = {
  defaultFilters?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  worksLength?: number;
};
type Filterer = {
  type: string;
  word: GetSkillsQuery["skills"];
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
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [viewList, setViewList] = useState<Filterer[]>([]);
  const sort = (router.query["sort"] as string) || "price";
  const inputKeyword = (router.query["keyword"] as string) || "";
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!defaultFilters) return;
    const filterers = sortBy(
      map(groupBy(defaultFilters, "type"), (i, key) => {
        return { type: key, word: i };
      }),
      [
        function (o) {
          return o.type;
        },
      ]
    ).reverse();
    setViewList(filterers);
  }, [JSON.stringify(defaultFilters)]);

  return (
    <>
      <ColumnWrapper>
        <FlexContainer
          restProperty={css`
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Title>案件数:{worksLength}件</Title>
          <FlexContainer>
            <div>
              <button onClick={handleClick}>
                <SortIcon fontSize="large" />
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {list.map((i) => {
                  return (
                    <MenuItem
                      key={i.value}
                      value={i.value}
                      onClick={() => {
                        handleClose();
                        router.push({
                          query: {
                            ...router.query,
                            sort: i.value,
                          },
                        });
                      }}
                    >
                      <ListItemIcon>{sort === i.value && <Check />}</ListItemIcon>
                      {i.displayName}
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
            <FilterAltIconWrapper
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <FilterAltIcon fontSize="large" />
            </FilterAltIconWrapper>
          </FlexContainer>
        </FlexContainer>
        <ChipWrapper>
          {defaultFilters?.length !== 0 &&
            selectedSkillIds.map((value, idx) => {
              const skillIds = selectedSkillIds.filter((i) => i !== value);
              return (
                <CustomChip
                  key={idx}
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
            <CustomChip
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
        </ChipWrapper>
      </ColumnWrapper>
      <Modal
        open={isOpen}
        title="絞り込み"
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Content>
          {viewList.map((node, idx) => {
            return (
              <div key={idx}>
                <Head>{node.type}</Head>
                <FormGroup
                  sx={{
                    paddingBottom: 2,
                    display: "flex",
                    flexDirection: "initial",
                  }}
                >
                  {node.word.map((keyword) => {
                    const strId = keyword.id.toString();
                    const skillIds = selectedSkillIds.includes(strId) ? selectedSkillIds.filter((i) => i !== strId) : [...selectedSkillIds, strId];
                    return (
                      <Link
                        passHref
                        key={keyword.id}
                        href={{
                          query:
                            skillIds.length !== 0
                              ? {
                                  ...router.query,
                                  [`skill-ids`]: `${skillIds.join()}`,
                                }
                              : {
                                  ...removeObjectKey(router.query, "skill-ids"),
                                },
                        }}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <FormControlLabel
                          control={<Checkbox size="small" />}
                          checked={selectedSkillIds.some((i) => i === keyword.id.toString())}
                          label={
                            <>
                              {keyword.name} ({keyword.works_aggregate.aggregate?.count})
                            </>
                          }
                        />
                      </Link>
                    );
                  })}
                </FormGroup>
              </div>
            );
          })}
        </Content>
      </Modal>
    </>
  );
}

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  background-color: #f5f5f5;
  top: ${MD_GLOBAL_NAVIGATION.HEADER}px;
  padding: 16px 0;
  z-index: ${WORKS_Z_INDEX.FILTER};
`;

const FlexContainer = styled.div<{ restProperty?: SerializedStyles }>`
  display: flex;
  ${({ restProperty }) => restProperty}
`;

const Title = styled.div`
  font-size: 20px;
`;

const CustomChip = styled(Chip)`
  :not(:first-of-type) {
    margin-left: 8px;
  }
`;

const ChipWrapper = styled.div`
  overflow: auto;
  display: flex;
  padding-top: 8px;
`;

const Content = styled.div`
  width: 100%;
  padding: 16px;
  background-color: white;
`;

const Head = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const FilterAltIconWrapper = styled.div`
  padding-left: 4px;
`;
