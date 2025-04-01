const express = require('express');
const cors = require('cors');
const complaintRoutes = require('./routes/complaints');
const leaveRoutes = require('./routes/leaves');
const authRoutes = require('./routes/auth');
const canteenMenuRoutes = require('./routes/canteenMenu');
const attendanceRoutes = require('./routes/attendance');
const laundryRoutes = require('./routes/laundryNotifications');

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/complaints', complaintRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/canteen-menu', canteenMenuRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/laundry-notifications', laundryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});