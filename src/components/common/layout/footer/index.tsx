import styled from "@emotion/styled";
import OutboundIcon from "@mui/icons-material/Outbound";
import NextLink from "next/link";
import { COMMON_Z_INDEX } from "@/constants";
import { COLOR } from "@/styles/colors";

export const LayoutFooter: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <OutboundIcon fontSize="small" />
        <NextLink href="https://riot-company.com/top/">運営会社</NextLink>
      </div>
      <div>
        <OutboundIcon fontSize="small" />
        <NextLink href="https://riot-company.com/contact/">お問い合わせ</NextLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  z-index: ${COMMON_Z_INDEX.HEADER};
  height: 78px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  background-color: ${COLOR.BASE_COLOR.code};
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
