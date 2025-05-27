import React from "react";
import { MdDelete } from "react-icons/md";
const JobApplicationRow = ({ application, index, onDelete }) => {
  const {
    company,
    title,
    company_logo,
    referralSource,
    jobId,
    submittedAt,
    applicantEmail,
    _id,
  } = application;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt={company} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm text-gray-500">{company}</div>
          </div>
        </div>
      </td>
      <td>
        {referralSource}
        <br />
        <span className="badge badge-ghost badge-sm">{submittedAt}</span>
      </td>
      <td>{applicantEmail}</td>
      <td>{jobId}</td>
      <td>
        <button
          className="cursor-pointer text-violet-500"
          onClick={() => onDelete(application._id)}
        >
          <MdDelete size={30} />
        </button>
      </td>
    </tr>
  );
};

export default JobApplicationRow;
