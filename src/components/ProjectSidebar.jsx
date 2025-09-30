import { ListCheck, Plus } from "lucide-react";
import Button from "./Button.jsx";
function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72  rounded-r-xl">
      <h2 className="mb-7 font-bold uppercase md:text-2xl text-[#e0afa0] flex items-center">
        My Projects
        <ListCheck className="inline-block h-7 w-7 mx-1" />
      </h2>
      <div>
        <Button onClick={onStartAddProject}>
          <Plus className="inline-block h-5 w-5" /> Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          // Add event handler to call onSelectProject with the project ID when clicked
          return (
            <li key={project.id}>
              <Button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </Button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectSidebar;
