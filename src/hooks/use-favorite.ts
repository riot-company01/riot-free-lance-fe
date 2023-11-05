import { useMutation } from "@apollo/client";
import { useAuth } from "@/hooks/use-auth";
import { AddFavoriteDocument, DeleteFavoriteDocument, GetUserToWorksDocument } from "@/lib/graphql/graphql";

export function useFavorite() {
  const { user } = useAuth();
  const [addFavorite] = useMutation(AddFavoriteDocument, {
    refetchQueries: [
      {
        query: GetUserToWorksDocument,
        variables: {
          id: user?.sub,
        },
      },
    ],
  });
  const [deleteFavorite] = useMutation(DeleteFavoriteDocument, {
    refetchQueries: [
      {
        query: GetUserToWorksDocument,
        variables: {
          id: user?.sub,
        },
      },
    ],
  });
  return {
    addFavorite,
    deleteFavorite,
  };
}
