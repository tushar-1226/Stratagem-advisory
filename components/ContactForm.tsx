"use client";

import { useState } from "react";

// Google Form Configuration
// Replace these with your actual Google Form action URL and entry IDs
// To get these: Create a Google Form, inspect the form element, and get the action URL and entry IDs
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
const ENTRY_IDS = {
  firstName: "entry.XXXXXXX", // Replace with actual entry ID
  lastName: "entry.XXXXXXX",
  email: "entry.XXXXXXX",
  country: "entry.XXXXXXX",
  jobTitle: "entry.XXXXXXX",
  companyName: "entry.XXXXXXX",
  message: "entry.XXXXXXX",
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    jobTitle: "",
    companyName: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Create FormData for Google Forms submission
      const formDataToSubmit = new FormData();
      formDataToSubmit.append(ENTRY_IDS.firstName, formData.firstName);
      formDataToSubmit.append(ENTRY_IDS.lastName, formData.lastName);
      formDataToSubmit.append(ENTRY_IDS.email, formData.email);
      formDataToSubmit.append(ENTRY_IDS.country, formData.country);
      formDataToSubmit.append(ENTRY_IDS.jobTitle, formData.jobTitle);
      formDataToSubmit.append(ENTRY_IDS.companyName, formData.companyName);
      formDataToSubmit.append(ENTRY_IDS.message, formData.message);

      // Submit to Google Forms
      const response = await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors", // Google Forms doesn't allow CORS, so we use no-cors
        body: formDataToSubmit,
      });

      // Since we're using no-cors, we can't check the response
      // But if no error is thrown, we assume success
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        jobTitle: "",
        companyName: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-8 lg:p-12">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-foreground">
        Contact Us
      </h2>

      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-foreground mb-2"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="john.doe@example.com"
          />
        </div>

        {/* Country and Job Title Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="United States"
            />
          </div>
          <div>
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="CEO"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Acme Inc."
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
            placeholder="Tell us about your project or inquiry..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-7 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold cursor-pointer transition-all ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
