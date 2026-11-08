import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
     
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Furni<span className="text-amber-500">Store</span>
          </h2>
          <p className="text-sm leading-7">
            We provide modern, stylish, and premium-quality furniture to make
            your home beautiful and comfortable at affordable prices.
          </p>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-amber-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-amber-500 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact
          </h3>

          <p> Karachi, Pakistan</p>
          <p className="mt-2"> +92 33324539572</p>
          <p className="mt-2">nawaz0211@gmail.com</p>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-amber-500 hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-amber-500 hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-amber-500 hover:text-white transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-amber-500 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

    
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 FurniStore. All Rights Reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-amber-500 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-amber-500 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;