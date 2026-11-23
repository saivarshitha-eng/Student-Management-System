
import React, { useState } from 'react';

function AddStudent() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    department: '',
    year: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({ ...student, id: Date.now() });

    localStorage.setItem('students', JSON.stringify(students));

    alert('Student added successfully!');

    setStudent({ name: '', email: '', department: '', year: '' });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-7">

          <div className="mb-4">
            <h2 className="fw-bold">Add New Student</h2>
            <p className="text-muted">Enter student information below</p>
          </div>

          <div className="card border-0 shadow-sm p-4">
            <form onSubmit={handleSubmit}>

              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Enter student name"
                value={student.name}
                onChange={handleChange}
                required
              />

              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Enter email address"
                value={student.email}
                onChange={handleChange}
                required
              />

              <label className="form-label fw-semibold">Department</label>
              <select
                name="department"
                className="form-select mb-3"
                value={student.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="IT">IT</option>
                <option value="EEE">EEE</option>
                <option value="MECH">MECH</option>
              </select>

              <label className="form-label fw-semibold">Academic Year</label>
              <select
                name="year"
                className="form-select mb-4"
                value={student.year}
                onChange={handleChange}
                required
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>

              <button type="submit" className="btn btn-success w-100 py-2">
                Add Student
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
