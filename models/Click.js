
const mongoose = require('mongoose');

const clickSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  // You can add more fields here if needed in the future
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Click', clickSchema);
