import styled from "@emotion/styled";
import OutboundIcon from "@mui/icons-material/Outbound";

export const LayoutFooter: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <OutboundIcon fontSize="small" />
        運営会社
      </div>
      <div>
        <OutboundIcon fontSize="small" />
        利用規約
      </div>
      <div>
        <OutboundIcon fontSize="small" />
        プライバシーポリシー
      </div>
      <div>
        <OutboundIcon fontSize="small" />
        お問い合わせ
      </div>
      <div>
        <OutboundIcon fontSize="small" />
        ご利用ガイド
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  z-index: 1000;
  height: 78px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  background-color: #30345c;
  color: white;
  font-size: 12px;
`;

// 運営会社
// 利用規約
// プライバシーポリシー
// 提携パートナー
// お問い合わせ
// ご利用ガイド
