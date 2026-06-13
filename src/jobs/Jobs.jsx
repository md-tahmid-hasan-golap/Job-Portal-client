const Jobs = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Job</h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore thousands of job opportunities from top companies. Find the
            perfect role that matches your skills and career goals.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              className="input input-bordered w-full"
            />

            <button className="btn btn-primary">Search Jobs</button>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((job) => (
            <div key={job} className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>

              <p className="text-gray-600 mb-3">Company Name</p>

              <p className="text-gray-500 mb-4">Location: Remote</p>

              <button className="btn btn-outline w-full">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
