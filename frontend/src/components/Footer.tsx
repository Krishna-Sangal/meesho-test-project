
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div className="space-y-4">
          <Link to="/" className="text-white text-xl font-bold hover:text-amber-400 transition">
            Meesho
          </Link>
          <p className="text-sm leading-relaxed">
            Your trusted marketplace for authentic products at unbeatable prices.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.facebook.com/meesho" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition text-lg">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/meesho" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition text-lg">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/meesho" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition text-lg">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/meesho" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition text-lg">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-amber-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-amber-400 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/sell" className="hover:text-amber-400 transition">
                Sell with Us
              </Link>
            </li>
            <li>
              <a href="#careers" className="hover:text-amber-400 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-amber-400 transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-white font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/enquiry" className="hover:text-amber-400 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#track-order" className="hover:text-amber-400 transition">
                Track Order
              </a>
            </li>
            <li>
              <a href="#returns" className="hover:text-amber-400 transition">
                Returns & Exchange
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-amber-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:text-amber-400 transition">
                Shipping Info
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to get special offers and updates delivered to your inbox.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
            />
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <h5 className="text-white font-semibold text-sm mb-3">Policies</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#privacy" className="hover:text-amber-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-amber-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-amber-400 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold text-sm mb-3">Company</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#press" className="hover:text-amber-400 transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#accessibility" className="hover:text-amber-400 transition">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold text-sm mb-3">Support</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className="hover:text-amber-400 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="#report" className="hover:text-amber-400 transition">
                  Report Issue
                </a>
              </li>
              <li>
                <a href="#guidelines" className="hover:text-amber-400 transition">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold text-sm mb-3">Payment Methods</h5>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Visa</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Mastercard</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">UPI</span>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded">Wallet</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Meesho. All rights reserved. | Made with{" "}
            <span className="text-red-500">♥</span> for you
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
