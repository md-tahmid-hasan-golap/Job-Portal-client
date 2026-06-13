const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-5">
      <div className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

        <form className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-gray-500 mt-5 text-sm">
          We usually reply within 24 hours.
        </p>
      </div>
    </section>
  );
};

export default Contact;
