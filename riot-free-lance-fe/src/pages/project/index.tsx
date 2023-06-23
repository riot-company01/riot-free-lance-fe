import { useQueryString } from "@/components/hooks/use-query-string";
import { ProjectDetail } from "@/components/project/detail";
import { ProjectList } from "@/components/project/list";
import { PATHS } from "@/const/paths";
import { useRouter } from "next/router";

export default function ProjectPage() {
  const query = useQueryString();
  const router = useRouter();

  return (
    <>
      {router.asPath.includes("id") && <ProjectDetail projectId={Number(query?.id)} />}
      {router.asPath === PATHS.PROJECT && <ProjectList />}
    </>
  );
}
