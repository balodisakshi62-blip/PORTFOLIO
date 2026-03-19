// Test email configuration
require('dotenv').config();
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set (length: ' + process.env.EMAIL_PASS.length + ')' : 'Not set');

  if (process.env.EMAIL_USER === 'your-email@gmail.com' || process.env.EMAIL_PASS === 'your-app-password' || process.env.EMAIL_PASS === 'your-16-character-app-password-here') {
    console.log('❌ Please configure your actual Gmail credentials in .env file');
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    // Test connection
    await transporter.verify();
    console.log('✅ Email configuration is valid!');

    // Send test email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Portfolio Contact Form - Test Email',
      html: '<h2>Test Email</h2><p>Your contact form is working!</p>'
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', result.messageId);

  } catch (error) {
    console.error('❌ Email configuration error:', error.message);
    if (error.code === 'EAUTH') {
      console.log('💡 This usually means:');
      console.log('   - Wrong email or app password');
      console.log('   - 2FA not enabled on Google account');
      console.log('   - App password not generated correctly');
    }
  }
}

testEmail();