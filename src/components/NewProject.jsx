import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./modal.jsx";

function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSaveProject = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Check if the entered project data is valid
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate === ""
    ) {
      // show the modal
      modal.current.open();
      // Display an error message or prompt the user to enter valid project data
      return;
    }

    // Validate the entered project data
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-stone-800 text-2xl font-bold mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 text-xl mb-4">
          Please provide a valid input for all fields.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveProject}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Project Title" />
          <Input ref={description} label="Project Description" textarea />
          <Input type="date" ref={dueDate} label="Project Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
