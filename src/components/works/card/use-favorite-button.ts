import { DeleteFavoriteMutationDocument, InsertFavoriteMutationDocument } from "@/lib/graphql/graphql";
import { useMutation } from "@apollo/client";

type Args = {
  userId: string;
  workId: number;
};

export const useFavoriteButton = (props: Args) => {
  const { userId, workId } = props;
  const [insertMutation] = useMutation(InsertFavoriteMutationDocument);
  const [deleteMutation] = useMutation(DeleteFavoriteMutationDocument);

  const handleClickAddFavoriteClick = async () => {
    await insertMutation({
      variables: {
        id: userId,
        workId,
      },
    });
  };

  const handleClickdeleteFavoriteClick = async () => {
    await deleteMutation({
      variables: {
        id: userId,
        workId,
      },
    });
  };

  return {
    handleClickdeleteFavoriteClick,
    handleClickAddFavoriteClick,
  };
};
