import React from "react";

const ApplicationStats = ({ applications = [] }) => {
  const totalApplications = applications.length;

  const referralCounts = applications.reduce((acc, app) => {
    const source = app.referralSource || "Unknown";
    acc[source] = (acc[source] || 0) + 1;
    return acc;
  }, {});

  const uniqueCompanies = [...new Set(applications.map((app) => app.company))];

  const latestSubmission = applications.reduce((latest, app) => {
    const date = new Date(app.submittedAt);
    return date > latest ? date : latest;
  }, new Date(0));

  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">Total Applications</div>
        <div className="stat-value text-primary">{totalApplications}</div>
        <div className="stat-desc">Across {uniqueCompanies.length} companies</div>
      </div>

      <div className="stat">
        <div className="stat-title">Referral Sources</div>
        <div className="stat-value text-secondary">{Object.keys(referralCounts).length}</div>
        <div className="stat-desc">
          {Object.entries(referralCounts)
            .map(([source, count]) => `${source}: ${count}`)
            .join(", ")}
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Last Submission</div>
        <div className="stat-value">
          {latestSubmission.getFullYear() > 1970
            ? latestSubmission.toDateString()
            : "N/A"}
        </div>
        <div className="stat-desc text-secondary">Most recent application</div>
      </div>
    </div>
  );
};

export default ApplicationStats;
