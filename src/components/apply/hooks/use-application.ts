import { useMutation, useQuery } from "@apollo/client";
import { send } from "emailjs-com";
import router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { loadingVar } from "@/global-state";
import { useAuth } from "@/hooks/use-auth";
import { EditProfileDocument, GetUserDocument, GetUserToWorksDocument, GetWorkDocument, InsertAppliedMutationDocument } from "@/lib/graphql/graphql";

export const useApplication = () => {
  const { user } = useAuth();
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
    refetchQueries: [
      {
        query: GetUserToWorksDocument,
        variables: {
          id: user?.sub,
        },
      },
    ],
  });

  const [openDialog, setOpenDialog] = useState(false);
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
    loadingVar(true);
    const template_param = {
      work_title: workData?.works_by_pk?.title,
      user_name: userName,
      user_name_kana: userNameKana,
      from_phone_number: phoneNumber,
      from_email: email,
    };
    await send("service_3mxaipn", "template_lop0qms", template_param, "N0Z9VGngtSAYrSpz0");
    await InsertAppliedMutation({
      variables: {
        id: user?.sub || "",
        workId: Number(query.id),
      },
    });
    await editProfileMutation({
      variables: {
        id: user?.sub || "",
        userName: userName,
        userNameKana: userNameKana,
        mail: email,
        tel: phoneNumber,
      },
    });
    loadingVar(false);
    setOpenDialog(true);
  };

  const backToWorkList = () => {
    router.back();
  };

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
