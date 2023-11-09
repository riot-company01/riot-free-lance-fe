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

type Inputs = {
  userName: string | null;
  userNameKana: string | null;
  email: string | null;
  phoneNumber: string | null;
};

export const useProfile = () => {
  const { user } = useAuth();

  const { data: userData, loading: userLoading } = useQuery(GetUserDocument, {
    variables: {
      id: user?.sub,
    },
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

  const editProfile: SubmitHandler<Inputs> = async (data: Inputs) => {
    await editProfileMutation({
      variables: {
        id: user?.sub || "",
        userName: data.userName,
        userNameKana: data.userNameKana,
        mail: data.email,
        tel: data.phoneNumber,
      },
    });

    setOpenDialog(true);
  };

  return {
    control,
    userName: userData?.users[0].userName,
    userNameKana: userData?.users[0].userNameKana,
    email: userData?.users[0].mail,
    phoneNumber: userData?.users[0].tel,
    validationRules,
    openDialog,
    userLoading,
    handleSubmit,
    editProfile,
    setOpenDialog,
  };
};
