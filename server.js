const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path'); // Import the path module
require("dotenv").config();




const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('views')); 

const PORT = process.env.PORT || 3005;






app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(routes);

//connect to the database
mongoose.createConnection('mongodb://localhost:27017/signup', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const dt = mongoose.connection;
dt.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/videoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema
const Schema = mongoose.Schema;
const VideoSchema = new Schema({
    title: String,
    description: String,
    url: String,
});

// Create a model
const Video = mongoose.model('Video', VideoSchema);

// Serve the index.ejs file
app.get('/index', (req, res) => {
    res.render('index'); // Render the index.ejs file
});

// API endpoint to fetch videos
app.get('/api/videos', async (req, res) => {
    try {
        const videos = await Video.find({});
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'views')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



