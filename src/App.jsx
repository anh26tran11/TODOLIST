import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoItem";
function App() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none p-8 mb-8">
        <h1 class="text-4xl font-black text-black mb-2 text-center">
          FUTURE TO DO LIST
        </h1>
        <p class="text-lg font-bold text-black text-center mb-6">
          Your mission control dashboard
        </p>
        <TodoHeader />
        <button
          class="bg-green-300 w-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none p-4 inline-block hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-«r0»"
          data-state="closed"
          data-slot="dialog-trigger"
        >
          <p class="text-xl font-black text-black">Add New Task</p>
        </button>
        <div class="flex gap-3 mt-6">
          <button class="px-4 w-full py-2 border-3 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 shadow-[3px_3px_0px_#000] bg-yellow-300">
            All
          </button>
          <button class="px-4 w-full bg-green-300 py-2 border-3 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 shadow-[3px_3px_0px_#000]  bg-gray-200">
            Active
          </button>
          <button class="px-4 bg-orange-300 py-2 w-full border-3 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 shadow-[3px_3px_0px_#000] bg-gray-200">
            Completed
          </button>
        </div>
        <input
          placeholder="Search tasks..."
          class="w-full mt-6 p-3 border-3 border-black 
                     shadow-[3px_3px_0px_#000] focus:outline-none 
                     bg-white placeholder-gray-400"
          type="text"
          value=""
        ></input>
      </div>
      <TodoItem />
    </div>
  );
}

export default App;
