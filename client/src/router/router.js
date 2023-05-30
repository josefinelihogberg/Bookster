import LoginComponent from "../component/LoginComponent.js";
import RegisterComponent from "../component/RegisterComponent.js";
import ProfileComponent from "../component/ProfileComponent.js";
import BooksComponent from "../component/BooksComponent.js";
import UserComponent from "../component/UserComponent.js";
import UserViewComponent from "../component/UserViewComponent.js";
import AdminViewComponent from "../component/AdminViewComponent.js";
import GuestViewComponent from "../component/GuestViewComponent.js";
import AdminUsersComponent from "../component/AdminUsersComponent.js";

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
    path: "/guest",
    element: <GuestViewComponent />
  },
  {
    path: "/user/profile",
    element: <UserViewComponent />
  },
  {
    path: "/admin/profile",
    element: <AdminViewComponent />
  },
  {
    path: "/admin/users",
    element: <AdminUsersComponent />
  }
];

export default routes;
