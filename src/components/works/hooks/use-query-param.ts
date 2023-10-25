import { useRouter } from "next/router";

export function useQueryParam() {
  const router = useRouter();
  const selectedSkillIds = (router.query["skill-ids"] as string | undefined)?.split(",") || [];
  return { selectedSkillIds };
}
