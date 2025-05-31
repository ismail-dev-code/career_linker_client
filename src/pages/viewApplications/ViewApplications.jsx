import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
  const { job_id } = useParams();
  const initialApplications = useLoaderData();
  const [applications, setApplications] = useState(initialApplications); // track updated state

  const handleStatusChange = (e, app_id) => {
    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
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
          .delete(`http://localhost:3000/applications/${app_id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              // Remove from UI
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
    <div>
      <h2 className="text-4xl">
        {applications.length} Applications for: {job_id}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th>Action</th> {/* New column */}
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select"
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
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
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
