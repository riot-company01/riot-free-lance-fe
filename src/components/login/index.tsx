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
      <Button
        text="ログイン"
        borderColor="#2E365A"
        backGroundCalor="#2E365A"
        onClick={() => {
          location.href = "/api/auth/login";
        }}
      />
    </Styles.DivLoginWrapper>
  );
};
