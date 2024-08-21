import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    //ganesh = 0af7d0bb-d11a-445a-8aef-caaa0c26b10e
    //madan = 40c9765d-e864-410a-b687-2d952633ca21

    formData.append("access_key", "40c9765d-e864-410a-b687-2d952633ca21");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          "Form Submitted Successfully. We will reply you as soon as possible. "
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={onSubmit}
        value="AirPlus Inquiry"
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <input type="hidden" name="from_name" value="Airplus Inquiry"></input>
        <h2 className="text-xl font-semibold mb-4">
          Contact AirPlus Nepal / Make an Inquiry.
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name*
          </label>
          <input
            type="text"
            name="name"
            required
            className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email*
          </label>
          <input
            type="email"
            name="email"
            required
            className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="arrivalDate">
            Date you will arrive
          </label>
          <input
            type="date"
            name="arrivalDate"
            className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="daysTrekking">
            How many days trekking?
          </label>
          <input
            type="number"
            name="daysTrekking"
            className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="numberOfPeople">
            How many people?
          </label>
          <input
            type="number"
            name="numberOfPeople"
            className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="source">
            Where did you hear about us?
          </label>
          <select
            name="source"
            className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Google">Google</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend">Friend</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Message*
          </label>
          <textarea
            name="message"
            required
            className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit Form
        </button>
        <span className="block mt-4 text-center text-gray-700">{result}</span>
      </form>
    </div>
  );
}
