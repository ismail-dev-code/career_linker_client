import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router"; 

const JobDetails = () => {
  const job = useLoaderData();

  const {
    title,
    _id,
    company,
    description,
    company_logo,
    location,
    jobType,
    requirements,
    responsibilities,
    salaryRange,
    applicationDeadline,
    category,
    hr_email,
    hr_name,
  } = job;

  const isDeadlinePassed = new Date(applicationDeadline) < new Date();
  const displayStatus = isDeadlinePassed ? "Deadline Passed" : "Active";

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-base-100 shadow-2xl rounded-2xl">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={company_logo || "/placeholder-logo.png"}
            alt={`${company} logo`}
            className="w-32 h-32 object-contain shadow-2xl p-2 rounded-lg"
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-primary">{title}</h1>
          <h2 className="text-lg text-gray-600">{company}</h2>

          <div className="flex flex-wrap gap-3">
            <span className="badge badge-outline">{jobType}</span>
            <span className="badge badge-outline">{location}</span>
            <span className="badge badge-outline">{category}</span>
            <span className={`badge text-white ${isDeadlinePassed ? "bg-red-600" : "bg-green-600"}`}>
              Status: {displayStatus}
            </span>
          </div>

          <p className="text-gray-700">
            <strong>Description:</strong> {description}
          </p>

          {requirements?.length > 0 && (
            <div>
              <strong>Requirements:</strong>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {responsibilities?.length > 0 && (
            <div>
              <strong>Responsibilities:</strong>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {responsibilities.map((item, i) => (
                  <li key={i + 100}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-gray-700 flex items-center gap-2">
            <strong>Salary Range:</strong> {salaryRange.min} - {salaryRange.max}
            <FaBangladeshiTakaSign />
          </p>

          <p className="text-gray-700">
            <strong>Application Deadline:</strong> {applicationDeadline}
          </p>

          <p className="text-gray-700">
            <strong>HR Name:</strong> {hr_name}
          </p>
          <p className="text-gray-700">
            <strong>HR Email:</strong> {hr_email}
          </p>

          <p className="text-gray-700">
            <strong>Job ID:</strong> {_id}
          </p>

          <Link to={`/JobApply/${_id}`}
            className="btn btn-primary"
            disabled={isDeadlinePassed}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
