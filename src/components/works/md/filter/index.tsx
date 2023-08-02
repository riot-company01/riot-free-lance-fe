import type { SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Check from "@mui/icons-material/Check";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import { Menu, MenuItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useState } from "react";
import { WORKS_Z_INDEX } from "@/components/works/constants";

export function Filter() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ColumnWrapper>
      <FlexContainer
        restProperty={css`
          justify-content: space-between;
        `}
      >
        <div>案件数:1000件</div>
        <FlexContainer>
          <div onClick={handleClick}>
            <SortIcon fontSize="large" />
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
              //
              // 絞り込みモーダル開く
            }}
          >
            <FilterAltIcon fontSize="large" />
          </div>
        </FlexContainer>
      </FlexContainer>
      <div>絞り込みされた要素エリア</div>
    </ColumnWrapper>
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
