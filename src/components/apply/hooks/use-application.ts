import { useMutation, useQuery } from "@apollo/client";
import { send } from "emailjs-com";
import router, { useRouter } from "next/router";
import { useState } from "react";
import { loadingVar } from "@/global-state";
import { useAuth } from "@/hooks/use-auth";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  EditProfileDocument,
  GetUserDocument,
  GetUserToWorksDocument,
  GetWorkDocument,
  InsertAppliedMutationDocument,
} from "@/lib/graphql/graphql";

// 1. 入力値の定義を作成します。
type Inputs = {
  userName: string;
  userNameKana: string;
  email: string;
  phoneNumber: string;
};

export const useApplication = () => {
  const { user } = useAuth();
  const { query, asPath } = useRouter();

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

  // 2. useFormで必要な関数を取得し、デフォルト値を指定します。
  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      userName: userData?.users[0].userName || "",
      userNameKana: userData?.users[0].userNameKana || "",
      email: userData?.users[0].mail || "",
      phoneNumber: userData?.users[0].tel || "",
    },
  });

  // 3. 検証ルールを指定します。
  const validationRules = {
    userName: {
      required: "名前を入力してください。",
    },
  };

  const [openDialog, setOpenDialog] = useState(false);

  const [editProfileMutation] = useMutation(EditProfileDocument);

  const applicationWork: SubmitHandler<Inputs> = async (data: Inputs) => {
    console.log(data);
    loadingVar(true);
    const template_param = {
      work_title: workData?.works_by_pk?.title,
      user_name: data.userName,
      user_name_kana: data.userNameKana,
      from_phone_number: data.phoneNumber,
      from_email: data.email,
    };
    if (asPath !== "/my") {
      await send("service_3mxaipn", "template_lop0qms", template_param, "N0Z9VGngtSAYrSpz0");
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
        userName: data.userName,
        userNameKana: data.userNameKana,
        mail: data.email,
        tel: data.phoneNumber,
      },
    });
    loadingVar(false);
    setOpenDialog(true);
  };

  const backToWorkList = () => {
    router.back();
  };

  return {
    control,
    userName: userData?.users[0].userName || "",
    userNameKana: userData?.users[0].userNameKana || "",
    email: userData?.users[0].mail || "",
    phoneNumber: userData?.users[0].tel || "",
    validationRules,
    openDialog,
    workData,
    workLoading,
    userLoading,
    handleSubmit,
    applicationWork,
    backToWorkList,
  };
};
