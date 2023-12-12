const mongoose = require('mongoose');
const { link } = require('../Routes/Routes');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pointOfContact: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  professor_name :{
    type: String,
    required: false
  },
  industry_name :{
    type: String,
    required: false
  },
  industry_link:{
    type: String,
    required :false

  }

});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;