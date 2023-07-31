import styled from "@emotion/styled";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox as _Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { map, groupBy } from "lodash-es";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";
import { removeObjectKey } from "@/util/remove-object-key";

type Filterer = {
  type: string;
  word: GetSkillsQuery["skills"];
};

type Props = {
  defaultFilters?: GetSkillsQuery["skills"];
  selectedSkillIds: string[];
};

type PropsAccordion = {
  nodes: Filterer;
  selectedSkillIds: string[];
};

export function LeftNavig({ defaultFilters, selectedSkillIds }: Props) {
  const [viewList, setViewList] = useState<Filterer[]>([]);

  useEffect(() => {
    if (!defaultFilters) return;
    const filterers = map(groupBy(defaultFilters, "type"), (i, key) => {
      return { type: key, word: i };
    });
    setViewList(filterers);
  }, [JSON.stringify(defaultFilters)]);

  return (
    <>
      {viewList.map((nodes) => {
        return <Accordion key={nodes.type} nodes={nodes} selectedSkillIds={selectedSkillIds} />;
      })}
    </>
  );
}

function Accordion({ nodes, selectedSkillIds }: PropsAccordion) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  return (
    <div>
      <Head
        role="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <button>{nodes.type}</button>
        <div>{isOpen ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}</div>
      </Head>
      {isOpen && (
        <FormGroup
          sx={{
            paddingBottom: 2,
          }}
        >
          {nodes.word.map((keyword) => {
            const strId = keyword.id.toString();
            const skillIds = selectedSkillIds.includes(strId) ? selectedSkillIds.filter((i) => i !== strId) : [...selectedSkillIds, strId];
            return (
              <Link
                passHref
                key={keyword.id}
                href={{
                  query:
                    skillIds.length !== 0
                      ? {
                          ...router.query,
                          [`skill-ids`]: `${skillIds.join()}`,
                        }
                      : {
                          ...removeObjectKey(router.query, "skill-ids"),
                        },
                }}
              >
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  checked={selectedSkillIds.some((i) => i === keyword.id.toString())}
                  label={
                    <Label>
                      {keyword.name} ({keyword.works_aggregate.aggregate?.count})
                    </Label>
                  }
                />
              </Link>
            );
          })}
          {/* <More>もっと見る</More> */}
        </FormGroup>
      )}
    </div>
  );
}

const Label = styled.div`
  font-size: 12px;
`;

const Checkbox = styled(_Checkbox)`
  svg {
    font-size: 16px;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

// const More = styled.div`
//   font-size: 14px;
//   text-align: right;
// `;
