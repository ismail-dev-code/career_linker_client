import React, { use } from 'react';
import { Link } from 'react-router'; 

const JobLists = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Jobs Created by You: {jobs.length}
      </h2>

      {jobs.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No jobs found.</p>
      ) : (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow rounded-lg">
          <table className="table w-full text-sm text-left text-gray-700 dark:text-gray-200">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Job Title</th>
                <th className="px-4 py-2">Deadline</th>
                <th className="px-4 py-2">Applications</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id} className="border-t border-gray-200 dark:border-gray-600">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{job.title}</td>
                  <td className="px-4 py-2">{job.deadline}</td>
                  <td className="px-4 py-2">{job.application_count}</td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/applications/${job._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View Applications
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JobLists;
