import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaHome } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = ({ role }) => {
  const [name, setName] = useState('');
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = role === 'student' ? '/api/auth/register/student' : '/api/auth/register/admin';
      const data = role === 'student'
        ? { name, email: emailOrUsername, password, room_number: roomNumber }
        : { username: emailOrUsername, email: emailOrUsername, password };
      await axios.post(`http://localhost:5000${endpoint}`, data);
      alert(`${role} registered successfully!`);
      navigate(`/login/${role}`);
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">{role === 'student' ? 'Student' : 'Admin'} Registration</h2>
          <form onSubmit={handleSubmit}>
            {role === 'student' && (
              <div className="mb-4 relative">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <div className="flex items-center">
                  <FaUser className="absolute left-3 text-gray-500" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field pl-10"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>
            )}
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-medium mb-2">{role === 'student' ? 'Email' : 'Username'}</label>
              <div className="flex items-center">
                <FaEnvelope className="absolute left-3 text-gray-500" />
                <input
                  type={role === 'student' ? 'email' : 'text'}
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  className="input-field pl-10"
                  placeholder={role === 'student' ? 'Enter your email' : 'Enter your username'}
                  required
                />
              </div>
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <div className="flex items-center">
                <FaLock className="absolute left-3 text-gray-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            {role === 'student' && (
              <div className="mb-4 relative">
                <label className="block text-gray-700 font-medium mb-2">Room Number</label>
                <div className="flex items-center">
                  <FaHome className="absolute left-3 text-gray-500" />
                  <input
                    type="text"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    className="input-field pl-10"
                    placeholder="Enter your room number"
                  />
                </div>
              </div>
            )}
            <button type="submit" className="button">
              Register
            </button>
            <p className="text-center mt-4 text-gray-600">
              Already have an account?{' '}
              <Link to={`/login/${role}`} className="text-blue-600 hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;