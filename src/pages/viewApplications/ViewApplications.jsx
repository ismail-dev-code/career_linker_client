import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
  const { job_id } = useParams();
  const initialApplications = useLoaderData();
  const [applications, setApplications] = useState(initialApplications);

  const handleStatusChange = (e, app_id) => {
    axios
      .patch(`https://career-linker-server.vercel.app/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Application status updated.',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (app_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://career-linker-server.vercel.app/applications/${app_id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              setApplications((prev) =>
                prev.filter((app) => app._id !== app_id)
              );
              Swal.fire('Deleted!', 'Application has been deleted.', 'success');
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire('Error!', 'Failed to delete application.', 'error');
          });
      }
    });
  };

  return (
    <div className='my-20 px-4 md:px-10'>
      <h2 className="text-lg md:text-2xl font-bold pb-8 text-center">
        {applications.length} Applications for job ID: {job_id}
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={application._id}>
                <td>{index + 1}</td>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select select-sm md:select-md w-full max-w-xs"
                  >
                    <option disabled>Update Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(application._id)}
                    className="bg-red-600 text-white px-2 py-1 md:px-3 md:py-1.5 rounded hover:bg-red-700 text-xs md:text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
