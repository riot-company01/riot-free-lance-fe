import { useMutation } from "@apollo/client";
import { AddFavoriteDocument, GetUserToFavoritedWorksDocument, DeleteFavoriteDocument } from "@/lib/graphql/graphql";

export function useFavorite() {
  const [addFavorite] = useMutation(AddFavoriteDocument, {
    refetchQueries: [GetUserToFavoritedWorksDocument],
  });
  const [deleteFavorite] = useMutation(DeleteFavoriteDocument, {
    refetchQueries: [GetUserToFavoritedWorksDocument],
  });
  return {
    addFavorite,
    deleteFavorite,
  };
}
