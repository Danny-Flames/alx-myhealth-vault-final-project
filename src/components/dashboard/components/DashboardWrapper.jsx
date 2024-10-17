import React from "react";
import SideBar from "./SideBar";
import "./DashboardWrapper.css";
import TopNavbar from "./TopNavbar";

const DashboardWrapper = ({ children }) => {
  return (
    <div className="dashboard-wrapper">
      <SideBar />
      <div className="dashboard-content">
        <TopNavbar />
        <div className="dashboard-content-child">{children}</div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
