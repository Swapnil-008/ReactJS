import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUtensils, FaTshirt, FaExclamationCircle, FaCalendarAlt, FaClipboardCheck } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('Parsed User in Home.jsx:', user);
    if (!user) {
      navigate('/');
    } else if (user.username) {
      navigate('/admin-dashboard');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">
          Welcome to the Hostel Management System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <Link to="/leaves" className="card">
            <FaCalendarAlt className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-lg font-medium text-gray-800">Leave Request</h3>
            <p className="text-yellow-500 mt-2">Submit a Leave</p>
          </Link>
          <Link to="/complaints" className="card">
            <FaExclamationCircle className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-lg font-medium text-gray-800">File a Complaint</h3>
            <p className="text-yellow-500 mt-2">File Complaints</p>
          </Link>
          <Link to="/laundry" className="card">
            <FaTshirt className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-lg font-medium text-gray-800">Laundry Request Service</h3>
            <p className="text-yellow-500 mt-2">Request Laundry</p>
          </Link>
          <Link to="/attendance" className="card">
            <FaClipboardCheck className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-lg font-medium text-gray-800">View Attendance</h3>
            <p className="text-yellow-500 mt-2">Attendance</p>
          </Link>
          <Link to="/canteen-menu" className="card">
            <FaUtensils className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-lg font-medium text-gray-800">Check Canteen Menu</h3>
            <p className="text-yellow-500 mt-2">Canteen Menu</p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;