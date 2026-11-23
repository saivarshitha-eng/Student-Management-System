
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 py-3 shadow"
      style={{ backgroundColor: '#182923' }}>

      <NavLink className="navbar-brand fw-bold fs-4" to="/">
        🎓 StudentHub
      </NavLink>

      <button className="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ms-auto gap-3">
          <NavLink className="nav-link" to="/">Dashboard</NavLink>
          <NavLink className="nav-link" to="/students">Students</NavLink>
          <NavLink className="nav-link" to="/add-student">Add Student</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
