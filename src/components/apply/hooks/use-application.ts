import { useMutation, useQuery } from "@apollo/client";
import { send } from "emailjs-com";
import router, { useRouter } from "next/router";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { loadingVar } from "@/global-state";
import { useAuth } from "@/hooks/use-auth";

import { EditProfileDocument, GetUserDocument, GetUserToWorksDocument, GetWorkDocument, InsertAppliedMutationDocument } from "@/lib/graphql/graphql";

type Inputs = {
  userName: string | null;
  userNameKana: string | null;
  email: string | null;
  phoneNumber: string | null;
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

  const { control, handleSubmit } = useForm<Inputs>({});

  const validationRules = {
    userName: {
      required: "名前を入力してください。",
    },
    userNameKana: {
      required: "名前(かな)を入力してください。",
      pattern: {
        value: /^[\u3040-\u309F]+$/,
        message: "ひらがなで入力してください",
      },
    },
    email: {
      required: "メールアドレスを入力してください。",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "メールアドレスの形式が違います",
      },
    },
    phoneNumber: {
      required: "電話番号を入力してください",
      pattern: {
        value: /^0\d{9,10}$/,
        message: "電話番号の形式が違います",
      },
    },
  };

  const [openDialog, setOpenDialog] = useState(false);

  const [editProfileMutation] = useMutation(EditProfileDocument);

  const applicationWork: SubmitHandler<Inputs> = async (data: Inputs) => {
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
    userName: userData?.users[0].userName,
    userNameKana: userData?.users[0].userNameKana,
    email: userData?.users[0].mail,
    phoneNumber: userData?.users[0].tel,
    validationRules,
    openDialog,
    workData,
    workLoading,
    userLoading,
    handleSubmit,
    applicationWork,
    backToWorkList,
    setOpenDialog,
  };
};
