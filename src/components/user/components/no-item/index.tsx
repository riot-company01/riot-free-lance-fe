import { BREAK_POINT, LG_GLOBAL_NAVIGATION, MD_GLOBAL_NAVIGATION } from "@/constants";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

type NoItemProps = {
  title: string;
};

export const NoItem = (props: NoItemProps) => {
  const router = useRouter();

  return (
    <NotResultWrapper>
      <As>該当する案件がありません</As>

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
        案件を探す
      </Button>
    </NotResultWrapper>
  );
};

const NotResultWrapper = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  height: calc(100dvh - ${MD_GLOBAL_NAVIGATION.HEADER}px - ${MD_GLOBAL_NAVIGATION.FOOTER}px);
  @media screen and (min-width: ${BREAK_POINT.md}px) {
    height: calc(100dvh - ${LG_GLOBAL_NAVIGATION.HEADER}px - ${LG_GLOBAL_NAVIGATION.FOOTER}px);
  }
  flex-direction: column;
`;

const As = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
