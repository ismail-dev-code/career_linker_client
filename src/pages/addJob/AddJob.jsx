import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Create a Job
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="title"
            placeholder="Job Title (e.g., Software Engineer)"
            className="input-field"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location (e.g., Halishohor, Chittagong)"
            className="input-field"
            required
          />

          <select name="jobType" className="input-field" required>
            <option value="">Select Job Type</option>
            <option value="On-site">On-site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <input
            type="text"
            name="category"
            placeholder="Category (e.g., Engineering)"
            className="input-field"
            required
          />

          <input
            type="date"
            name="applicationDeadline"
            className="input-field"
            required
          />

          <input
            type="number"
            name="salaryMin"
            placeholder="Minimum Salary (e.g., 40000)"
            className="input-field"
            required
          />

          <input
            type="number"
            name="salaryMax"
            placeholder="Maximum Salary (e.g., 60000)"
            className="input-field"
            required
          />

          <select name="currency" className="input-field" required>
            <option value="">Currency</option>
            <option value="bdt">BDT</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>

          <input
            type="text"
            name="company"
            placeholder="Company Name (e.g., Favorite IT)"
            className="input-field col-span-1 md:col-span-2"
            required
          />

          <textarea
            name="description"
            placeholder="Job Description"
            rows={4}
            className="input-field col-span-1 md:col-span-2"
            required
          ></textarea>

          <input
            type="text"
            name="requirements"
            placeholder="Requirements (comma-separated, e.g., JavaScript, React)"
            className="input-field col-span-1 md:col-span-2"
            required
          />

          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="input-field bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
            placeholder="User Name"
          />

          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input-field bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
            placeholder="User Email"
          />

          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition duration-200"
          >
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
