import Swal from "sweetalert2";
import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const initialApplications = use(myApplicationsPromise);
  const [applications, setApplications] = React.useState(initialApplications);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`https://career-linker-server.vercel.app/applications/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.deletedCount > 0) {
        setApplications(applications.filter((app) => app._id !== id));
        await Swal.fire("Deleted!", "Your application has been deleted.", "success");
      } else {
        await Swal.fire("Failed!", "Could not delete the application.", "error");
      }
    } catch (err) {
      console.error(err);
      await Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="my-22">
      <h3 className="text-3xl">Job applied so far: {applications.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Company & Position</th>
              <th>Reference Source</th>
              <th>Applicant Email</th>
              <th>Job ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationRow
                key={application._id}
                application={application}
                index={index}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
