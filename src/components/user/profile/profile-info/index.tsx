import EditIcon from "@mui/icons-material/Edit";
import * as Styles from "./styles";
import { FileUpload } from "@/components/user/profile/common/file-upload";
import { useProfile } from "@/components/user/profile/hooks/use-profile";
import { COLOR } from "@/styles/colors";
import { useUser } from "@auth0/nextjs-auth0/client";
import { GetUserInfoDocument, GetUserInfoQuery, GetUserInfoQueryVariables } from "@/lib/graphql/graphql";
import { useQuery } from "@apollo/client";

export const ProfileInfo = () => {
  const { user } = useUser();
  const { data, loading } = useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, {
    variables: { id: user?.sub },
  });
  const userInfo = data?.users[0];
  const { uploadFile, onChangeUploadFile } = useProfile(userInfo?.file_title);

  return (
    <>
      {loading ? (
        <Styles.DivProfileInfoWrapper />
      ) : (
        <Styles.DivProfileInfoWrapper>
          <div>
            <Styles.DivHeadItem>
              <Styles.HeadName>基本情報</Styles.HeadName>
              <Styles.AnchorItem href={"/user/edit"}>
                <EditIcon sx={{ fontSize: 16, color: COLOR.BASE_COLOR.code, margin: "0 2px 5px 0" }} />
                編集
              </Styles.AnchorItem>
            </Styles.DivHeadItem>
            <Styles.DivItem>
              <Styles.HeadTitle>氏名</Styles.HeadTitle>
              <Styles.PerItem>{`${userInfo?.last_name} ${userInfo?.first_name}`}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>かな</Styles.HeadTitle>
              <Styles.PerItem>{`${userInfo?.last_name_kana} ${userInfo?.first_name_kana}`}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>生年月日</Styles.HeadTitle>
              <Styles.PerItem>
                {userInfo?.birthday_year &&
                  `${userInfo?.birthday_year}/${userInfo?.birthday_mounth}/${userInfo?.birthday_day}`}
              </Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>メールアドレス</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.mail}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>電話番号</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.tel}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>地域</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.prefectures}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>現在の状況</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.current_situation}</Styles.PerItem>
            </Styles.DivItem>
          </div>
          <Styles.Hr />
          <div>
            <Styles.DivHeadItem>
              <Styles.HeadName>開発スキル・経験</Styles.HeadName>
              <Styles.AnchorItem href="/user/edit-skill">
                <EditIcon sx={{ fontSize: 16, color: COLOR.BASE_COLOR.code, marginBottom: "5px" }} />
                編集
              </Styles.AnchorItem>
            </Styles.DivHeadItem>
            <Styles.DivItem>
              <Styles.HeadTitle>経験職種</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.professional_experience}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>経験業界</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.industries}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>経験言語・スキル</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.language_libraries}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>ポートフォリオ・Githubアカウント</Styles.HeadTitle>
              <Styles.AnchorLeftMargin ref={userInfo?.portfolio}>{userInfo?.portfolio}</Styles.AnchorLeftMargin>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>自己PR</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.self_pr}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>スキルシート</Styles.HeadTitle>
              {userInfo?.file_title || uploadFile ? (
                <>{userInfo?.file_title || uploadFile}</>
              ) : (
                <FileUpload onChange={onChangeUploadFile} />
              )}
            </Styles.DivItem>
          </div>
          <Styles.Hr />
          <div>
            <Styles.DivHeadItem>
              <Styles.HeadName>希望条件</Styles.HeadName>
              <Styles.AnchorItem href="/user/edit-desired-condition/">
                <EditIcon sx={{ fontSize: 16, color: COLOR.BASE_COLOR.code, marginBottom: "5px" }} />
                編集
              </Styles.AnchorItem>
            </Styles.DivHeadItem>
            <Styles.DivItem>
              <Styles.HeadTitle>通勤時間</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.commuting_time}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>金額</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.amount_of_money}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>仕事探しのエリア</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.preferred_place_of_work}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>希望職種</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.desired_occupation}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>希望業界</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.desired_industries}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>希望言語・開発環境</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.desired_skills}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>希望稼働形態</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.mode_of_operation}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>稼働可能日数/週</Styles.HeadTitle>
              <Styles.PerItem>{userInfo?.available_day}</Styles.PerItem>
            </Styles.DivItem>
            <Styles.DivItem>
              <Styles.HeadTitle>案件開始可能時期</Styles.HeadTitle>
              <Styles.PerItem>
                {userInfo?.project_start_time === "時期選択"
                  ? `${userInfo?.project_start_year}/${userInfo?.project_start_mounth}`
                  : userInfo?.project_start_time}
              </Styles.PerItem>
            </Styles.DivItem>
          </div>
        </Styles.DivProfileInfoWrapper>
      )}
    </>
  );
};
