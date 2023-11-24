import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import { Login } from "./domain/Login/Login";
import { Automate } from "./domain/Automate/Automate";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/automate" element={<Automate />} />
    </Routes>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export { App };
