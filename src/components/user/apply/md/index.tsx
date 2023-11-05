import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import { Detail } from "@/components/shared/detail/md";
import { Item } from "@/components/shared/item";
import { Modal } from "@/components/shared/modal";
import { BREAK_POINT } from "@/constants";
import { useAuth } from "@/hooks/use-auth";
import { GetUserToWorksDocument } from "@/lib/graphql/graphql";

export function AppliedMd() {
  const router = useRouter();
  const { user } = useAuth();
  const { data: userData } = useQuery(GetUserToWorksDocument, {
    skip: !user?.sub,
    variables: {
      id: user?.sub as string,
    },
  });

  const id = Number(router.query["work-id"]);
  const focusItemHasBookmark = userData?.users_by_pk?.userToApplyWorks.some((i) => i.workId === id);

  return (
    <Div>
      <Wrapper>
        {userData && userData.users_by_pk && userData.users_by_pk.userToApplyWorks
          ? userData?.users_by_pk.userToApplyWorks.map(({ work }, idx) => {
              if (!work) return;
              const isFavorite = userData?.users_by_pk?.userToApplyWorks.some((i) => i.workId === work.id);
              return <Item key={idx} item={work} isFavorite={!!isFavorite} userId={userData?.users_by_pk?.id} />;
            })
          : [...Array(5)].map((_, idx) => {
              return <Skeleton key={idx} variant="rectangular" height={400} sx={{ borderRadius: 2 }} />;
            })}
      </Wrapper>
      <PaginationWrapper>
        <Pagination count={1} variant="outlined" shape="rounded" size="large" />
      </PaginationWrapper>
      <Modal
        open={!!id}
        title="案件詳細"
        onClose={() => {
          router.back();
        }}
      >
        <Detail id={id} isFavorite={!!focusItemHasBookmark} userId={userData?.users_by_pk?.id} />
      </Modal>
    </Div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  margin-top: 40px;
  @media (min-width: ${BREAK_POINT.sm}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Div = styled.div`
  padding: 0px 16px 56px 16px;
`;

const PaginationWrapper = styled.div`
  padding: 40px 0;
`;
