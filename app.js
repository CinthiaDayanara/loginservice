const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

connectDB();

// Configura CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: '*', // Permite solicitudes desde esta URL
  methods: 'GET,POST,PUT,DELETE', // Métodos HTTP permitidos
}));

app.use(express.json({ extended: false }));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
