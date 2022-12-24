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
        <div className="grid grid-cols-1 max-w-screen-xl xl:w-3/4 mx-8 lg:mx-auto lg:px-8 content-center md:grid-cols-3 gap-8 my-12">
          <div className="col-span-1 space-y-8">
            <StatisticsCard />
            <WeeklyTip />
          </div>
          <div className="col-span-1 md:col-span-2 space-y-8">
            <RecentReviews />
            <EventCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
