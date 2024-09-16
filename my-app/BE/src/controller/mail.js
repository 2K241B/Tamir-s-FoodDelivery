import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'munkhbat20241715@gmail.com',
    pass: 'fdhybrrxoebqrdsc',
  },
});

export const sendMail = async (options) => {
  try {
    const info = await transporter.sendMail({
      from: '"Food Delivery" <munkhbat20241715@gmail.com>',
      to: options.to,
      subject: 'Your OTP Code', 
      text: 'Food Delivery OTP', 
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; min-width: 600px; overflow: auto; line-height: 2;">
          <div style="margin: 50px auto; width: 70%; padding: 20px 0;">
            <div style="border-bottom: 1px solid #eee;">
              <a href="" style="font-size: 1.4em; color: #00466a; text-decoration: none; font-weight: 600;">Food Delivery</a>
            </div>
            <p style="font-size: 1.1em;">Hi,</p>
            <p>Thank you for choosing Food Delivery. Use the following OTP to complete your password reset process. The OTP is valid for 1 minute:</p>
            <h2 style="background: #18BA51; margin: 0 auto; width: max-content; padding: 0 10px; color: #fff; border-radius: 4px;">${options.otp}</h2>
            <p style="font-size: 0.9em;">Regards,<br />Food Delivery Team</p>
            <hr style="border: none; border-top: 1px solid #eee;" />
            <div style="float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300;">
              <p>Food Delivery Inc</p>
              <p>Ulaanbaatar, Mongolia</p>
            </div>
          </div>
        </div>
      `,
    });

    if (info.messageId) {
      return { success: true, messageId: info.messageId };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};
