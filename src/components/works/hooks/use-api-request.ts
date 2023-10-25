import { useQuery } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { GetWorksDocument, GetSkillsDocument, Order_By } from "@/lib/graphql/graphql";

const languages = (skillId: string) => {
  return { languages: { skill_id: { _eq: Number(skillId) } } };
};

const direction = (keyword: string) => {
  return {
    description: {
      _ilike: `%${keyword}%`,
    },
  };
};

const title = (keyword: string) => {
  return {
    title: {
      _ilike: `%${keyword}%`,
    },
  };
};

export function useApiRequest() {
  const router = useRouter();
  const { user } = useUser();
  const selectedSkillIds = (router.query["skill-ids"] as string | undefined)?.split(",") || [];
  const inputKeyword = (router.query["keyword"] as string) || "";
  const sort = (router.query["sort"] as string) || "";
  const order = sort === "new" ? { createAt: Order_By.Desc } : { maxMonthlyPrice: Order_By.Desc };

  const { data: worksData } = useQuery(GetWorksDocument, {
    variables: {
      order_by: {
        ...order,
        isClosed: Order_By.Asc,
      },
      where: {
        _and: [
          ...selectedSkillIds.map((skillId) => {
            return languages(skillId);
          }),
          { _or: [direction(inputKeyword), title(inputKeyword)] },
        ],
      },
    },
  });

  const { data: skillsData } = useQuery(GetSkillsDocument, {
    variables: {
      skillsWhere: {
        works_aggregate: {
          count: { predicate: { _gt: 0 } },
        },
        _or: [
          {
            works: {
              work: direction(inputKeyword),
            },
          },
          {
            works: {
              work: title(inputKeyword),
            },
          },
        ],
        works: {
          work: {
            _and: [
              ...selectedSkillIds.map((skillId) => {
                return languages(skillId);
              }),
            ],
          },
        },
      },
      worksWhere: {
        _and: [
          ...selectedSkillIds.map((skillId) => {
            return { work: languages(skillId) };
          }),
          {
            _or: [
              {
                work: direction(inputKeyword),
              },
              {
                work: title(inputKeyword),
              },
            ],
          },
        ],
      },
    },
  });

  return { skillsData, worksData, user };
}
