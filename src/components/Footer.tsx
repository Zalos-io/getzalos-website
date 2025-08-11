import Link from 'next/link';

const Footer = () => (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/assets/images/zalos-white-logo.webp"
              alt="Zalos"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              AI-powered compliance automation that transforms document risk
              identification and redaction from days to minutes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#product"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <Link href="/contact-us">
                  <a className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Zalos AI Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
);

export default Footer;
