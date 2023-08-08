import { InsertFavoriteMutationDocument } from "@/lib/graphql/graphql";
import { useMutation } from "@apollo/client";

export const useFavoriteButton = () => {
  const [insertMutation] = useMutation(InsertFavoriteMutationDocument);
};
