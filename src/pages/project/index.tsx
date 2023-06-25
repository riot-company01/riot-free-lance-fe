import Header from "@/components/header";
import { useQueryString } from "@/components/hooks/use-query-string";
import { ProjectDetail } from "@/components/project/detail";
import { ProjectList } from "@/components/project/list";
import { PATHS } from "@/const/paths";
import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0/client';


export default function ProjectPage() {
  const query = useQueryString();
  const router = useRouter();
  const { user } = useUser();


  return (
    <>
      <Header />
      { user ? 
        <>
           {router.asPath.includes("id") && <ProjectDetail projectId={Number(query?.id)} />}
           {router.asPath === PATHS.PROJECT && <ProjectList />}
        </>
       : 
       <>ログインしてください。</> 
      }
    </>
  );
}
