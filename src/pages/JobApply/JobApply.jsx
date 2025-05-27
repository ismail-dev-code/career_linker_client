import React from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);
  return (
    <div>
      <h3 className="text-4xl">Apply Job for...</h3>
    </div>
  );
};

export default JobApply;
