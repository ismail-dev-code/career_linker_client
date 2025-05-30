import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import Loading from "../Shared/Loading";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";



const MyApplications = () => {
    const {user} = useAuth()
  return (
    <>
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={<Loading />}>
        <ApplicationList myApplicationsPromise={myApplicationsPromise(user?.email)}></ApplicationList>
      </Suspense>
    </>
  );
};

export default MyApplications;
