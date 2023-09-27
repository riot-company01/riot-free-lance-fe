import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { BREAK_POINT, LG_GLOBAL_NAVIGATION, MD_GLOBAL_NAVIGATION } from "@/constants";

type NoItemProps = {
  pageTitle: "apply" | "favorite";
};

export const NoItem = ({ pageTitle }: NoItemProps) => {
  const router = useRouter();

  const title = pageTitle === "favorite" ? "お気に入り登録" : "応募";

  return (
    <NotResultWrapper>
      <As>{title}済み案件がありません</As>
      <PerDescription>{title}することでこちらのページに案件が表示されます</PerDescription>

      <Button
        variant="contained"
        sx={{
          maxWidth: 220,
          margin: "0 auto",
        }}
        onClick={() => {
          router.push({
            pathname: "/works",
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
  @media (max-width: ${BREAK_POINT.sm}px) {
    font-size: 18px;
  }
`;

const PerDescription = styled.p`
  @media (max-width: ${BREAK_POINT.sm}px) {
    font-size: 12px;
  }
`;
