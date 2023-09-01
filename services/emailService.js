const nodemailer = require('nodemailer');
require('dotenv').config();
async function sendMail({ from, to, subject, text, html }) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASS
        }
    });

    let info = await transporter.sendMail({
        from: `WeShare <${from}>`,
        to,
        subject,
        text,
        html
    });
}

module.exports = sendMail;