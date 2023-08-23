import styled from "@emotion/styled";
import { Button, Dialog, DialogTitle, Skeleton, TextField } from "@mui/material";
import { CustomCard } from "@/components/apply/lg/card";
import { useApplication } from "@/components/apply/hooks/use-application";

export const ApplyLg = () => {
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

  return (
    <>
      <CustomCard item={workData?.works_by_pk} loading={workLoading} />
      {!userLoading ? (
        <>
          <ProfileInfo>
            <ProfileInfo>
              <p>上記の案件に応募します</p>
              <p>下記のボタンより案件へご応募ください</p>
            </ProfileInfo>

            <DivWrpper>
              <DivTitleWrapper>
                <HeadContentTitle>名前</HeadContentTitle>
              </DivTitleWrapper>
              <TextField fullWidth variant="outlined" name="userName" value={userName} onChange={onChangeUserName} />
            </DivWrpper>
            <DivWrpper>
              <DivTitleWrapper>
                <HeadContentTitle>なまえ</HeadContentTitle>
              </DivTitleWrapper>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="userNameKana"
                value={userNameKana}
                onChange={onChangeUserNameKana}
              />
            </DivWrpper>
            <DivWrpper>
              <DivTitleWrapper>
                <HeadContentTitle>メールアドレス</HeadContentTitle>
              </DivTitleWrapper>

              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="mailAddres"
                value={email}
                onChange={onChangeEmail}
              />
            </DivWrpper>
            <DivWrpper>
              <DivTitleWrapper>
                <HeadContentTitle>電話番号</HeadContentTitle>
              </DivTitleWrapper>

              <TextField
                fullWidth
                variant="outlined"
                type="tel"
                name="phone"
                value={phoneNumber}
                onChange={onChangePhoneNumber}
              />
            </DivWrpper>

            <DivWrpper>
              <h3>スキルシート</h3>
              <p>マイページ作成後に実装</p>
            </DivWrpper>

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
      ) : (
        <ProfileInfo>
          <WrapperSkeleton>
            <CustomSkeleton variant="rectangular" height={"100%"} />
          </WrapperSkeleton>
          <SkeltonWrapper>
            <SkeltonTitleWrapper>
              <TitleWrapperSkeleton>
                <CustomSkeleton variant="rectangular" height={"100%"} />
              </TitleWrapperSkeleton>
            </SkeltonTitleWrapper>
            <SkeltonTextFieldWrapper>
              <TextFieldWrapperSkeleton>
                <CustomSkeleton variant="rectangular" height={"100%"} />
              </TextFieldWrapperSkeleton>
            </SkeltonTextFieldWrapper>
          </SkeltonWrapper>
          <SkeltonWrapper>
            <SkeltonTitleWrapper>
              <TitleWrapperSkeleton>
                <CustomSkeleton variant="rectangular" height={"100%"} />
              </TitleWrapperSkeleton>
            </SkeltonTitleWrapper>
            <SkeltonTextFieldWrapper>
              <TextFieldWrapperSkeleton>
                <CustomSkeleton variant="rectangular" height={"100%"} />
              </TextFieldWrapperSkeleton>
            </SkeltonTextFieldWrapper>
          </SkeltonWrapper>
          <SkeltonWrapper>
            <SkeltonTitleWrapper>
              <TitleWrapperSkeleton>
                <CustomSkeleton variant="rectangular" height={"100%"} />
              </TitleWrapperSkeleton>
            </SkeltonTitleWrapper>
            <SkeltonTextFieldWrapper>
              <TextFieldWrapperSkeleton>
                <CustomSkeleton variant="rectangular" height={"100%"} />
              </TextFieldWrapperSkeleton>
            </SkeltonTextFieldWrapper>
          </SkeltonWrapper>
          <SkeltonWrapper>
            <SkeltonTitleWrapper>
              <TitleWrapperSkeleton>
                <CustomSkeleton variant="rectangular" height={"100%"} />
              </TitleWrapperSkeleton>
            </SkeltonTitleWrapper>
            <SkeltonTextFieldWrapper>
              <TextFieldWrapperSkeleton>
                <CustomSkeleton variant="rectangular" height={"100%"} />
              </TextFieldWrapperSkeleton>
            </SkeltonTextFieldWrapper>
          </SkeltonWrapper>
        </ProfileInfo>
      )}
    </>
  );
};

const WrapperSkeleton = styled.div`
  border-radius: 8px;
  width: 288px;
  height: 50px;
`;

const CustomSkeleton = styled(Skeleton)`
  border-radius: 8px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SendButton = styled(Button)`
  margin: 32px 16px;
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

const DivWrpper = styled.div`
  margin-top: 32px;
  padding: 0 16px 0 16px;
  width: 454px;
`;

const SkeltonWrapper = styled.div`
  width: 454px;
`;

const SkeltonTitleWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
  padding: 0 16px 0 16px;
  width: 120px;
  height: 32px;
`;

const TitleWrapperSkeleton = styled.div`
  border-radius: 8px;
  width: 120px;
  height: 32px;
`;

const SkeltonTextFieldWrapper = styled.div`
  padding: 0 16px 0 16px;
  width: 422px;
  height: 55px;
`;

const TextFieldWrapperSkeleton = styled.div`
  border-radius: 8px;
  width: 422px;
  height: 55px;
`;
