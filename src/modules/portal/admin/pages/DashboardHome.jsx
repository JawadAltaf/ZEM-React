import { useEffect } from "react";
import JobRequestCard from "../components/JobRequest";

const DashboardHome = () => {
   useEffect(() => {
          window.scrollTo(0, 0)
      }, [])
  // Sample data for multiple cards
  const jobCardsData = [
    { title: "JOB REQUESTS", total: 11, accepted: 10, rejected: 0, pending: 1 },
    { title: "JOB REQUESTS", total: 6, accepted: 10, rejected: 0, pending: 1 },
    { title: "JOB REQUESTS", total: 11, accepted: 10 },
    { title: "JOB REQUESTS", total: 11, rejected: 0, pending: 1 },

    // Add more cards as needed
  ];

  return (
    <div className="p-4 md:p-6">
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobCardsData.map((card, index) => (
          <JobRequestCard
            key={index}
            title={card.title || 0}
            total={card.total || 0}
            accepted={card.accepted || 0}
            rejected={card.rejected || 0}
            pending={card.pending || 0}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;