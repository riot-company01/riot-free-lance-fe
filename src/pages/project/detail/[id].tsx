import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ProjectDetail } from "@/components/project/detail";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/project");
    }
  }, [isLoading, user, router]);

  return <ProjectDetail projectId={id} />;
}
