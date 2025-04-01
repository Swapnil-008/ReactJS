import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 flex justify-between items-center shadow-md z-50">
      <h1 className="text-2xl font-bold">Hostel Management System</h1>
      {user && (
        <nav className="space-x-6">
          <Link to="/canteen-menu" className="nav-link">Menu</Link>
          <Link to="/laundry" className="nav-link">Laundry</Link>
          <Link to="/complaints" className="nav-link">Complaint</Link>
          <Link to="/leaves" className="nav-link">Leave</Link>
          <Link to="/attendance" className="nav-link">Attendance</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <button onClick={handleLogout} className="nav-link">Logout</button>
        </nav>
      )}
    </header>
  );
};

export default Header;