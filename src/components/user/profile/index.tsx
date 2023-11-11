import styled from "@emotion/styled";
import { Button, Snackbar, Stack, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { CircularIndeterminate } from "@/components/shared/progress";
import { useProfile } from "@/components/user/profile/hooks/use-profile";
import { BREAK_POINT } from "@/constants";

export const Profile = () => {
  const { control, userName, userNameKana, email, phoneNumber, validationRules, openDialog, userLoading, handleSubmit, editProfile, setOpenDialog } =
    useProfile();

  const handleClose = () => {
    setOpenDialog(false);
  };

  if (userLoading) return <CircularIndeterminate />;

  return (
    <Wrapper>
      <ProfileInfo>
        <DivWrapper>
          <Stack component="form" noValidate onSubmit={handleSubmit(editProfile)}>
            <DivContainer>
              <DivTitleWrapper>
                <HeadContentTitle>名前</HeadContentTitle>
              </DivTitleWrapper>
              <Controller
                name="userName"
                control={control}
                rules={validationRules.userName}
                defaultValue={userName}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="text"
                    variant="outlined"
                    name="userName"
                    sx={{ marginBottom: fieldState.invalid ? "-22.914px" : "0px" }}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </DivContainer>
            <DivContainer>
              <DivTitleWrapper>
                <HeadContentTitle>なまえ</HeadContentTitle>
              </DivTitleWrapper>
              <Controller
                name="userNameKana"
                control={control}
                rules={validationRules.userNameKana}
                defaultValue={userNameKana}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="text"
                    variant="outlined"
                    name="userNameKana"
                    sx={{ marginBottom: fieldState.invalid ? "-22.914px" : "0px" }}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </DivContainer>
            <DivContainer>
              <DivTitleWrapper>
                <HeadContentTitle>メールアドレス</HeadContentTitle>
              </DivTitleWrapper>
              <Controller
                name="email"
                control={control}
                rules={validationRules.email}
                defaultValue={email}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="email"
                    variant="outlined"
                    name="email"
                    sx={{ marginBottom: fieldState.invalid ? "-22.914px" : "0px" }}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </DivContainer>
            <DivContainer>
              <DivTitleWrapper>
                <HeadContentTitle>電話番号(ハイフンなし)</HeadContentTitle>
              </DivTitleWrapper>
              <Controller
                name="phoneNumber"
                control={control}
                rules={validationRules.phoneNumber}
                defaultValue={phoneNumber}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="tel"
                    variant="outlined"
                    name="phoneNumber"
                    sx={{ marginBottom: fieldState.invalid ? "-22.914px" : "0px" }}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </DivContainer>
          </Stack>
        </DivWrapper>

        {/* <DivWrapper>
          <h3>スキルシート</h3>
          <p>マイページ作成後に実装</p>
        </DivWrapper> */}

        <DivWrapper>
          <SendButton variant="contained" onClick={handleSubmit(editProfile)} size="large" color="secondary">
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
  margin-top: 16px;
  @media screen and (min-width: ${BREAK_POINT.md}px) {
    margin-top: 32px;
  }
`;

const DivTitleWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
  display: flex;
  :last-of-type {
    margin-bottom: 32px;
  }
`;

const HeadContentTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const DivWrapper = styled.div`
  padding: 0 16px 0 16px;
  width: 100%;
  max-width: 700px;
  :last-of-type {
    margin-bottom: 32px;
  }
`;

const DivContainer = styled.div`
  :last-of-type {
    margin-bottom: 32px;
  }
`;
