import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const jobSeekerLinks = [
  { label: "Browse Jobs", href: "#" },
  { label: "Upload Resume", href: "#" },
  { label: "Career Advice", href: "#" },
  { label: "Remote Opportunities", href: "#" },
];

const employerLinks = [
  { label: "Post a Job", href: "#" },
  { label: "Search Candidates", href: "#" },
  { label: "Employer Login", href: "#" },
  { label: "Pricing Plans", href: "#" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks = [
  {
    icon: <FaYoutube size={25} />,
    title: "YouTube",
    href: "https://github.com/ismail-dev-code",
    target: "_blank",
  },
  {
    icon: <FaTwitter size={25} />,
    title: "Twitter",
    href: "https://github.com/ismail-dev-code",
    target: "_blank",
  },
  {
    icon: <FaGithub size={25} />,
    title: "GitHub",
    href: "https://github.com/ismail-dev-code",
    target: "_blank",
  },
];

const contactInfo = {
  email: "support@careerlinker.com",
  phone: "+88 (018) 567-890",
  address: "172 Career St, Noakhali City, Bangladesh",
};

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="/"
              className="inline-flex items-center gap-3 text-2xl font-bold text-blue-600 dark:text-violet-400"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-violet-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z" />
                </svg>
              </div>
              CareerLinker
            </a>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Empowering professionals to find remote and hybrid career
              opportunities globally.
            </p>
          </div>

          {/* Job Seekers Links */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">Job Seekers</p>
            <ul className="space-y-1 text-sm">
              {jobSeekerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-blue-600 dark:hover:text-violet-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Employers Links */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">Employers</p>
            <ul className="space-y-1 text-sm">
              {employerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-blue-600 dark:hover:text-violet-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">Contact Us</p>
            <ul className="space-y-1 text-sm">
              <li>
                Email:{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-blue-600 dark:hover:text-violet-400"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-blue-600 dark:hover:text-violet-400"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>Address: {contactInfo.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} CareerLinker. All rights reserved.
          </div>

          <div className="flex gap-4">
            {policyLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-blue-600 dark:hover:text-violet-400"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex space-x-4">
            {socialLinks.map(({ icon, title, href, target }) => (
              <a
                key={title}
                href={href}
                title={title}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className="hover:text-blue-600 dark:hover:text-violet-400"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
