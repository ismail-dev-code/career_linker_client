import React from "react";
import { motion } from "framer-motion";
console.log(motion);
const JobCard = ({ job }) => {
  const {
    title,
    category,
    company,
    description,
    company_logo,
    location,
    jobType,
  } = job;

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
        <h2 className="card-title text-lg md:text-xl">
          {title}
          <div className="badge badge-secondary">{jobType}</div>
        </h2>
        <h3 className="text-sm text-gray-500">{company}</h3>
        <p className="text-sm mt-2">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        <div className="card-actions justify-end mt-4 flex flex-wrap gap-2">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{location}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
