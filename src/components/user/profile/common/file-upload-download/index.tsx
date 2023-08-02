import { useQuery, useMutation } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState } from "react";
import type { ChangeEvent } from "react";
import * as Styles from "./styles";
import type { GetSkillSheetQuery, GetSkillSheetQueryVariables } from "@/lib/graphql/graphql";
import { GetSkillSheetDocument, UploadSkillSheetDocument } from "@/lib/graphql/graphql";

const FileUploadDownloadComponent: React.FC = () => {
  const { user } = useUser();

  const { data } = useQuery<GetSkillSheetQuery, GetSkillSheetQueryVariables>(GetSkillSheetDocument, {
    variables: { id: user?.sub || "" },
  });
  const [uploadSkillSheetMutation] = useMutation(UploadSkillSheetDocument);
  const [uploadFileName, setUploadFileName] = useState(data?.users[0]?.file_name);
  const [uploadFileData, setUploadFileData] = useState(data?.users[0]?.file_data);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("aaaa");
      const file = e.target.files[0];
      try {
        console.log("dekirukana");
        if (!file) return;
        console.log("dekita");

        console.log(file);

        const reader = new FileReader();
        reader.onloadend = async () => {
          const fileData = reader.result as string;

          // ファイルをHasuraのデータベースにアップロード
          await uploadSkillSheetMutation({
            variables: { id: user?.sub || "", filename: file.name, filedata: fileData },
          });
          setUploadFileName(file.name);
          setUploadFileData(fileData);
          alert("ファイルがアップロードされました！");
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.log("dekinai");
        console.error("ファイルのアップロードエラー:", error);
      }
    }
  };

  const handleFileDownload = async () => {
    if (data && data.users[0].file_data) {
      // Base64データをBlobに変換してダウンロード
      const blob = new Blob([uploadFileData || ""], { type: "application/octet-stream" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", uploadFileName || "");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } else {
      alert("ダウンロードするファイルがありません！");
    }
  };

  return (
    <div>
      <Styles.LabelFileUpload>
        <input type="file" name="file" onChange={handleFileChange} />
        アップロードする
      </Styles.LabelFileUpload>

      <button onClick={handleFileDownload}>{uploadFileName}</button>
    </div>
  );
};

export default FileUploadDownloadComponent;
