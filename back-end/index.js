const express = require('express');
const cors = require('cors');
const talkFormRoutes = require('./routes/talkRoutes')
const heroFormRoutes = require('./routes/heroRoutes');
const contactFormRoutes = require('./routes/contactRoutes');
const  connectDB  = require('./config/db');
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use('/api/hero', heroFormRoutes);
app.use('/api/talk', talkFormRoutes );
app.use('/api/contact', contactFormRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
