import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate()

  const handleNavigate = (url) => {
    navigate(url)
  }
  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
    >
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-11 d-flex align-items-center justify-content-between">
            <h1 className="logo">
              <a href="/">HealthVault</a>
            </h1>
            <nav id="navbar" className="navbar">
              <ul>
                <li onClick={() => handleNavigate('/')} style={{cursor: 'pointer'}}>
                  <a className="nav-link scrollto active" >
                    Home
                  </a>
                </li>
                {/* <li onClick={() => handleNavigate('/#about')} style={{cursor: 'pointer'}}>
                  <a className="nav-link scrollto" >
                    About
                  </a>
                </li> */}
                <li  onClick={() => handleNavigate('/contact-us')} style={{cursor: 'pointer'}}>
                  <a className="nav-link scrollto">
                    Contact
                  </a>
                </li>
                <li onClick={() => handleNavigate('/auth/register')} style={{cursor: 'pointer'}}>
                  <a className="nav-link scrollto ">
                    Register
                  </a>
                </li>
                <li onClick={() => handleNavigate('/auth/login')} style={{cursor: 'pointer'}}>
                  <a className="nav-link scrollto " >
                    Login
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
