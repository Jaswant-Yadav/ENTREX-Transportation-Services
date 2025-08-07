const HeroForm = require('../models/HeroForm');

exports.submitHeroForm = async (req, res) => {
  try {
    const { fullName, phoneNumber, email, date, time, adults, children, message } = req.body;

    const form = new HeroForm({
      fullName,
      phoneNumber,
      email,
      date,
      time,
      adults,
      children,
      message
    });

    await form.save();
    res.status(201).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving HeroForm:', error);
    res.status(500).json({ success: false, message: 'Failed to submit form' });
  }
};
