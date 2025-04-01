import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const complaintsRes = await axios.get('http://localhost:5000/api/complaints');
        const leavesRes = await axios.get('http://localhost:5000/api/leaves');
        setComplaints(complaintsRes.data);
        setLeaves(leavesRes.data);
      } catch (err) {
        alert('Failed to fetch data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Admin Dashboard</h1>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Complaints</h2>
          <div className="mb-8">
            {complaints.length > 0 ? (
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-3">Student ID</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((complaint) => (
                    <tr key={complaint.id} className="border-b">
                      <td className="p-3">{complaint.student_id}</td>
                      <td className="p-3">{complaint.description}</td>
                      <td className="p-3">{complaint.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-600">No complaints found.</p>
            )}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leaves</h2>
          <div>
            {leaves.length > 0 ? (
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-3">Student ID</th>
                    <th className="p-3">Start Date</th>
                    <th className="p-3">End Date</th>
                    <th className="p-3">Reason</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leaves.map((leave) => (
                    <tr key={leave.id} className="border-b">
                      <td className="p-3">{leave.student_id}</td>
                      <td className="p-3">{leave.start_date}</td>
                      <td className="p-3">{leave.end_date}</td>
                      <td className="p-3">{leave.reason}</td>
                      <td className="p-3">{leave.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-600">No leave requests found.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;