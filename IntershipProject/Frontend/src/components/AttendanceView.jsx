import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaClipboardCheck } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AttendanceView = () => {
  const [attendance, setAttendance] = useState([]);
  const [studentId, setStudentId] = useState('');

  useEffect(() => {
    if (studentId) {
      const fetchAttendance = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/attendance?student_id=${studentId}`);
          setAttendance(res.data);
        } catch (err) {
          alert(err.response?.data?.error || 'Failed to fetch attendance');
        }
      };
      fetchAttendance();
    }
  }, [studentId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <div className="flex items-center justify-center mb-6">
            <FaClipboardCheck className="text-blue-600 text-3xl mr-2" />
            <h2 className="text-2xl font-bold text-blue-800">View Attendance</h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Student ID</label>
            <input
              type="number"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="input-field"
              placeholder="Enter your student ID"
            />
          </div>
          {attendance.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-3">Date</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendance.map((record) => (
                    <tr key={record.id} className="border-b">
                      <td className="p-3">{record.date}</td>
                      <td className="p-3">{record.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-600 text-center">No attendance records found.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AttendanceView;