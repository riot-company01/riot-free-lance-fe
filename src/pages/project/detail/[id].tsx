import { ProjectDetail } from "@/components/project/detail";
import { useRouter } from "next/router";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  return <ProjectDetail projectId={id} />;
}
