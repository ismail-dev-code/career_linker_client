import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
  const { user } = useAuth();

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Salary
    const { min, max, currency, ...jobData } = data;
    jobData.salaryRange = { min, max, currency };

    // Requirements & Responsibilities
    jobData.requirements = data.requirements.split(',').map((req) => req.trim());
    jobData.responsibilities = data.responsibilities.split(',').map((res) => res.trim());

    jobData.status = 'active';

    axios
      .post('http://localhost:3000/jobs', jobData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'This new Job has been saved and published.',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Add a New Job</h2>

      <form onSubmit={handleAddAJob} className="space-y-6">
        {/* Basic Info */}
        <fieldset className="bg-base-200 border rounded-xl p-6 space-y-4">
          <legend className="text-lg font-semibold mb-2">Basic Info</legend>
          <input type="text" name="title" placeholder="Job Title" className="input w-full" required />
          <input type="text" name="company" placeholder="Company Name" className="input w-full" required />
          <input type="text" name="location" placeholder="Company Location" className="input w-full" required />
          <input type="text" name="company_logo" placeholder="Company Logo URL" className="input w-full" />
        </fieldset>

        {/* Job Type */}
        <fieldset className="bg-base-200 border rounded-xl p-6">
          <legend className="text-lg font-semibold mb-2">Job Type</legend>
          <div className="flex flex-wrap gap-3">
            <label><input type="radio" name="jobType" value="On-Site" className="mr-1" required />On-Site</label>
            <label><input type="radio" name="jobType" value="Remote" className="mr-1" />Remote</label>
            <label><input type="radio" name="jobType" value="Hybrid" className="mr-1" />Hybrid</label>
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="bg-base-200 border rounded-xl p-6">
          <legend className="text-lg font-semibold mb-2">Job Category</legend>
          <select name="category" className="select w-full" required>
            <option value="" disabled>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="bg-base-200 border rounded-xl p-6">
          <legend className="text-lg font-semibold mb-2">Application Deadline</legend>
          <input type="date" name="deadline" className="input w-full" required />
        </fieldset>

        {/* Salary */}
        <fieldset className="bg-base-200 border rounded-xl p-6 space-y-4">
          <legend className="text-lg font-semibold mb-2">Salary Range</legend>
          <div className="grid md:grid-cols-3 gap-4">
            <input type="text" name="min" placeholder="Minimum Salary" className="input w-full" required />
            <input type="text" name="max" placeholder="Maximum Salary" className="input w-full" required />
            <select name="currency" className="select w-full" required>
              <option value="" disabled>Select a Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EU</option>
            </select>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="bg-base-200 border rounded-xl p-6">
          <legend className="text-lg font-semibold mb-2">Job Description</legend>
          <textarea name="description" placeholder="Job Description" className="textarea w-full" rows={4} required />
        </fieldset>

        {/* Requirements */}
        <fieldset className="bg-base-200 border rounded-xl p-6">
          <legend className="text-lg font-semibold mb-2">Job Requirements</legend>
          <textarea name="requirements" placeholder="e.g., JavaScript, React" className="textarea w-full" rows={3} required />
        </fieldset>

        {/* Responsibilities */}
        <fieldset className="bg-base-200 border rounded-xl p-6">
          <legend className="text-lg font-semibold mb-2">Job Responsibilities</legend>
          <textarea name="responsibilities" placeholder="e.g., Build UI, Write Tests" className="textarea w-full" rows={3} required />
        </fieldset>

        {/* HR Info */}
        <fieldset className="bg-base-200 border rounded-xl p-6 space-y-4">
          <legend className="text-lg font-semibold mb-2">HR Information</legend>
          <input type="text" name="hr_name" placeholder="HR Name" className="input w-full" required />
          <input type="email" name="hr_email" defaultValue={user?.email} placeholder="HR Email" className="input w-full" readOnly />
        </fieldset>

        <div className="text-center">
          <input type="submit" value="Add Job" className="btn btn-primary w-full md:w-1/2" />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
