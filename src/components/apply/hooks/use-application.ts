import { useMutation, useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { send } from "emailjs-com";
import router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import {
  EditProfileDocument,
  GetUserDocument,
  GetUserToWorksDocument,
  GetWorkDocument,
  InsertAppliedMutationDocument,
  UpdateApplicatedDocument,
} from "@/lib/graphql/graphql";
import type { GetUserToWorksQuery } from "@/lib/graphql/graphql";

export const useApplication = (userToWorksData?: GetUserToWorksQuery["users"][0]["user_to_works"]) => {
  const { user } = useUser();
  const { query } = useRouter();

  const { data: workData, loading: workLoading } = useQuery(GetWorkDocument, {
    variables: {
      id: Number(query.id),
    },
  });

  const { data: userData, loading: userLoading } = useQuery(GetUserDocument, {
    variables: {
      id: user?.sub,
    },
  });

  const [InsertAppliedMutation] = useMutation(InsertAppliedMutationDocument, {
    refetchQueries: [GetUserToWorksDocument],
  });
  const [updateAppliedMutation] = useMutation(UpdateApplicatedDocument, {
    refetchQueries: [GetUserToWorksDocument],
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [isExsistUserToWorksData, setIsExsistUserToWorksData] = useState(false);
  const [userName, setUserName] = useState(userData?.users[0].userName);
  const [userNameKana, setUserNameKana] = useState(userData?.users[0].userNameKana);
  const [phoneNumber, setPhoneNumber] = useState(userData?.users[0].tel);
  const [email, setEmail] = useState(userData?.users[0].mail);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
  const onChangeUserNameKana = (e: ChangeEvent<HTMLInputElement>) => setUserNameKana(e.target.value);
  const onChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const [editProfileMutation] = useMutation(EditProfileDocument);

  const applicationWork = async () => {
    const template_param = {
      work_title: workData?.works_by_pk?.title,
      user_name: userName,
      user_name_kana: userNameKana,
      from_phone_number: phoneNumber,
      from_email: email,
    };

    send("service_3mxaipn", "template_lop0qms", template_param, "N0Z9VGngtSAYrSpz0").then(() => {
      setOpenDialog(true);
    });

    if (isExsistUserToWorksData) {
      await updateAppliedMutation({
        variables: {
          id: user?.sub || "",
          workId: Number(query.id),
          application: true,
        },
      });
    } else {
      await InsertAppliedMutation({
        variables: {
          id: user?.sub || "",
          workId: Number(query.id),
        },
      });
    }

    await editProfileMutation({
      variables: {
        id: user?.sub || "",
        userName: userName,
        userNameKana: userNameKana,
        mail: email,
        tel: phoneNumber,
      },
    });
  };

  const backToWorkList = () => {
    router.back();
  };

  useEffect(() => {
    if (!userToWorksData) return;

    const hasUserToWorksData = userToWorksData.some((item) => {
      return item.work_id === Number(query.id);
    });

    setIsExsistUserToWorksData(hasUserToWorksData);
  }, [userToWorksData]);

  useEffect(() => {
    setUserName(userData?.users[0].userName);
    setUserNameKana(userData?.users[0].userNameKana);
    setPhoneNumber(userData?.users[0].tel);
    setEmail(userData?.users[0].mail);
  }, [userData]);

  return {
    userName,
    userNameKana,
    phoneNumber,
    email,
    openDialog,
    workData,
    workLoading,
    userLoading,
    onChangeUserName,
    onChangeUserNameKana,
    onChangePhoneNumber,
    onChangeEmail,
    applicationWork,
    backToWorkList,
  };
};
