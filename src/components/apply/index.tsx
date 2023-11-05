import styled from "@emotion/styled";
import { Button, Dialog, DialogTitle, TextField as _TextField } from "@mui/material";
import { Card } from "@/components/apply/card";
import { useApplication } from "@/components/apply/hooks/use-application";
import { CircularIndeterminate } from "@/components/shared/progress";

export const Apply = () => {
  const {
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
  } = useApplication();

  if (workLoading || userLoading) return <CircularIndeterminate />;

  return (
    <Wrapper>
      <Card item={workData?.works_by_pk} />
      <ProfileInfo>
        <ProfileInfo>
          <p>上記の案件に応募します</p>
          <p>下記のボタンより案件へご応募ください</p>
        </ProfileInfo>

        <DivWrapper>
          <DivTitleWrapper>
            <HeadContentTitle>名前</HeadContentTitle>
          </DivTitleWrapper>
          <TextField fullWidth variant="outlined" name="userName" value={userName} onChange={onChangeUserName} color="primary" />
        </DivWrapper>
        <DivWrapper>
          <DivTitleWrapper>
            <HeadContentTitle>なまえ</HeadContentTitle>
          </DivTitleWrapper>
          <TextField fullWidth variant="outlined" type="text" name="userNameKana" value={userNameKana} onChange={onChangeUserNameKana} />
        </DivWrapper>
        <DivWrapper>
          <DivTitleWrapper>
            <HeadContentTitle>メールアドレス</HeadContentTitle>
          </DivTitleWrapper>

          <TextField fullWidth variant="outlined" type="text" name="mailAddres" value={email} onChange={onChangeEmail} color="primary" />
        </DivWrapper>
        <DivWrapper>
          <DivTitleWrapper>
            <HeadContentTitle>電話番号</HeadContentTitle>
          </DivTitleWrapper>

          <TextField fullWidth variant="outlined" type="tel" name="phone" value={phoneNumber} onChange={onChangePhoneNumber} />
        </DivWrapper>

        <DivWrapper>
          <h3>スキルシート</h3>
          <p>マイページ作成後に実装</p>
        </DivWrapper>

        <DivWrapper>
          <SendButton variant="contained" onClick={applicationWork} size="large" color="secondary">
            案件に応募する
          </SendButton>
        </DivWrapper>
      </ProfileInfo>
      <Dialog open={openDialog}>
        <DialogTitle>案件への応募が完了しました</DialogTitle>
        <BackButton variant="outlined" onClick={backToWorkList}>
          一覧に戻る
        </BackButton>
      </Dialog>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SendButton = styled(Button)`
  font-weight: bold;
  width: 100%;
`;

const BackButton = styled(Button)`
  margin: 0 16px 16px 16px;
`;

const DivTitleWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
`;

const HeadContentTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const DivWrapper = styled.div`
  margin-top: 32px;
  padding: 0 16px 0 16px;
  width: 100%;
  max-width: 700px;
  :last-of-type {
    margin-bottom: 32px;
  }
`;

const TextField = styled(_TextField)`
  background-color: white;
`;
