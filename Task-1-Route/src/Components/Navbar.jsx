import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const getNavLinkClass = ({ isActive }) =>
    `nav-link fs-3 fw-bold ${isActive ? 'active text-white' : 'text-white'}`;

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2C3E50" }}>
      <div className="container">
        <a className="navbar-brand fs-1 fw-bold text-white" href="#">START FRAMEWORK</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="about" className={getNavLinkClass}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="portofolio" className={getNavLinkClass}>Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact" className={getNavLinkClass}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
