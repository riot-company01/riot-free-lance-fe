import { NextLink } from "@/components/common/next-link";
import { PATHS } from "@/const/paths";
import { GetAllProjectQuery } from "@/lib/graphql/graphql";
import { faYenSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeywordTag } from "../../common/keyword-tag";

import * as Styles from "./styles";

type Props = { item: GetAllProjectQuery["project"][0] };

export const ProjectContent = ({ item }: Props) => {
  const { id, price, projectName } = item;
  return (
    <NextLink href={{ pathname: PATHS.PROJECT, query: { id } }}>
      <Styles.DivContent>
        <Styles.HederContent>{projectName}</Styles.HederContent>
        <Styles.SecContent>
          <div>
            <Styles.SpanIcon>
              <FontAwesomeIcon icon={faYenSign} size={"xl"} />
            </Styles.SpanIcon>
            {price}
          </div>
          <div>
            <Styles.SpanIcon>
              <FontAwesomeIcon icon={faLocationDot} size={"xl"} />
            </Styles.SpanIcon>
            六本木
          </div>
        </Styles.SecContent>
        <Styles.SecContentWrap>
          {item.keyword.map((item: string, idx: number) => (
            <KeywordTag key={idx}>{item}</KeywordTag>
          ))}
        </Styles.SecContentWrap>
      </Styles.DivContent>
    </NextLink>
  );
};
