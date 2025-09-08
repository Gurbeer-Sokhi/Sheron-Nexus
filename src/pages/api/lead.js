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

    // Placeholder processing (e.g., save to DB or send email later)
    // eslint-disable-next-line no-console
    console.log("Lead submission received:", { name, company, email, interest, message });

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


