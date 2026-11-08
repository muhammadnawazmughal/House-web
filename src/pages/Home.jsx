import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div>
          <span className="text-amber-500 font-semibold uppercase tracking-widest">
            Premium Furniture Collection
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mt-4">
            Modern Furniture For
            <span className="text-amber-500"> Every Home</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Upgrade your living space with our premium collection of sofas,
            chairs, dining tables, beds, wardrobes, and office furniture.
            Designed with elegance, comfort, and quality craftsmanship.
          </p>

          <div className="flex gap-5 mt-8">
            <Link
              to="/products"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">10K+</h2>
              <p className="text-gray-600">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800">500+</h2>
              <p className="text-gray-600">Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800">15+</h2>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
            alt="Modern Furniture"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Why Choose FurniStore?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                High-quality materials with durable craftsmanship.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Safe and quick delivery across the country.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">Affordable Prices</h3>
              <p className="text-gray-600">
                Premium furniture at competitive prices.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Friendly customer support whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;