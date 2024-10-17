import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./SideBar.css";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: <i class="bi bi-graph-down"></i> },
  { name: "Health Records", path: "/dashboard/health-records", icon: <i class="bi bi-table"></i>},
  { name: "Appointments", path: "/dashboard/appointments", icon: <i class="bi bi-window-sidebar"></i> },
  { name: "Med Tracking", path: "/dashboard/medication-tracking", icon: <i class="bi bi-record-btn"></i> },
  { name: "Features", path: "/dashboard/features", icon: <i class="bi bi-bricks"></i> },
  { name: "Health Portal", path: "/dashboard/health-portal", icon: <i class="bi bi-blockquote-right"></i>},
  { name: "Settings", path: "/dashboard/settings", icon: <i class="bi bi-gear"></i> },
  { name: "Profile", path: "/dashboard/profile", icon: <i class="bi bi-person-circle"></i> },
];

const SideBar = () => {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <nav className="sidebar">
      <div className="sidebar-brandname" onClick={handleNavigate}><i class="bi bi-house-door"></i> <b>Health Vault</b></div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              exact
              to={item.path}
              className="menu-link"
              isActive={(match, location) => match && match.isExact}
              activeClassName="active"
              end
            >
              {item?.icon && <span className="sidebar-item-icon">{item.icon}</span>}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
