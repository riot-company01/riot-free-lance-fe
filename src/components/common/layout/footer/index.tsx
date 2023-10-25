import styled from "@emotion/styled";
import OutboundIcon from "@mui/icons-material/Outbound";
import { blue } from "@mui/material/colors";
import NextLink from "next/link";
import { BREAK_POINT, COMMON_Z_INDEX, LG_GLOBAL_NAVIGATION, MD_GLOBAL_NAVIGATION } from "@/constants";

export const LayoutFooter: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <OutboundIcon fontSize="small" />
        <NextLink href="https://www.riot-company.com/">運営会社</NextLink>
      </div>
      <div>
        <OutboundIcon fontSize="small" />
        <NextLink href="/terms">利用規約</NextLink>
      </div>
      <div>
        <OutboundIcon fontSize="small" />
        <NextLink href="/privacy">プライバシーポリシー</NextLink>
      </div>
      <div>
        <OutboundIcon fontSize="small" />
        <NextLink href="https://www.riot-company.com/#contact">お問い合わせ</NextLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  z-index: ${COMMON_Z_INDEX.HEADER};

  height: ${MD_GLOBAL_NAVIGATION.FOOTER}px;
  @media screen and (min-width: ${BREAK_POINT.md}px) {
    height: ${LG_GLOBAL_NAVIGATION.FOOTER}px;
  }
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  background: ${blue[500]};
  color: white;
  font-size: 12px;

  div {
    align-items: center;
    display: flex;
    svg {
      font-size: 12px;
    }
  }
`;
