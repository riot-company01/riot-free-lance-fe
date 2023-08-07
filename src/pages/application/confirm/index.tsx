import { useQuery, useReactiveVar } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { send } from "emailjs-com";
import router, { useRouter } from "next/router";
import { ChangeEvent, useCallback, useState } from "react";
import { CustomCard } from "@/components/application/card";
import { GetWorkDocument } from "@/lib/graphql/graphql";
import { backToWorksUrlVar } from "@/stores";
import { COLOR } from "@/styles/colors";
import { SCREEN_SIZE } from "@/styles/width";

function ApplicationConfirm() {
  const { user } = useUser();
  const { query } = useRouter();
  const backToUrl = useReactiveVar(backToWorksUrlVar);
  const fixBackToUrl = backToUrl === undefined ? "/works" : String(backToUrl);

  const [sendMail, setSendMail] = useState(false);
  const [userName, setUserName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const { data } = useQuery(GetWorkDocument, {
    variables: {
      id: Number(query.id),
    },
  });

  const onChangeUserName = useCallback((e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value), []);
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), []);

  const applicationWork = () => {
    const template_param = {
      work_title: data?.works_by_pk?.title,
      from_name: user?.name,
      from_email: user?.email,
    };

    send("service_3mxaipn", "template_lop0qms", template_param, "N0Z9VGngtSAYrSpz0").then(() => {
      window.alert("案件に応募しました");
      setSendMail(true);
    });
  };

  const backToWorkList = () => {
    router.push(fixBackToUrl);
  };

  return (
    <WorkInfo>
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

        {sendMail ? (
          <SendButton variant="outlined" onClick={backToWorkList}>
            案件一覧に戻る
          </SendButton>
        ) : (
          <SendButton variant="contained" onClick={applicationWork}>
            案件に応募する
          </SendButton>
        )}
      </ProfileInfo>
    </WorkInfo>
  );
}

const WorkInfo = styled.div`
  border-radius: 8px;

  @media screen and (max-width: ${SCREEN_SIZE.PC}) {
    margin: 16px;
    padding: 16px;
  }

  @media screen and (min-width: ${SCREEN_SIZE.TABLET}) {
    background-color: ${COLOR.RIGHT_WHITE.code};
    width: 600px;
    margin: 32px auto;
    padding: 16px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${SCREEN_SIZE.SP}) {
    align-items: center;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${SCREEN_SIZE.SP}) {
    margin: 16px 0;
  }
  margin: 32px 0;
`;

const Section = styled.section`
  :not(:first-of-type) {
    margin-top: 16px;
  }
  @media screen and (min-width: ${SCREEN_SIZE.SP}) {
    width: 320px;
  }
`;

const SendButton = styled(Button)`
  margin: 32px 16px;
`;

export default ApplicationConfirm;
