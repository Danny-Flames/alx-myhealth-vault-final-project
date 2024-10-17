import React from "react";
import "./DashboardHeader.css";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function DashboardHeader({ title, rightElement, showBackArrow = false }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="dashboard-header"> 
      <div style={{ display: "flex", alignItems: "center" }}>
        {showBackArrow && (
          <span style={{ cursor: "pointer"}} onClick={handleBackClick}>
            <FaCircleArrowLeft size={24} />
          </span>
        )}

        <span style={{ marginLeft: "10px" }} className="dashboard-header-text">{title || "Page Title"}</span>
      </div>

      {rightElement && rightElement}
    </div>
  );
}

export default DashboardHeader;
