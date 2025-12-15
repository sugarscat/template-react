import router from "@/router";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className={"bg-white dark:bg-gray-950"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
