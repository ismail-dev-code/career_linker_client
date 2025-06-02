import React, { useEffect, useState } from "react";
import JobCard from "../Shared/JobCard";
import Loading from "../Shared/Loading";
import Swal from "sweetalert2";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); 

  useEffect(() => {
    fetch("https://career-linker-server.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch jobs:", err);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Failed to fetch jobs. Please try again later.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Okay",
        });
      });
  }, []);

  const displayedJobs = showAll ? jobs : jobs.slice(0, 6);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <Loading />
      </div>
    );
  }

  return (
    <div className="my-10 px-4 md:px-8 lg:px-16">
      <h1 className="text-2xl font-bold mb-6 text-center">
        🔥 Hot Jobs for you ({jobs.length})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedJobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>

      {/* Show All Button */}
      {!showAll && jobs.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            Show All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default HotJobs;
