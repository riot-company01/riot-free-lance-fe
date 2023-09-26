import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  GetFavoriteWorksDocument,
  GetFavoriteWorksQuery,
  InsertFavoriteMutationDocument,
  UpdateFavoriteDocument,
} from "@/lib/graphql/graphql";

type Args = {
  userId: string;
  workId: number;
  userToFavoriteWorksData?: GetFavoriteWorksQuery["users"][0]["user_to_works"];
};

export const useFavoriteAppliedButton = (props: Args) => {
  const { userId, workId, userToFavoriteWorksData } = props;

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isExsistUserToWorksData, setIsExsistUserToWorksData] = useState(false);

  const [insertFavoriteMutation] = useMutation(InsertFavoriteMutationDocument, {
    refetchQueries: [GetFavoriteWorksDocument],
  });

  const [updateFavoriteMutation] = useMutation(UpdateFavoriteDocument, {
    refetchQueries: [GetFavoriteWorksDocument],
  });

  useEffect(() => {
    if (!userToFavoriteWorksData) return;

    const hasUserToWorksData = userToFavoriteWorksData.some((item) => {
      return item.work_id === workId;
    });

    setIsExsistUserToWorksData(hasUserToWorksData);
    console.log(isExsistUserToWorksData);
  }, userToFavoriteWorksData);

  const handleClickAddFavoriteClick = async () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);

      if (isExsistUserToWorksData) {
        await updateFavoriteMutation({
          variables: {
            id: userId,
            workId,
            favorite: true,
          },
        });
      } else {
        await insertFavoriteMutation({
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

  const handleClickDeleteFavoriteClick = async () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      await updateFavoriteMutation({
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
    handleClickDeleteFavoriteClick,
    handleClickAddFavoriteClick,
  };
};
