import { useMutation } from "@apollo/client";
import { useAuth } from "@/hooks/use-auth";
import type { User_To_Favorite_Works } from "@/lib/graphql/graphql";
import { AddFavoriteDocument, DeleteFavoriteDocument } from "@/lib/graphql/graphql";

export function useFavorite() {
  const { user } = useAuth();
  const [addFavorite, { loading: favoriteLoading }] = useMutation(AddFavoriteDocument, {
    update(cache, { data }) {
      if (!data?.insert_user_to_favorite_works_one?.workId) return;
      const workId = data.insert_user_to_favorite_works_one.workId;
      cache.modify({
        id: cache.identify({ __typename: "users", id: user?.sub }),
        fields: {
          userToFavoritedWorks(existing) {
            const addData = {
              work: { __ref: `works:${workId}` },
              workId,
              __typename: "user_to_favorite_works",
            };
            return [...existing, addData];
          },
        },
      });
    },
  });
  const [deleteFavorite, { loading: unFavoriteLoading }] = useMutation(DeleteFavoriteDocument, {
    update(cache, { data }) {
      if (!data?.delete_user_to_favorite_works_by_pk?.workId) return;
      const workId = data.delete_user_to_favorite_works_by_pk.workId;
      cache.modify({
        id: cache.identify({ __typename: "users", id: user?.sub }),
        fields: {
          userToFavoritedWorks(existing: User_To_Favorite_Works[]) {
            const filtered = existing.filter((i) => i.workId !== workId);
            return filtered;
          },
        },
      });
    },
  });
  return {
    addFavorite,
    deleteFavorite,
    favoriteLoading,
    unFavoriteLoading,
  };
}
