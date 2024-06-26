const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const formRoutes = require('./routes/formRoutes');
app.use('/api/form', formRoutes);
app.use(cors());

app.use(cors({

    origin: 'https://sparkling-kulfi-6f3f70.netlify.app'

}));



app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port: ${port}`);
});

