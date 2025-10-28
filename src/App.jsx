import { useState } from "react";
import { Menu } from "lucide-react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  }); // State to hold the selected project's ID and list of projects

  // Function to handle adding a new task
  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      // Generate a unique ID for the new project
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  // function to handle deleting a task from the project's tasks array
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // Function to handle selecting a project for editing or viewing
  function handleSelectProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  // Function to handle deleting a project from the list of projects
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  // Function to handle selecting a project for editing or viewing
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  // Function to handle canceling adding a new project
  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  // Function to handle adding a new project to the list of projects
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      // Generate a unique ID for the new project
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // Find the selected project from the list of projects based on the selectedProjectId state
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  // Determine the content to be displayed based on the selected project
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  // If no project is selected, display the NewProject component
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
    // If a project is selected, display the NoProjectSelected component
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#e0afa0]">
      {/* Mobile header with menu button */}
      <header className="md:hidden flex items-center justify-between p-3">
        <button
          aria-label="Open sidebar"
          className="p-2 rounded-md bg-stone-800 text-stone-50"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold text-stone-800">Project Manager</h1>
        <div style={{ width: 40 }} />
      </header>

      <main className="h-[calc(100vh-48px)] md:h-screen flex">
        {/* Sidebar (overlay on mobile) */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-72 transform bg-transparent transition-transform md:static md:translate-x-0 md:block ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ProjectSidebar
            onStartAddProject={() => {
              handleStartAddProject();
              setSidebarOpen(false);
            }}
            projects={projectState.projects}
            onSelectProject={(id) => {
              handleSelectProject(id);
              setSidebarOpen(false);
            }}
            selectedProjectId={projectState.selectedProjectId}
          />
        </div>

        {/* Backdrop when sidebar open on mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Main content area */}
        <div className="flex-1 p-4 overflow-auto">
          {content}
        </div>
      </main>
    </div>
  );
}

export default App;
