import styled from "@emotion/styled";
import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { Card } from "@/components/apply/card";
import { useApplication } from "@/components/apply/hooks/use-application";
import { CircularIndeterminate } from "@/components/shared/progress";
import { Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import { color } from "framer-motion";

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
              <DivTitleWrapper>
                <HeadContentTitle>名前</HeadContentTitle>
              </DivTitleWrapper>
              <Controller
                name="userName"
                control={control}
                rules={validationRules.userName}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="text"
                    variant="outlined"
                    name="userName"
                    placeholder={userName || ""}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Stack>
          </DivWrapper>
          <DivWrapper>
            <DivTitleWrapper>
              <HeadContentTitle>なまえ</HeadContentTitle>
            </DivTitleWrapper>
            <TextField fullWidth variant="outlined" type="text" name="userNameKana" value={userNameKana} />
          </DivWrapper>
          <DivWrapper>
            <DivTitleWrapper>
              <HeadContentTitle>メールアドレス</HeadContentTitle>
            </DivTitleWrapper>

            <TextField fullWidth variant="outlined" type="text" name="mailAddres" value={email} />
          </DivWrapper>
          <DivWrapper>
            <DivTitleWrapper>
              <HeadContentTitle>電話番号</HeadContentTitle>
            </DivTitleWrapper>

            <TextField fullWidth variant="outlined" type="tel" name="phone" value={phoneNumber} />
          </DivWrapper>

          {/* <DivWrapper>
          <h3>スキルシート</h3>
          <p>マイページ作成後に実装</p>
        </DivWrapper> */}

          <DivWrapper>
            <SendButton variant="contained" onSubmit={handleSubmit(applicationWork)} size="large" color="secondary">
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
