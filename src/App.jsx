import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";

import { Login } from "./domain/Login/Login";
import { Automate } from "./domain/Automate/Automate";
import store from "./Modules/rtk/store";

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export { App };
