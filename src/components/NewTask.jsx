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

  // Render the NewTask component
  return (
    <div className="flex items-center gap-4 mb-3">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleTaskChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClickAddTask}
      >
        <Plus className="h-8 w-8 text-stone-500 hover:text-stone-950" />
      </button>
    </div>
  );
}

export default NewTask;
