import styled from "@emotion/styled";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox as _Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { map, groupBy } from "lodash-es";
import React, { useEffect, useState } from "react";
import type { GetSkillsQuery } from "@/lib/graphql/graphql";

type Filterer = {
  type: string;
  word: GetSkillsQuery["skills"];
};

type Props = {
  defaultFilters?: GetSkillsQuery["skills"];
  selectedValues: GetSkillsQuery["skills"];
  onSelectedValue: (args: GetSkillsQuery["skills"][number]) => void;
};

export function LeftNavig({ defaultFilters, onSelectedValue, selectedValues }: Props) {
  const [list, setList] = useState<Filterer[]>([]);

  useEffect(() => {
    if (!defaultFilters) return;
    const filterers = map(groupBy(defaultFilters, "type"), (i, key) => {
      return { type: key, word: i };
    });
    setList(filterers);
  }, [JSON.stringify(defaultFilters)]);

  return (
    <div>
      {list.map((nodes) => {
        return <Accordion key={nodes.type} nodes={nodes} onSelectedValue={onSelectedValue} selectedValues={selectedValues} />;
      })}
    </div>
  );
}

function Accordion({
  nodes,
  onSelectedValue,
  selectedValues,
}: {
  nodes: Filterer;
  onSelectedValue: Props["onSelectedValue"];
  selectedValues: GetSkillsQuery["skills"];
}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <React.Fragment>
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
        <FormGroup>
          {nodes.word.map((keyword) => {
            return (
              <FormControlLabel
                key={keyword.id}
                control={<Checkbox size="small" />}
                onChange={() => {
                  onSelectedValue(keyword);
                }}
                checked={selectedValues.some((i) => i.name === keyword.name)}
                label={
                  <Label>
                    {keyword.name} ({keyword.works_aggregate.aggregate?.count})
                  </Label>
                }
              />
            );
          })}
          <More>もっと見る</More>
        </FormGroup>
      )}
    </React.Fragment>
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
`;

const More = styled.div`
  font-size: 14px;
  text-align: right;
`;
