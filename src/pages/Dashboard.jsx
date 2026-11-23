
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [totalStudents, setTotalStudents] = useState(0);

useEffect(() => {
  const students = JSON.parse(localStorage.getItem('students')) || [];
  setTotalStudents(students.length);
}, []);
  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Dashboard</h2>
          <p className="text-muted">Welcome to StudentHub Management System</p>
        </div>
        <Link to="/add-student" className="btn btn-primary">
          + Add Student
        </Link>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-4">
            <p className="text-muted mb-2">Total Students</p>
            <h2 className="fw-bold text-primary">{totalStudents}</h2>
            <small className="text-success">Registered Students</small>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-4">
            <p className="text-muted mb-2">Departments</p>
            <h2 className="fw-bold text-success">5</h2>
            <small className="text-muted">Available Departments</small>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-4">
            <p className="text-muted mb-2">Active Students</p>
            <h2 className="fw-bold text-warning">110</h2>
            <small className="text-muted">Currently Enrolled</small>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm p-4 mt-4">
        <h5 className="fw-bold">Quick Actions</h5>
        <div className="d-flex flex-wrap gap-3 mt-3">
          <Link to="/add-student" className="btn btn-outline-primary">
            Add New Student
          </Link>
          <Link to="/students" className="btn btn-outline-success">
            View Students
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
