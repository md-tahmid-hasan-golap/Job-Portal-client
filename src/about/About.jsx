const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-5">
      <div className="max-w-3xl bg-white p-10 rounded-2xl shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to <span className="font-semibold">Job Portal</span> — your
          trusted platform to find dream jobs and connect with top companies. We
          help job seekers and employers meet in one place and grow together.
        </p>

        <div className="mt-6">
          <p className="text-gray-500">
            Built with Next.js, Tailwind CSS, and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
