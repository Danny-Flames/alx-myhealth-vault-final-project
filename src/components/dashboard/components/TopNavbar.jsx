import React from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { PiGearFineFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";

function TopNavbar() {
  const navigate = useNavigate();

  // To handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="top-navbar">
      {/* Right-side icons */}
      <div className="nav-icons">
        {/* Gear Icon for settings */}
        <div
          className="icon-btn"
          onClick={() => handleNavigate("/dashboard/settings")}
        >
          <PiGearFineFill size={24} />
        </div>

        {/* Dropdown for User Icon */}
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="link"
            id="dropdown-basic"
            className="icon-btn"
          >
            <FaUser size={24} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              as="div"
              style={{
                padding: "5px 12px 10px",
                borderBottom: "1px solid lightgrey",
                cursor: 'pointer'
              }}
              onClick={() => handleNavigate("/dashboard/profile")}
            >
              <span className="sidebar-item-icon">
                <i class="bi bi-person-circle"></i>
              </span>
              View Profile
            </Dropdown.Item>
            <Dropdown.Item
              as="div"
              style={{
                padding: "10px 12px 5px",
                cursor: 'pointer'
              }}
              onClick={() => handleNavigate("/auth/login")}
            >
              <span className="sidebar-item-icon">
                <i class="bi bi-box-arrow-left"></i>
              </span>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default TopNavbar;
