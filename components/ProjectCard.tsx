import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md p-5 w-full max-w-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{project.name}</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
        {project.description}
      </p>
      <div className="flex justify-between items-center">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white font-extralight hover:underline"
        >
          <FaGithub className="mr-2" /> View Repo
        </a>
        {project.language && (
          <span className="text-xs text-gray-500">{project.language}</span>
        )}
      </div>
    </div>
  );
}
