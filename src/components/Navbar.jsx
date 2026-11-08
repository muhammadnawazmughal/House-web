import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
  
        <Link to="/" className="text-3xl font-bold text-gray-800">
          Furni<span className="text-amber-500">Store</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-amber-500 transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-gray-700 font-medium hover:text-amber-500 transition"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-amber-500 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 font-medium hover:text-amber-500 transition"
          >
            Contact
          </Link>
        </nav>

    
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search furniture..."
            className="bg-transparent outline-none px-3 w-full"
          />
        </div>

        <div className="flex items-center gap-5">
          <button className="relative text-xl text-gray-700 hover:text-amber-500">
            <FaHeart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </button>

          <button className="relative text-xl text-gray-700 hover:text-amber-500">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>

          <button className="bg-amber-500 text-white px-5 py-2 rounded-full hover:bg-amber-600 transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;