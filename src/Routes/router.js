import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Projects/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/project/:id',
        element: <ProjectDetails />
      },
    ]
  }
])