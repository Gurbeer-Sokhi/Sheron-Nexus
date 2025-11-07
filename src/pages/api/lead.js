import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { name, company, email, interest, message } = req.body || {};

    // Basic validation
    const errors = {};
    if (!name || !String(name).trim()) errors.name = "Name is required";
    if (!company || !String(company).trim()) errors.company = "Company is required";
    if (!email || !String(email).trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      errors.email = "Email is invalid";
    }
    if (!interest || !String(interest).trim()) errors.interest = "Interest is required";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, message: "Validation failed", errors });
    }

    // Check if email configuration is properly set up
    if (!process.env.EMAIL_PASS) {
      console.error("Email configuration error: EMAIL_PASS environment variable is not set");
      return res.status(500).json({ 
        success: false, 
        message: "Email service is not properly configured. Please contact support." 
      });
    }

    // Create transporter (using Outlook SMTP with app password)
    const transporter = nodemailer.createTransport({
      service: 'Outlook', // Or use another SMTP provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'sheronnexus@outlook.com',
      to: email, // Send to the lead's business email
      subject: `New Lead from ${name} - ${company}`,
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
        <hr>
        <p><em>Submitted via Sheron Nexus website contact form</em></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // eslint-disable-next-line no-console
    console.log("Lead submission sent to sheronnexus@outlook.com:", { name, company, email, interest, message });

    return res
      .status(200)
      .json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Lead API error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}


