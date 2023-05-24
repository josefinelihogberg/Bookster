import LoginComponent from "../component/LoginComponent.js";
import RegisterComponent from "../component/RegisterComponent.js";
import ProfileComponent from "../component/ProfileComponent.js";
import BooksComponent from "../component/BooksComponent.js";
import UserComponent from "../component/UserComponent.js";

const routes = [
  {
    path: "*",
    element: <h2>Path not found</h2>,
  },
  {
    path: "/login",
    element: <LoginComponent />,
  },
  {
    path: "/register",
    element: <RegisterComponent />,
  },
  {
    path: "/profile",
    element: <ProfileComponent />,
  },
  {
    path: "/books",
    element: <BooksComponent/>
  },
  {
    path: "/users",
    element: <UserComponent />
  }
];

export default routes;
