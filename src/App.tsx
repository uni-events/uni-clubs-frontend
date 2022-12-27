import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./Screens/Discover/discover";
import Home from "./Screens/Home/home";
import Login from "./Screens/Login/login";
import ErrorPage from "./Screens/404/404";
import AdminDashboard from "./Screens/Admin/Dashboard/adminDashboard";
import AdminReview from "./Screens/Admin/Reviews/review";
import ManageEvents from "./Screens/Admin/ManageEvents/manageEvents";
import ClubDetails from "./Screens/Admin/ClubDetails/clubDetails";
import ClubPage from "./Screens/Club/clubPage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/manage-events" element={<ManageEvents />} />
          <Route path="/reviews" element={<AdminReview />} />
          <Route path="/club" element={<ClubPage />} />
          <Route path="/club-details" element={<ClubDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
