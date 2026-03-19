const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static('.'));

// Contact form endpoint - saves to file for now
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Save to messages.json file
    const contactData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      subject,
      message
    };

    const messagesFile = './messages.json';
    let messages = [];
    if (fs.existsSync(messagesFile)) {
      try {
        messages = JSON.parse(fs.readFileSync(messagesFile, 'utf8'));
      } catch (e) {
        messages = [];
      }
    }
    messages.push(contactData);
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));

    console.log('📧 New contact message received:', contactData);

    res.json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio backend is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Portfolio backend server running on port ${PORT}`);
  console.log(`Frontend available at: http://localhost:${PORT}`);
  console.log(`Contact messages will be saved to messages.json`);
});