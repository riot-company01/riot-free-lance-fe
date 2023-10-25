import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  GetFavoriteWorksDocument,
  InsertFavoriteMutationDocument,
  DeleteFavoritedMutationDocument,
} from "@/lib/graphql/graphql";
import type { GetFavoriteWorksQuery } from "@/lib/graphql/graphql";

type Args = {
  userId: string;
  workId: number;
  userToFavoriteWorksData?: GetFavoriteWorksQuery["users"][0]["userToFavoritedWorks"];
};

export const useFavoriteAppliedButton = (props: Args) => {
  const { userId, workId, userToFavoriteWorksData } = props;
  const router = useRouter();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isExsistUserToWorksData, setIsExsistUserToWorksData] = useState(false);

  const [insertFavoriteMutation] = useMutation(InsertFavoriteMutationDocument, {
    refetchQueries: [GetFavoriteWorksDocument],
  });

  const [deleteFavoriteMutation] = useMutation(DeleteFavoritedMutationDocument, {
    refetchQueries: [GetFavoriteWorksDocument],
  });

  useEffect(() => {
    if (!userToFavoriteWorksData) return;

    const hasUserToWorksData = userToFavoriteWorksData.some((item) => {
      return item.workId === workId;
    });

    setIsExsistUserToWorksData(hasUserToWorksData);
  }, [userToFavoriteWorksData]);

  const handleClickAddFavoriteClick = async () => {
    if (!userId) {
      router.push("/user/favorite/");
      return;
    }
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);

      if (isExsistUserToWorksData) {
        await deleteFavoriteMutation({
          variables: {
            id: userId,
            workId,
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
      await deleteFavoriteMutation({
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
