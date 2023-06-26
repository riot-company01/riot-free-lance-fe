import { useEffect, useState } from "react";
import { Button } from "../common/button";
import * as Styles from "./styles";

export const Login = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  return (
    <Styles.DivLoginWrapper height={height} width={width}>
      <Styles.DivLoginContent>
        <p>企業様アカウントへのログインが必要です。</p>
        <p>
          弊社から配布させていただいた
          <br />
          アカウント
          <br />
          パスワード
          <br />
          を入力ください
        </p>
        <Styles.DivButtonWrapper>
          <Button
            text="ログイン"
            borderColor="#2E365A"
            backGroundCalor="#2E365A"
            onClick={() => {
              location.href = "/api/auth/login";
            }}
          />
        </Styles.DivButtonWrapper>
      </Styles.DivLoginContent>
    </Styles.DivLoginWrapper>
  );
};
