import AdminNavbar from "../../../Components/adminNavbar";
import RecentReviews from "./components/RecentReviews/reviewCard";
import EventCard from "./components/UpcomingEvents/eventsCard";
import StatisticsCard from "./components/statisticsCard";
import WeeklyTip from "./components/weeklyTip";

const AdminDashboard = () => {
  return (
    <>
      <div className="w-screen h-screen bg-WhiteBG dark:bg-BlackBG overflow-x-hidden">
        <AdminNavbar />
        <div className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto px-4 content-center gap-8 my-12">
          <div className="flex flex-col w-full lg:w-1/4 space-y-8">
            <StatisticsCard />
            <WeeklyTip />
          </div>
          <div className="flex flex-col w-full lg:w-3/4 md:col-span-2 space-y-8">
            <RecentReviews />
            <EventCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
