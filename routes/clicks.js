
const express = require('express');
const router = express.Router();
const Click = require('../models/Click');

// Route to log a click
router.post('/log-click', async (req, res) => {
  try {
    // Create a new click entry
    const newClick = new Click({
      timestamp: req.body.timestamp || new Date(),
    });

    // Save to database
    await newClick.save();

    // Return success response
    res.status(201).json({ 
      success: true, 
      message: 'Click logged successfully!',
      data: newClick
    });
  } catch (error) {
    console.error('Error logging click:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to log click',
      error: error.message
    });
  }
});

// Route to get all clicks (optional, for verification)
router.get('/clicks', async (req, res) => {
  try {
    const clicks = await Click.find().sort({ timestamp: -1 });
    res.status(200).json({ 
      success: true, 
      count: clicks.length,
      data: clicks
    });
  } catch (error) {
    console.error('Error fetching clicks:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch clicks',
      error: error.message
    });
  }
});

module.exports = router;
