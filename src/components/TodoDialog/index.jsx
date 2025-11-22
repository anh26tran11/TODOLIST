import React, { useState } from "react";
import { X } from "lucide-react";

const TodoDialog = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [taskTitle, setTaskTitle] = useState("");

  const handleSave = () => {
    if (taskTitle.trim()) {
      console.log("Saving task:", taskTitle);
      setTaskTitle("");
      setIsOpen(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="border-4 border-black shadow-[4px_4px_0px_#000] bg-blue-300 px-6 py-3 font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] transition-all duration-200 rounded-md"
      >
        Add New Task
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        role="dialog"
        aria-labelledby="dialog-title"
        className="fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg p-6 sm:max-w-lg border-4 border-black shadow-[6px_6px_0px_#000] bg-pink-200 animate-in fade-in-0 zoom-in-95 duration-200"
      >
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h2 id="dialog-title" className="text-2xl font-bold">
            Add New Task
          </h2>
        </div>

        <input
          className="flex h-9 w-full rounded-md bg-white px-3 py-1 text-base shadow-sm transition-shadow outline-none border-3 border-black placeholder:text-gray-500 focus:ring-2 focus:ring-black"
          placeholder="Enter task title..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            onClick={handleSave}
            disabled={!taskTitle.trim()}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:opacity-50 h-9 px-4 py-2 border-4 border-black shadow-[4px_4px_0px_#000] bg-green-300 text-black font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] transition-all duration-200 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_#000]"
          >
            Save Task
          </button>
        </div>

        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
};

export default TodoDialog;
