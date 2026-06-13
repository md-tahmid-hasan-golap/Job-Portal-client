const Banner = () => {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Dream Job Today
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Explore thousands of job opportunities from top companies and take the
          next step in your career journey.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn btn-primary">Browse Jobs</button>

          <button className="btn btn-outline">Post a Job</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
