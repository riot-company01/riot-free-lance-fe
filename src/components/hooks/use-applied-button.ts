import {
  GetAppliedDocument,
  GetUserToWorksQuery,
  InsertAppliedMutationDocument,
  UpdateApplicatedDocument,
} from "@/lib/graphql/graphql";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { backToWorksUrlVar } from "@/stores";
import router from "next/router";

type Args = {
  userId: string;
  workId: number;
  userToWorksData?: GetUserToWorksQuery["users"][0]["user_to_works"];
};

export const useAppliedButton = (props: Args) => {
  const { userId, workId, userToWorksData } = props;

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isExsistUserToWorksData, setIsExsistUserToWorksData] = useState(false);

  const [insertMutation] = useMutation(InsertAppliedMutationDocument, {
    refetchQueries: [GetAppliedDocument],
  });
  const [updateMutation] = useMutation(UpdateApplicatedDocument, {
    refetchQueries: [GetAppliedDocument],
  });

  useEffect(() => {
    if (!userToWorksData) return;

    const hasUserToWorksData = userToWorksData.some((item) => {
      return item.work_id === workId;
    });

    setIsExsistUserToWorksData(hasUserToWorksData);
  }, userToWorksData);

  const handleClickAddFavoriteClick = async () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);

      if (isExsistUserToWorksData) {
        await updateMutation({
          variables: {
            id: userId,
            workId,
            application: true,
          },
        });
        backToWorksUrlVar(router.asPath);

        router.push({
          pathname: "apply",
          query: {
            id: userId,
          },
        });
      } else {
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
      }

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 200);
    }
  };

  const handleClickUpdateAppliedClick = async () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      await updateMutation({
        variables: {
          id: userId,
          workId,
          application: false,
        },
      });
      backToWorksUrlVar(router.asPath);

      router.push({
        pathname: "apply",
        query: {
          id: userId,
        },
      });
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 200);
    }
  };

  return {
    handleClickUpdateAppliedClick,
    handleClickAddFavoriteClick,
  };
};
