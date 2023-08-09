import { useQuery, useReactiveVar } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import styled from "@emotion/styled";
import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { send } from "emailjs-com";
import router, { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { CustomCard } from "@/components/apply/lg/card";
import { GetWorkDocument } from "@/lib/graphql/graphql";
import { backToWorksUrlVar } from "@/stores";

export const ApplyLg = () => {
  const { user } = useUser();
  const { query } = useRouter();
  const backToUrl = useReactiveVar(backToWorksUrlVar);
  const fixBackToUrl = backToUrl === undefined ? "/works" : String(backToUrl);

  const [openDialog, setOpenDialog] = useState(false);
  const [userName, setUserName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const { data } = useQuery(GetWorkDocument, {
    variables: {
      id: Number(query.id),
    },
  });

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const applicationWork = () => {
    const template_param = {
      work_title: data?.works_by_pk?.title,
      from_name: user?.name,
      from_email: user?.email,
    };

    send("service_3mxaipn", "template_lop0qms", template_param, "N0Z9VGngtSAYrSpz0").then(() => {
      setOpenDialog(true);
    });
  };

  const backToWorkList = () => {
    router.push(fixBackToUrl);
  };

  return (
    <>
      <CustomCard item={data?.works_by_pk} />
      <ProfileInfo>
        <Description>
          <p>上記の案件に応募します</p>
          <p>下記のボタンより案件へご応募ください</p>
        </Description>

        <Section>
          <h3>氏名</h3>
          <TextField fullWidth value={userName} onChange={onChangeUserName} />
        </Section>

        <Section>
          <h3>メールアドレス</h3>
          <TextField fullWidth value={email} onChange={onChangeEmail} />
        </Section>

        <Section>
          <h3>スキルシート</h3>
          <p>マイページ作成後に実装</p>
        </Section>

        <SendButton variant="contained" onClick={applicationWork}>
          案件に応募する
        </SendButton>
      </ProfileInfo>
      <Dialog open={openDialog}>
        <DialogTitle>案件への応募が完了しました</DialogTitle>
        <BackButton variant="outlined" onClick={backToWorkList}>
          一覧に戻る
        </BackButton>
      </Dialog>
    </>
  );
};

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0;
`;

const Section = styled.section`
  :not(:first-of-type) {
    margin-top: 16px;
  }
  margin: 0 16px;
  width: 600px;
`;

const SendButton = styled(Button)`
  margin: 32px 16px;
`;

const BackButton = styled(Button)`
  margin: 0 16px 16px 16px;
`;
