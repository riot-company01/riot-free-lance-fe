import EditIcon from "@mui/icons-material/Edit";
import * as Styles from "./styles";
import { FileUpload } from "@/components/user/profile/common/file-upload";
import { useProfile } from "@/components/user/profile/hooks/use-profile";

type ProfileInfoProps = {
  skillSheet?: File;
};

export const ProfileInfo = ({ skillSheet }: ProfileInfoProps) => {
  const { uploadFile, onChangeUploadFile } = useProfile();

  return (
    <Styles.DivProfileInfoWrapper>
      <div>
        <Styles.DivHeadItem>
          <Styles.HeadName>基本情報</Styles.HeadName>
          <Styles.AnchorItem href={"/user/edit"}>
            <EditIcon style={{ fontSize: 16, color: "#2C345C", margin: "0 2px 5px 0" }} />
            編集
          </Styles.AnchorItem>
        </Styles.DivHeadItem>
        <Styles.DivItem>
          <Styles.HeadTitle>氏名</Styles.HeadTitle>
          <Styles.PerItem>氏名</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>かな</Styles.HeadTitle>
          <Styles.PerItem>かな</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>生年月日</Styles.HeadTitle>
          <Styles.PerItem>生年月日</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>メールアドレス</Styles.HeadTitle>
          <Styles.PerItem>メールアドレス</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>電話番号</Styles.HeadTitle>
          <Styles.PerItem>電話番号</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>地域</Styles.HeadTitle>
          <Styles.PerItem>関東東京都</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>最寄駅</Styles.HeadTitle>
          <Styles.PerItem>○○線 ○○駅</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>現在の状況</Styles.HeadTitle>
          <Styles.PerItem>フリーランス</Styles.PerItem>
        </Styles.DivItem>
      </div>
      <Styles.Hr />
      <div>
        <Styles.DivHeadItem>
          <Styles.HeadName>開発スキル・経験</Styles.HeadName>
          <Styles.AnchorItem href="/user/edit-skill">
            <EditIcon style={{ fontSize: 16, color: "#2C345C", marginBottom: "5px" }} />
            編集
          </Styles.AnchorItem>
        </Styles.DivHeadItem>
        <Styles.DivItem>
          <Styles.HeadTitle>経験職種</Styles.HeadTitle>
          <Styles.PerItem>フロントエンド</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>経験業界</Styles.HeadTitle>
          <Styles.PerItem>ゲーム、動画</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>経験言語・スキル</Styles.HeadTitle>
          <Styles.PerItem>PHP,lalaval</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>ポートフォリオ・Githubアカウント</Styles.HeadTitle>
          <Styles.AnchorLeftMargin href="https://freelance-start.com/users/profile">
            https://freelance-start.com/users/profile
          </Styles.AnchorLeftMargin>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>自己PR</Styles.HeadTitle>
          <Styles.PerItem>
            私が携わらせていただいた過去の案件においては、常にサービスが成長するために何が必要かを考え行動してきました。
            お金を頂く以上、「自宅で培ったスキルを現場で活かす」という意識で臨む必要があると強く感じているからです。
            特に私は「確認作業」を徹底してきました。リモートワークをした際には「報連相」を徹底することで認識のズレやバグを最小限に抑えることに成功し、その行動が評価され、影響箇所の少ない機能においてDB設計から担当させて頂いた実績もございます。
            案件に参画させていただいた際には「仕事をするプロ」としての自覚を常に持ち、サービスの成長に貢献できるようまずは目の前の業務から全力でこなしていきます。
            よろしくお願いします。
          </Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>スキルシート</Styles.HeadTitle>
          {skillSheet || uploadFile ? (
            <>{skillSheet?.name || uploadFile?.name}</>
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
            <EditIcon style={{ fontSize: 16, color: "#2C345C", marginBottom: "5px" }} />
            編集
          </Styles.AnchorItem>
        </Styles.DivHeadItem>
        <Styles.DivItem>
          <Styles.HeadTitle>通勤時間</Styles.HeadTitle>
          <Styles.PerItem>リモート希望</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>金額</Styles.HeadTitle>
          <Styles.PerItem>40万円</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>仕事探しのエリア</Styles.HeadTitle>
          <Styles.PerItem>かな</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>希望職種</Styles.HeadTitle>
          <Styles.PerItem>かな</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>希望業界</Styles.HeadTitle>
          <Styles.PerItem>かな</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>希望言語・開発環境</Styles.HeadTitle>
          <Styles.PerItem>かな</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>希望稼働形態</Styles.HeadTitle>
          <Styles.PerItem>かな</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>稼働可能日数/週</Styles.HeadTitle>
          <Styles.PerItem>かな</Styles.PerItem>
        </Styles.DivItem>
        <Styles.DivItem>
          <Styles.HeadTitle>案件開始可能時期</Styles.HeadTitle>
          <Styles.PerItem>かな</Styles.PerItem>
        </Styles.DivItem>
      </div>
    </Styles.DivProfileInfoWrapper>
  );
};
