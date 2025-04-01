import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import ComplaintForm from './components/ComplaintForm';
import LeaveForm from './components/LeaveForm';
import LaundryForm from './components/LaundryForm';
import AttendanceView from './components/AttendanceView';
import CanteenMenuView from './components/CanteenMenuView';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login/student" element={<Login role="student" />} />
          <Route path="/login/admin" element={<Login role="admin" />} />
          <Route path="/register/student" element={<Register role="student" />} />
          <Route path="/register/admin" element={<Register role="admin" />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/complaints" element={<ComplaintForm />} />
          <Route path="/leaves" element={<LeaveForm />} />
          <Route path="/laundry" element={<LaundryForm />} />
          <Route path="/attendance" element={<AttendanceView />} />
          <Route path="/canteen-menu" element={<CanteenMenuView />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;