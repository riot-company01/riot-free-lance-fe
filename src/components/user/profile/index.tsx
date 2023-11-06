import styled from "@emotion/styled";
import { Button, Snackbar, TextField as _TextField } from "@mui/material";
import { useApplication } from "@/components/apply/hooks/use-application";
import { CircularIndeterminate } from "@/components/shared/progress";

export const Profile = () => {
  const {
    userName,
    userNameKana,
    phoneNumber,
    email,
    openDialog,
    userLoading,
    onChangeUserName,
    onChangeUserNameKana,
    onChangePhoneNumber,
    onChangeEmail,
    setOpenDialog,
    applicationWork,
  } = useApplication();

  const handleClose = () => {
    setOpenDialog(false);
  };

  if (userLoading) return <CircularIndeterminate />;

  return (
    <Wrapper>
      <ProfileInfo>
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

        {/* <DivWrapper>
          <h3>スキルシート</h3>
          <p>マイページ作成後に実装</p>
        </DivWrapper> */}

        <DivWrapper>
          <SendButton variant="contained" onClick={applicationWork} size="large" color="secondary">
            保存する
          </SendButton>
        </DivWrapper>
      </ProfileInfo>
      <Snackbar open={openDialog} autoHideDuration={5000} message="更新が完了しました" onClose={handleClose} />
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
