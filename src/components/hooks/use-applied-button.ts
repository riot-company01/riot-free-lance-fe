import { GetAppliedDocument, InsertAppliedMutationDocument } from "@/lib/graphql/graphql";
import { useMutation } from "@apollo/client";
import { backToWorksUrlVar } from "@/stores";
import router from "next/router";

type Args = {
  userId: string;
  workId: number;
};

export const useAppliedButton = (props: Args) => {
  const { userId, workId } = props;

  console.log(userId, workId);

  const [insertMutation] = useMutation(InsertAppliedMutationDocument);

  const handleClickAddAppliedClick = async () => {
    await insertMutation({
      variables: {
        id: userId,
        workId,
      },
    });

    backToWorksUrlVar(router.asPath);

    router.push({
      pathname: "apply",
      query: {
        id: userId,
      },
    });
  };

  return {
    handleClickAddAppliedClick,
  };
};
