import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import Loading from "../pages/Shared/Loading";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
      },
      {
        path: "/JobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
