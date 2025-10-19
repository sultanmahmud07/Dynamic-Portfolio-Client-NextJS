
import ProjectDetails from "@/components/modules/Project/ProjectDetails";
import { getProjectBySlug } from "@/services/ProjectServices";

// export const generateStaticParams = async () => {
//   const projects = await getAllProjects({limit:20});
//   return projects.data.map((project: IProject) => ({
//     slug: String(project.slug),
//   }));
// };

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return {
    title: project?.title,
    description: project?.excerpt,
  };
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  return (
    <div className="py-20">
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
