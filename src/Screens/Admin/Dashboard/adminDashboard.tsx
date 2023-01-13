import AdminNavbar from "../../../Components/adminNavbar";
import RecentReviews from "./components/RecentReviews/reviewCard";
import EventCard from "./components/UpcomingEvents/eventsCard";
import StatisticsCard from "./components/statisticsCard";
import WeeklyTip from "./components/weeklyTip";

const AdminDashboard = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden bg-WhiteBG dark:bg-BlackBG">
        <AdminNavbar />
        <div className="flex flex-col content-center w-full max-w-screen-xl gap-8 px-4 mx-auto my-12 lg:flex-row">
          <div className="flex flex-col w-full space-y-8 lg:w-1/4">
            <StatisticsCard />
            <WeeklyTip />
          </div>
          <div className="flex flex-col w-full space-y-8 lg:w-3/4 md:col-span-2">
            <RecentReviews />
            <EventCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
