import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Tasks from "./pages/Tasks";
import AppHeader from "./components/AppHeader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="tasks" />,
    },
    {
      path: "tasks",
      element: <Tasks />,
    },
  ]);

  return (
    <div>
      <AppHeader />
      <div id="app-content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
