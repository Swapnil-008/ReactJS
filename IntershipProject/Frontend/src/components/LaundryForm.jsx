import React, { useState } from 'react';
import axios from 'axios';
import { FaTshirt } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LaundryForm = () => {
  const [studentId, setStudentId] = useState('');
  const [requestDate, setRequestDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/laundry-notifications', { student_id: studentId, request_date: requestDate });
      alert('Laundry request submitted!');
      setStudentId('');
      setRequestDate('');
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to submit laundry request');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <FaTshirt className="text-blue-600 text-3xl mr-2" />
            <h2 className="text-2xl font-bold text-blue-800">Request Laundry Service</h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Student ID</label>
            <input
              type="number"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="input-field"
              placeholder="Enter your student ID"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Request Date</label>
            <input
              type="date"
              value={requestDate}
              onChange={(e) => setRequestDate(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="button">
            Submit Laundry Request
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default LaundryForm;