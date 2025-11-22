import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoItem";
function App() {
  return (
    <>
      <TodoHeader />
      <TodoItem />
    </>
  );
}

export default App;
