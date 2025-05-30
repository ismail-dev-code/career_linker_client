import React, { useContext, useRef, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const titleInputRef = useRef(null);

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // Handle form submission logic here
  };

  const inputClass =
    "w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500";

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
            className={inputClass}
            required
            ref={titleInputRef}
          />

          <input
            type="text"
            name="location"
            placeholder="Location (e.g., Halishohor, Chittagong)"
            className={inputClass}
            required
          />

          <select name="jobType" className={inputClass} required>
            <option value="">Select Job Type</option>
            <option value="On-site">On-site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <input
            type="text"
            name="category"
            placeholder="Category (e.g., Engineering)"
            className={inputClass}
            required
          />

          <input
            type="date"
            name="applicationDeadline"
            className={inputClass}
            required
          />

          <input
            type="number"
            name="salaryMin"
            placeholder="Minimum Salary (e.g., 40000)"
            className={inputClass}
            required
          />

          <input
            type="number"
            name="salaryMax"
            placeholder="Maximum Salary (e.g., 60000)"
            className={inputClass}
            required
          />

          <select name="currency" className={inputClass} required>
            <option value="">Currency</option>
            <option value="bdt">BDT</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>

          <input
            type="text"
            name="company"
            placeholder="Company Name (e.g., Favorite IT)"
            className={`${inputClass} col-span-1 md:col-span-2`}
            required
          />

          <textarea
            name="description"
            placeholder="Job Description"
            rows={4}
            className={`${inputClass} col-span-1 md:col-span-2`}
            required
          ></textarea>

          <input
            type="text"
            name="requirements"
            placeholder="Requirements (comma-separated, e.g., JavaScript, React)"
            className={`${inputClass} col-span-1 md:col-span-2`}
            required
          />

          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className={`${inputClass} bg-gray-100 dark:bg-gray-700 cursor-not-allowed`}
            placeholder="User Name"
          />

          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className={`${inputClass} bg-gray-100 dark:bg-gray-700 cursor-not-allowed`}
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
