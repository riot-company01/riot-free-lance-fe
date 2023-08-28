import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

type NoItemProps = {
  title: string;
};

export const NoItem = (props: NoItemProps) => {
  const { title } = props;
  const router = useRouter();

  const goToPage = () => {
    router.push("/works");
  };

  const targetName = title === "favorite" ? "お気に入り登録済み" : "応募済み";

  return (
    <NoItemWrapper>
      <Text>{targetName}の案件がありません</Text>
      <Button variant="contained" onClick={goToPage}>
        案件を探す
      </Button>
    </NoItemWrapper>
  );
};

export const NoItemWrapper = styled.div`
  height: calc(100dvh - 156px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  margin-bottom: 32px;
`;
