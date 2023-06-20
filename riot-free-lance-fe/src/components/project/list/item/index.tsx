import { faYenSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as Styles from "./styles";

export const ProjectContent = () => {
  return (
    <Styles.DivContent>
      <Styles.HederContent>
        モバイルゲーム向け プラットフォーム
        <br />
        開発案件
      </Styles.HederContent>
      <Styles.SecContent>
        <div>
          <Styles.SpanIcon>
            <FontAwesomeIcon icon={faYenSign} size={"xl"} />
          </Styles.SpanIcon>
          800000~
        </div>
        <div>
          <Styles.SpanIcon>
            <FontAwesomeIcon icon={faLocationDot} size={"xl"} />
          </Styles.SpanIcon>
          六本木
        </div>
      </Styles.SecContent>
      <Styles.SecContentWrap>
        {[...Array(8)].map((_, idx) => (
          <Styles.PerKeyword key={idx}>キーワード</Styles.PerKeyword>
        ))}
      </Styles.SecContentWrap>
    </Styles.DivContent>
  );
};
