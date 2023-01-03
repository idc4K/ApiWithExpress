const express = require('express');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const app = express();
const userRoutes = require('./routes/user.routes');


//routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', userRoutes);


// server
app.listen(process.env.PORT, () => {
  console.log(`listeninggg on ports ${process.env.PORT}`);
});