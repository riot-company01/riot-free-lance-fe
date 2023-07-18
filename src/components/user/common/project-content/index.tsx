import { faYenSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import * as Styles from "./styles";
import { KeywordTag } from "@/components/project/common/keyword-tag";
import type { GetAllProjectQuery } from "@/lib/graphql/graphql";

type Props = { item: GetAllProjectQuery["project"][0] };

export const ProjectContent = ({ item }: Props) => {
  const { id, price, projectName } = item;
  return (
    <Styles.DivListItemWrapper>
      <Link href={`/project/detail/${id}`} passHref>
        <Styles.DivContent>
          <Styles.HederContent>{projectName}</Styles.HederContent>
          <Styles.SecContent>
            <Styles.DivPriceWrapper>
              <Styles.SpanIcon>
                <FontAwesomeIcon icon={faYenSign} size={"xl"} />
              </Styles.SpanIcon>
              {price === "応相談" ? (
                <p>{price}</p>
              ) : (
                <Styles.PerPrice>
                  〜 <Styles.SpanPriceColor>{price}</Styles.SpanPriceColor>
                  万円/月
                </Styles.PerPrice>
              )}
            </Styles.DivPriceWrapper>
            <Styles.DivPriceWrapper>
              <Styles.SpanIcon>
                <FontAwesomeIcon icon={faLocationDot} size={"xl"} />
              </Styles.SpanIcon>
              六本木
            </Styles.DivPriceWrapper>
          </Styles.SecContent>
          <Styles.SecContentWrap>
            {item.keyword.map((item: string, idx: number) => (
              <KeywordTag key={idx}>{item}</KeywordTag>
            ))}
          </Styles.SecContentWrap>
        </Styles.DivContent>
      </Link>
    </Styles.DivListItemWrapper>
  );
};
