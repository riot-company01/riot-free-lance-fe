import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  GetAppliedWorksQuery,
  GetFavoriteWorksDocument,
  InsertFavoriteMutationDocument,
  UpdateFavoriteDocument,
} from "@/lib/graphql/graphql";

type Args = {
  userId: string;
  workId: number;
  userToWorksData?: GetAppliedWorksQuery["users"][0]["user_to_works"];
};

export const useAppliedButton = (props: Args) => {
  const { userId, workId, userToWorksData } = props;

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isExsistUserToWorksData, setIsExsistUserToWorksData] = useState(false);

  const [insertMutation] = useMutation(InsertFavoriteMutationDocument, {
    refetchQueries: [GetFavoriteWorksDocument],
  });
  const [updateMutation] = useMutation(UpdateFavoriteDocument, {
    refetchQueries: [GetFavoriteWorksDocument],
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
            favorite: true,
          },
        });
      } else {
        await insertMutation({
          variables: {
            id: userId,
            workId,
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
          favorite: false,
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
