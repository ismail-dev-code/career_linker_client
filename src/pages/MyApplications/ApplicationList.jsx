import React, { use } from "react";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div>
      <h3 className="text-3xl">Job applied so far: {applications.length}</h3>
    </div>
  );
};

export default ApplicationList;
