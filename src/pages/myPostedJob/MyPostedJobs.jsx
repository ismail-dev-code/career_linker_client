import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobLists from "./JobLists";
import jobsCreatedByPromise from "../../api/jobsApi";
import Loading from "../Shared/Loading";
const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>my posted jobs:</h1>
      <Suspense fallback={<Loading />}>
        <JobLists
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></JobLists>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
