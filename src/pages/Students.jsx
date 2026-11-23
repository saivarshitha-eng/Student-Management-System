
import React, { useState, useEffect } from 'react';

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
  let saved = JSON.parse(localStorage.getItem('students'));

  if (!saved || saved.length === 0) {
    saved = Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      name: `Student ${index + 1}`,
      email: `student${index + 1}@gmail.com`,
      department: ['CSE', 'ECE', 'IT', 'EEE', 'MECH'][index % 5],
      year: `${index % 4 + 1} Year`
    }));

    localStorage.setItem('students', JSON.stringify(saved));
  }

  setStudents(saved);
}, []);

  const deleteStudent = (id) => {
    const updated = students.filter(student => student.id !== id);
    setStudents(updated);
    localStorage.setItem('students', JSON.stringify(updated));
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Students</h2>
          <p className="text-muted">Manage all registered students</p>
        </div>
        <span className="badge rounded-pill fs-6"
          style={{ backgroundColor: '#198754' }}>
          {students.length} Students
        </span>
      </div>

      <div className="card border-0 shadow-sm p-4">
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr style={{ backgroundColor: '#e8f0eb' }}>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id}>
                  <td className="fw-semibold">{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.department}</td>
                  <td>{student.year}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteStudent(student.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-4">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Students;
