import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  DeleteFavoriteMutationDocument,
  GetFavoriteWorksDocument,
  InsertFavoriteMutationDocument,
} from "@/lib/graphql/graphql";

type Args = {
  userId: string;
  workId: number;
};

export const useFavoriteButton = (props: Args) => {
  const { userId, workId } = props;
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [insertMutation] = useMutation(InsertFavoriteMutationDocument, {
    refetchQueries: [GetFavoriteWorksDocument],
  });
  const [deleteMutation] = useMutation(DeleteFavoriteMutationDocument, {
    refetchQueries: [GetFavoriteWorksDocument],
  });

  const handleClickAddFavoriteClick = async () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      await insertMutation({
        variables: {
          id: userId,
          workId,
        },
      });
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 200);
    }
  };

  const handleClickDeleteFavoriteClick = async () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      await deleteMutation({
        variables: {
          id: userId,
          workId,
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
