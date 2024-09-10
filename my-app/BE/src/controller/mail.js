import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
  auth: {
    user: 'munkhbat20241715@gmail.com',
    pass: 'fdhybrrxoebqrdsc',
  }
});

export const sendMail = async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <munkhbat20241715@gmail.com', 
      to: 'tamir.b8550@gmail.com', 
      subject: 'Hello ✔',
      text: 'hello tamir bn?', 
      html: '<b>hello tamir bn?</b>', 
    });

    if (info.messageId) {
      res.status(200).json({ success: true, messageId: info.messageId });
    } else {
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    console.error('Error sending email:', error);
  }
};
