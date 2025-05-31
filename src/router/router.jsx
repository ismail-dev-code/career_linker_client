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
import FindJob from "../components/FindJob";
import Candidates from "../components/Candidates";
import Recruiters from "../components/Recruiters";
import Blog from "../components/Blog";
import LiveChat from "../components/LiveChat";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../pages/myPostedJob/MyPostedJobs";
import ViewApplications from "../pages/viewApplications/ViewApplications";

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
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications></ViewApplications>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.job_id}`),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/findJob",
        element: <FindJob></FindJob>,
      },
      {
        path: "/candidates",
        element: <Candidates />,
      },
      {
        path: "/recruiters",
        element: <Recruiters />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/liveChat",
        element: (
          <PrivateRoute>
            <LiveChat />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
