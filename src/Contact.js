import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "40c9765d-e864-410a-b687-2d952633ca21");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          "Form Submitted Successfully. We will reply you as soon as possible."
        );
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-primary-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-display">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600">
            Ready to start your Nepal adventure? Send us your inquiry and we'll get back to you soon.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-6"
        >
          <input type="hidden" name="from_name" value="Airplus Inquiry" />

          <div className="space-y-2">
            <label className="block text-slate-700 font-medium" htmlFor="name">
              Name <span className="text-accent-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-slate-700 font-medium" htmlFor="email">
              Email <span className="text-accent-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-slate-700 font-medium" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="What is your inquiry about?"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-slate-700 font-medium" htmlFor="arrivalDate">
                Arrival Date
              </label>
              <input
                type="date"
                name="arrivalDate"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-slate-700 font-medium" htmlFor="daysTrekking">
                Days Trekking
              </label>
              <input
                type="number"
                name="daysTrekking"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="0"
                min="0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-slate-700 font-medium" htmlFor="numberOfPeople">
              Number of People
            </label>
            <input
              type="number"
              name="numberOfPeople"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="1"
              min="1"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-slate-700 font-medium" htmlFor="source">
              How did you hear about us?
            </label>
            <select
              name="source"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
            >
              <option value="Google">Google</option>
              <option value="Social Media">Social Media</option>
              <option value="Friend">Friend</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-slate-700 font-medium" htmlFor="message">
              Message <span className="text-accent-500">*</span>
            </label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
              rows="5"
              placeholder="Tell us about your travel plans and interests..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          >
            Submit Inquiry
          </button>

          {result && (
            <div className={`text-center p-4 rounded-xl ${
              result.includes("Successfully")
                ? "bg-primary-50 text-primary-700 border border-primary-200"
                : result.includes("Sending")
                ? "bg-slate-50 text-slate-700 border border-slate-200"
                : "bg-accent-50 text-accent-700 border border-accent-200"
            }`}>
              {result}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
