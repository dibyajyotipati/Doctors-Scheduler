const express = require("express");
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const patientAppointmentRoutes = require('./routes/appointmentRoutes');
const docAppointmentRoutes = require('./routes/docAppointmentRoutes');
const path = require('path');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000; // Default to port 3000 if PORT is not set

app.use(express.json());

// Parse the JSON array from environment variable
// const allowedOrigins = process.env.LINK ? JSON.parse(process.env.LINK) : [];

const corsOptions = {
  origin: process.env.LINK,
  // function (origin, callback) {
  //   if (!origin) return callback(null, true); 
  //   if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  // },
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions)); // Apply CORS middleware

const buildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(buildPath));

app.get('/*', (req, res) => {
  res.sendFile(
    path.join(buildPath, 'index.html'),
    function(err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.use("/", patientRoutes);
app.use('/doctor', doctorRoutes);
app.use('/appointment', patientAppointmentRoutes);
app.use('/docappointment', docAppointmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
