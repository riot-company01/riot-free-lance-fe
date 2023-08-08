import type { SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Check from "@mui/icons-material/Check";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import { Checkbox, Chip, FormControlLabel, FormGroup, Menu, MenuItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { sortBy, map, groupBy } from "lodash-es";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Modal } from "@/components/common/modal";
import { WORKS_Z_INDEX } from "@/components/works/constants";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";

type Props = {
  defaultFilters?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  worksLength?: number;
};
type Filterer = {
  type: string;
  word: GetSkillsQuery["skills"];
};

export function Filter({ defaultFilters, selectedSkillIds }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewList, setViewList] = useState<Filterer[]>([]);
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
            padding: 8px 0px;
          `}
        >
          <Title>案件数:1000件</Title>
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
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  高単価順
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>{/* <Check /> */}</ListItemIcon>
                  新着順
                </MenuItem>
              </Menu>
            </div>
            <div
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <FilterAltIcon fontSize="large" />
            </div>
          </FlexContainer>
        </FlexContainer>
        <ChipWrapper>
          {["Java", "PHP", "Kotlin", "Kotlin", "Kotlin", "Kotlin", "Kotlin"].map((value, idx) => {
            return (
              <CustomChip
                key={idx}
                label={value}
                onDelete={() => {
                  //
                }}
                sx={{}}
              />
            );
          })}
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
                    // const strId = keyword.id.toString();
                    return (
                      <Link passHref key={keyword.id} href="">
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
  top: 64px;
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
  padding: 8px 0;
  overflow: auto;
  display: flex;
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
