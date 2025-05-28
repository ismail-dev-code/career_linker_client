import React from "react";
import { AiFillLike } from "react-icons/ai";
const Blog = () => {
  const blogData = [
    {
      title: "Top 10 Resume Tips for Job Seekers",
      summary: "Craft a resume that gets you noticed with these expert tips.",
      author: "HR Daily",
    },
    {
      title: "How to Ace a Job Interview",
      summary:
        "Learn key strategies to impress your interviewer and land the job.",
      author: "Career Boost",
    },
    {
      title: "Remote Work: What Recruiters Look For",
      summary:
        "Discover what qualities make candidates ideal for remote roles.",
      author: "WorkWorld",
    },
    {
      title: "The Importance of Soft Skills in the Workplace",
      summary: "Why communication and adaptability matter more than ever.",
      author: "HR Minds",
    },
    {
      title: "5 Red Flags Recruiters Watch Out For",
      summary: "Common mistakes candidates make during the hiring process.",
      author: "Hiring Pro",
    },
    {
      title: "LinkedIn Optimization Tips for Job Seekers",
      summary: "Make your LinkedIn profile stand out to recruiters.",
      author: "CareerNet",
    },
    {
      title: "Employee Retention Strategies for Managers",
      summary: "How to keep your best talent engaged and loyal.",
      author: "PeopleFirst",
    },
    {
      title: "Writing Effective Job Descriptions",
      summary:
        "Attract the right candidates with clear and compelling job ads.",
      author: "Recruitment Today",
    },
    {
      title: "Top Skills Employers Are Looking for in 2025",
      summary: "Stay ahead of trends and upgrade your skillset.",
      author: "FutureWork",
    },
    {
      title: "Navigating Career Changes in Midlife",
      summary: "Tips for successfully switching careers after 40.",
      author: "LifeShift",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogData.map((blog, index) => (
        <div
          key={index}
          className="card bg-white shadow-md p-5 rounded-lg border border-gray-200"
        >
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
          <p className="text-gray-600 mb-2">{blog.summary}</p>
          <p className="text-sm text-gray-400">By {blog.author}</p>
          <button>
            <AiFillLike
              size={25}
              className="mt-3 text-violet-500 cursor-pointer"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
