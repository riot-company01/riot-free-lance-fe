import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useFavorite } from "@/hooks/use-favorite";
import type { GetUserToFavoritedWorksQuery } from "@/lib/graphql/graphql";

type Args = {
  userId: string;
  workId: number;
  userToFavoriteWorksData?: GetUserToFavoritedWorksQuery["users_by_pk"];
};

export const useFavoriteAppliedButton = (props: Args) => {
  const { userId, workId, userToFavoriteWorksData } = props;
  const router = useRouter();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isExsistUserToWorksData, setIsExsistUserToWorksData] = useState(false);

  const { addFavorite, deleteFavorite } = useFavorite();

  useEffect(() => {
    if (!userToFavoriteWorksData) return;
    const hasUserToWorksData = userToFavoriteWorksData.userToFavoritedWorks.some((item) => {
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
        await deleteFavorite({
          variables: {
            userId,
            workId,
          },
        });
      } else {
        await addFavorite({
          variables: {
            userId,
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
      await deleteFavorite({
        variables: {
          userId,
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
