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
import { Tag } from "@mui/icons-material";

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
        {/* 
        <Section>
          <h3>氏名</h3>
          <TextField fullWidth value={userName} onChange={onChangeUserName} />
        </Section>

        <Section>
          <h3>メールアドレス</h3>
          <TextField fullWidth value={email} onChange={onChangeEmail} />
        </Section> */}

        <Styles.DivItem>
          <Styles.DivItemWrapper>
            <Styles.DivTitleWrapper>
              <Styles.HeadContentTitle>姓</Styles.HeadContentTitle>
              <Tag isRequired />
            </Styles.DivTitleWrapper>
            <TextField
              sx={myStyle}
              variant="outlined"
              name="userFirstName"
              value={userLastName}
              placeholder="例:田中"
              onChange={onChangeUserLastName}
            />
          </Styles.DivItemWrapper>
          <Styles.DivItemWrapper>
            <Styles.DivTitleWrapper>
              <Styles.HeadContentTitle>名</Styles.HeadContentTitle>
              <Tag isRequired />
            </Styles.DivTitleWrapper>
            <TextField
              variant="outlined"
              sx={myStyle}
              name="userFirstName"
              value={userFirstName}
              placeholder="例：太郎"
              onChange={onChangeUserFirstName}
            />
          </Styles.DivItemWrapper>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.DivItemWrapper>
            <Styles.DivTitleWrapper>
              <Styles.HeadContentTitle>せい</Styles.HeadContentTitle>
              <Tag isRequired={false} />
            </Styles.DivTitleWrapper>
            <TextField
              variant="outlined"
              sx={myStyle}
              type="text"
              name="userLastName"
              value={userLastNameKana}
              placeholder="例：たなか"
              onChange={onChangeUserLastNameKana}
            />
          </Styles.DivItemWrapper>
          <Styles.DivItemWrapper>
            <Styles.DivTitleWrapper>
              <Styles.HeadContentTitle>めい</Styles.HeadContentTitle>
              <Tag isRequired={false} />
            </Styles.DivTitleWrapper>
            <TextField
              variant="outlined"
              sx={myStyle}
              type="text"
              name="userFirstName"
              value={userFirstNameKana}
              placeholder="例：たろう"
              onChange={onChangeUserFirstNameKana}
            />
          </Styles.DivItemWrapper>
        </Styles.DivItem>
        <Styles.DivWrpper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>メールアドレス</Styles.HeadContentTitle>
            <Tag isRequired />
          </Styles.DivTitleWrapper>

          <TextField
            variant="outlined"
            sx={myStyle}
            type="text"
            name="mailAddres"
            value={mailAddress}
            placeholder={user?.email ? user?.email : ""}
            onChange={onChangeMailAddress}
          />
        </Styles.DivWrpper>
        <Styles.DivWrpper>
          <Styles.DivTitleWrapper>
            <Styles.HeadContentTitle>電話番号</Styles.HeadContentTitle>
            <Tag isRequired />
          </Styles.DivTitleWrapper>

          <TextField
            variant="outlined"
            sx={myStyle}
            type="tel"
            name="phone"
            value={phoneNumber}
            placeholder={"080xxxxxxxx"}
            onChange={onChangePhoneNumber}
          />
        </Styles.DivWrpper>

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

// import { useMutation

// export const EditBasicInfo = () => {
//   const { user } = useUser();
//   const { data } = useQuery<GetUserBasicInfoQuery, GetUserBasicInfoQueryVariables>(GetUserBasicInfoDocument, {
//     variables: { id: user?.sub },
//   });
//   const { push } = useRouter();

//   const {
//     userFirstName,
//     userLastName,
//     userFirstNameKana,
//     userLastNameKana,
//     selectedYear,
//     selectedMonth,
//     selectedDay,
//     mailAddress,
//     phoneNumber,
//     selectedCurrentSituation,
//     selectedPrefecture,
//     onChangeUserFirstName,
//     onChangeUserLastName,
//     onChangeUserFirstNameKana,
//     onChangeUserLastNameKana,
//     selectYear,
//     selectMonth,
//     selectDay,
//     onChangeMailAddress,
//     onChangePhoneNumber,
//     setSelectedCurrentSituation,
//     setSelectedPrefecture,
//   } = useBasicInfo(data);

//   const [editProfileMutation] = useMutation(UseEditBasicInfoDocument);

//   const generateYearOptions = () => {
//     const currentYear = new Date().getFullYear();
//     const years = [];

//     for (let i = currentYear; i >= currentYear - 100; i--) {
//       years.push(
//         <MenuItem key={i} value={i}>
//           {i}
//         </MenuItem>
//       );
//     }

//     return years;
//   };

//   const generateMonthDayOptions = (mounthDay: number) => {
//     const months = [];

//     for (let i = 1; i <= mounthDay; i++) {
//       months.push(
//         <MenuItem key={i} value={i}>
//           {i}
//         </MenuItem>
//       );
//     }

//     return months;
//   };

//   const handleCancelButtonClick = () => {
//     push("/user/profile");
//   };

//   const handleKeepButtonClick = async () => {
//     await editProfileMutation({
//       variables: {
//         id: user?.sub || "",
//         lastName: userLastName || "",
//         firstName: userFirstName || "",
//         lastNameKana: userLastNameKana || "",
//         firstNameKana: userFirstNameKana || "",
//         birthdayYear: String(selectedYear) || "",
//         birthdayMounth: String(selectedMonth) || "",
//         birthdayDay: String(selectedDay) || "",
//         mail: mailAddress || "",
//         tel: phoneNumber || "",
//         prefectures: selectedPrefecture || "",
//         currentSituation: selectedCurrentSituation || "",
//       },
//     });
//     push("/user/profile");
//   };

//   return (

//   );
// };
