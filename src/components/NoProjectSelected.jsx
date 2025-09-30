// import the no project image
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-stone-800 text-2xl font-bold mt-4 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-600 text-xl mb-4">
        Select a project from the sidebar to view its details and update tasks.
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Start a New Project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
