import styled from "@emotion/styled";
import { Button, Dialog, DialogTitle, TextField, Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import { Card } from "@/components/apply/card";
import { useApplication } from "@/components/apply/hooks/use-application";
import { CircularIndeterminate } from "@/components/shared/progress";
import { BREAK_POINT } from "@/constants";

export const Apply = () => {
  const {
    control,
    userName,
    userNameKana,
    email,
    phoneNumber,
    validationRules,
    openDialog,
    workData,
    workLoading,
    userLoading,
    handleSubmit,
    applicationWork,
    backToWorkList,
  } = useApplication();

  if (workLoading || userLoading) return <CircularIndeterminate />;

  return (
    <>
      <Wrapper>
        <Card item={workData?.works_by_pk} />
        <ProfileInfo>
          <ProfileInfo>
            <p>上記の案件に応募します</p>
            <p>下記のボタンより案件へご応募ください</p>
          </ProfileInfo>
          <DivWrapper>
            <Stack component="form" noValidate onSubmit={handleSubmit(applicationWork)}>
              <DivContener>
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
              </DivContener>
              <DivContener>
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
              </DivContener>
              <DivContener>
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
                      type="text"
                      variant="outlined"
                      name="email"
                      sx={{ marginBottom: fieldState.invalid ? "-22.914px" : "0px" }}
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </DivContener>
              <DivContener>
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
                      type="text"
                      variant="outlined"
                      name="phoneNumber"
                      sx={{ marginBottom: fieldState.invalid ? "-22.914px" : "0px" }}
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </DivContener>
            </Stack>
          </DivWrapper>

          {/* <DivWrapper>
          <h3>スキルシート</h3>
          <p>マイページ作成後に実装</p>
        </DivWrapper> */}

          <DivWrapper>
            <SendButton variant="contained" onClick={handleSubmit(applicationWork)} size="large" color="secondary">
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
    </>
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

const BackButton = styled(Button)`
  margin: 0 16px 16px 16px;
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

const DivContener = styled.div`
  :last-of-type {
    margin-bottom: 32px;
  }
`;
