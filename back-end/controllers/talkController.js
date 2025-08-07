const TalkForm = require('../models/TalkForm');

// @desc    Submit TalkForm
// @route   POST /api/talk
// @access  Public
exports.submitTalkForm = async (req, res) => {
  try {
    const { name, from_email, service, budget, message } = req.body;

    // Basic validation
    if (!name || !from_email || !service || !budget || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newTalkForm = new TalkForm({
      name,
      from_email,
      service,
      budget,
      message,
    });

    await newTalkForm.save();

    res.status(201).json({ message: 'Talk form submitted successfully' });
  } catch (error) {
    console.error('Talk form submission error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
