import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;

    const application = {
      jobId,
      applicantEmail: user?.email,
      applicantName: user?.displayName,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      position: form.position.value,
      coverLetter: form.coverLetter.value,
      referralSource: form.referralSource.value,
      interviewTime: form.interviewTime.value,
      resume: form.resume.value,
      submittedAt: new Date().toISOString(),
    };

     axios
    .post("http://localhost:3000/applications", application)
    .then((res) => {
      if (res.data.insertedId || res.data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          text: "Your job application has been successfully submitted.",
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Please try again later.",
        });
      }
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error Occurred",
        text: "Something went wrong. Please check console.",
      });
    });

  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
          Apply for this job: <Link to={`/jobs/${jobId}`}>Details</Link>
        </h2>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
          Please fill out the form below to submit your job application.
        </p>

        <form
          onSubmit={handleJobApply}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="label-text">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="label-text">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Job Position */}
          <div className="md:col-span-2">
            <label htmlFor="position" className="label-text">
              Job Position
            </label>
            <select
              id="position"
              name="position"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Job Position</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
              <option>UI/UX Designer</option>
              <option>Graphic Designer</option>
              <option>Digital Marketer</option>
              <option>Content Writer</option>
              <option>Sales Executive</option>
              <option>Customer Support Agent</option>
              <option>Accountant</option>
              <option>HR Manager</option>
              <option>Project Manager</option>
              <option>Data Analyst</option>
              <option>Software Engineer</option>
              <option>Business Analyst</option>
              <option>DevOps Engineer</option>
              <option>Machine Learning Engineer</option>
              <option>Teacher / Instructor</option>
              <option>Legal Advisor</option>
              <option>Healthcare Assistant</option>
            </select>
          </div>

          {/* Cover Letter */}
          <div className="md:col-span-2">
            <label htmlFor="coverLetter" className="label-text">
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="referralSource" className="label-text">
              How were you referred to us?
            </label>
            <select
              id="referralSource"
              name="referralSource"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select an option</option>
              <option>Company Website</option>
              <option>Social Media (Facebook, LinkedIn, etc.)</option>
              <option>Employee Referral</option>
              <option>Online Job Board</option>
              <option>Recruitment Agency</option>
              <option>College/University</option>
              <option>Career Fair</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="interviewTime" className="label-text">
              Preferred Interview Time
            </label>
            <input
              type="time"
              name="interviewTime"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Resume Link */}
          <div>
            <label htmlFor="resume" className="label-text">
              Resume Link (Google Drive, Dropbox, etc.)
            </label>
            <input
              type="url"
              name="resume"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* User Name (Read-only) */}
          <div>
            <label className="label-text">Applicant Name</label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700"
            />
          </div>

          {/* User Email (Read-only) */}
          <div>
            <label className="label-text">Applicant Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="btn btn-primary w-full md:w-auto px-6"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
