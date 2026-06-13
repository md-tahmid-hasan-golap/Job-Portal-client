import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Job Portal</h2>
            <p className="text-gray-400">
              Find your dream job and connect with top companies around the
              world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/jobs">Jobs</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>

            <p>Email: info@jobportal.com</p>
            <p>Phone: +880 1234-567890</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-400">
          © 2026 Job Portal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
