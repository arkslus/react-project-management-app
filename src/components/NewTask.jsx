import { Plus } from "lucide-react";
import { useState } from "react";

function NewTask({ onAdd }) {
  // State to hold the entered task
  const [enteredTask, setEnteredTask] = useState("");

  // Function to handle task input change
  const handleTaskChange = (event) => {
    setEnteredTask(event.target.value);
  };

  // Function to handle adding a new task
  const handleClickAddTask = () => {
    // prevent adding an empty task
    if (enteredTask.trim() === "") return;
    // Call the provided callback function to add the task to the project's tasks array
    onAdd(enteredTask);
    // Clear the entered task input
    setEnteredTask("");
  };

  // submit on Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClickAddTask();
    }
  };

  // Render the NewTask component
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 mb-3">
      <input
        type="text"
        placeholder="New task"
        aria-label="New task"
        className="flex-1 min-w-0 w-full sm:w-64 px-3 py-2 rounded-sm bg-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-300"
        onChange={handleTaskChange}
        onKeyDown={handleKeyDown}
        value={enteredTask}
      />

      <button
        aria-label="Add task"
        className="w-full sm:w-auto flex items-center justify-center text-stone-700 hover:text-stone-950 px-3 py-2 rounded-sm"
        onClick={handleClickAddTask}
      >
        Add
        <Plus className="h-6 w-6 sm:h-8 sm:w-8 text-stone-500 hover:text-stone-950" />
      </button>
    </div>
  );
}

export default NewTask;
