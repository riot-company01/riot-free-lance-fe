import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import * as Styles from "./styles";

export const Loading = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  return (
    <Styles.DivLoadingWrapper height={height} width={width}>
      <ReactLoading
        type="spin"
        color="black"
        height={width <= 599 ? "80px" : "100px"}
        width={width <= 599 ? "80px" : "100px"}
        className="mx-auto"
      />
    </Styles.DivLoadingWrapper>
  );
};
