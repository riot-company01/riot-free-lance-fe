import { useQuery } from "@apollo/client";
import type { UserProfile } from "@auth0/nextjs-auth0/client";
import styled from "@emotion/styled";
import { Pagination, Skeleton } from "@mui/material";

import { useRouter } from "next/router";
import { Detail } from "@/components/shared/detail/md";
import { Modal } from "@/components/shared/modal";

import { Filter } from "@/components/works/md/filter";
import { Item } from "@/components/shared/item";
import { BREAK_POINT } from "@/constants";
import { type GetSkillsQuery, type GetWorksQuery, GetUserToWorksDocument } from "@/lib/graphql/graphql";

type Props = {
  skills?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
  worksData?: GetWorksQuery;
  user?: UserProfile;
};

export function WorksMd({ worksData, skills, selectedSkillIds, user }: Props) {
  const router = useRouter();
  const { data: userData } = useQuery(GetUserToWorksDocument, {
    skip: !user?.sub,
    variables: {
      id: user?.sub as string,
    },
  });

  const id = Number(router.query["work-id"]);
  const focusItemHasBookmark = userData?.users_by_pk?.userToFavoritedWorks.some((i) => i.workId === id);
  return (
    <Div>
      <Filter defaultFilters={skills} selectedSkillIds={selectedSkillIds} worksLength={worksData?.works.length} />
      <Wrapper>
        {worksData
          ? worksData?.works.map((item, idx) => {
              const isFavorite = userData?.users_by_pk?.userToFavoritedWorks.some((i) => i.workId === item.id);

              return <Item key={idx} item={item} isFavorite={!!isFavorite} userId={userData?.users_by_pk?.id} />;
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
  @media (min-width: ${BREAK_POINT.md}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Div = styled.div`
  padding: 0px 16px 56px 16px;
`;

const PaginationWrapper = styled.div`
  padding: 40px 0;
`;
