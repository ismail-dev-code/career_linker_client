import React from "react";
import { motion } from "framer-motion";
import { LuMapPin } from "react-icons/lu";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    _id,
    company,
    description,
    company_logo,
    location,
    jobType,
    requirements,
    salaryRange,
    applicationDeadline,
  } = job;

  const isDeadlinePassed = new Date(applicationDeadline) < new Date();
  const displayStatus = isDeadlinePassed ? "Deadline Passed" : "Active";

  return (
    <motion.div
      className="card bg-base-100 shadow-md w-full hover:z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <figure className="p-4">
        <img
          src={company_logo || "/placeholder-logo.png"}
          alt="Company Logo"
          className="w-20 h-20 object-contain"
        />
      </figure>
      <div className="card-body pt-0">
        <h2 className="card-title text-lg text-nowrap md:text-xl">
          {title}
          <div className="badge badge-secondary">{jobType}</div>
        </h2>

        <h3 className="text-sm text-gray-500">{company}</h3>

        <p className="flex items-center gap-1">
          <LuMapPin />
          {location}
        </p>
        <p className="flex items-center gap-1">
          Salary: {salaryRange.min} - {salaryRange.max}{" "}
          <FaBangladeshiTakaSign />
        </p>
        <div
          className={`badge text-white ${
            isDeadlinePassed ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {displayStatus}
        </div>
        <p className="text-sm mt-2">{description}</p>

        <div className="card-actions mt-4 text-nowrap flex flex-wrap gap-2">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline text-nowrap">
              {skill}
            </div>
          ))}
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/jobs/${_id}`} className="btn text-white bg-blue-500 hover:bg-blue-600">
            See Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
