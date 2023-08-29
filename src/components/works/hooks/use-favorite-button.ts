import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  DeleteFavoriteMutationDocument,
  GetFavariteWorksDocument,
  GetWorksDocument,
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
    refetchQueries: [GetWorksDocument, GetFavariteWorksDocument],
  });
  const [deleteMutation] = useMutation(DeleteFavoriteMutationDocument, {
    refetchQueries: [GetWorksDocument, GetFavariteWorksDocument],
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
      }, 100);
    }
  };

  const handleClickdeleteFavoriteClick = async () => {
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
      }, 1000); // 連打防止を解除するまでの待機時間
    }
  };

  return {
    handleClickdeleteFavoriteClick,
    handleClickAddFavoriteClick,
  };
};
