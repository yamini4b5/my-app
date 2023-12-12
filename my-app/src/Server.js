const express = require('express');
const mongoose = require('mongoose');
const Project = require('./Models/Data_Projects');
const userRouter = require("./Routes/Routes.js")
const bodyParser = require('body-parser');


const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use("/user", userRouter);

//requiring the routes
app.use('/', require('./Routes/courseRoutes'));
app.use('/', require('./Routes/batchRoutes'));
app.use('/', require('./Routes/eventRoutes'));
app.use('/', require('./Routes/appointment'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://morea04:itsmyproject@cluster10.wmnsldw.mongodb.net/mydatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Create a new project
app.post('/projects', async (req, res) => {
  try {
    const { name, pointOfContact, email, professor_name, industry_name } = req.body;
    const project = new Project({ name, pointOfContact, email, professor_name, industry_name });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all projects
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});