import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaUserShield } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">Welcome to Hostel Management System</h1>
          <p className="text-gray-600 mb-8">Please select your role to proceed</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <FaUserGraduate className="text-blue-600 text-4xl mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Student</h2>
              <div className="space-y-3">
                <Link to="/login/student" className="button">Login</Link>
                <Link to="/register/student" className="button bg-gray-600 hover:bg-gray-700">Register</Link>
              </div>
            </div>
            <div className="card">
              <FaUserShield className="text-blue-600 text-4xl mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Admin</h2>
              <div className="space-y-3">
                <Link to="/login/admin" className="button">Login</Link>
                <Link to="/register/admin" className="button bg-gray-600 hover:bg-gray-700">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;