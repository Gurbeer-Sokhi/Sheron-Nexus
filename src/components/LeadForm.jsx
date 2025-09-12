
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    interest: "Offshore Hiring",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = () => {
    setErrors(validate());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrorMessage(data?.message || "Something went wrong. Please try again.");
        return;
      }

      setSuccessMessage("Your inquiry has been submitted successfully.");
      setFormData({ name: "", company: "", email: "", interest: "Offshore Hiring", message: "" });
    } catch (err) {
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-md border px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 dark:text-white bg-white dark:bg-gray-900";
  const inputBorder = "border-gray-300 focus:border-[#8B5CF6] focus:ring-[#8B5CF6] dark:border-gray-700";
  const inputBorderError = "border-red-500 focus:ring-red-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-2xl"
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-900"
        noValidate
      >
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputBase} ${errors.name ? inputBorderError : inputBorder}`}
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputBase} ${errors.company ? inputBorderError : inputBorder}`}
              required
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "company-error" : undefined}
            />
            {errors.company && (
              <p id="company-error" className="mt-1 text-xs text-red-500">
                {errors.company}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
              Business Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputBase} ${errors.email ? inputBorderError : inputBorder}`}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* Interest */}
          <div>
            <label htmlFor="interest" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
              Interest
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className={`${inputBase} ${inputBorder}`}
            >
              <option>Offshore Hiring</option>
              <option>Tech Solutions</option>
              <option>General Inquiry</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${inputBase} ${inputBorder}`}
              placeholder="Tell us a bit about your needs..."
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              text={isSubmitting ? "Submitting..." : "Submit Inquiry"}
              variant="primary"
              ariaLabel="Submit Inquiry"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-[#8B5CF6] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6D28D9] disabled:opacity-60 disabled:pointer-events-none"
            />
          </div>
        </div>
        {successMessage && (
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600" role="status">
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }} className="inline-block h-3 w-3 rounded-full bg-green-500" />
            <span>{successMessage}</span>
          </div>
        )}
        {errorMessage && (
          <p className="mt-4 text-sm font-medium text-red-600" role="alert">{errorMessage}</p>
        )}
      </form>
    </motion.div>
  );
}


