
import MyProjects from "@/components/modules/Project/Projects";
import { getAllProjects } from "@/services/ProjectServices";
import { Metadata } from "next";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export const metadata: Metadata = {
  title: "Projects | Explore My Latest Web & App Development Work",
  description:
    "Browse a collection of innovative projects showcasing my skills in web and app development. From backend APIs to dynamic frontend designs, explore how I bring ideas to life through code.",
};

const AllBlogsPage = async () => {
    const projects = await getAllProjects({limit:30});
    
  return (
    <div className="pt-30">
         <div className="category_top bg-gray-100 py-4 md:py-6 mb-5">
        <div className="main-container">
          <div className="text-[#1F1C1466] text-sm font-semibold flex items-center gap-1">
            <span className="text-xl"><GoHome /></span>
            <Link href={`/`} className="hover:text-primary">Home</Link>
            <span><IoIosArrowForward /></span>
            <Link href={`/projects`} className="text-primary">Projects</Link>
          </div>
        </div>
      </div>
      <MyProjects projects={projects.data} />
    </div>
  );
};

export default AllBlogsPage;
