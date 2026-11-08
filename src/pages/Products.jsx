import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Products = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-500 font-semibold uppercase tracking-widest">
            Our Collection
          </span>

          <h1 className="text-5xl font-bold text-gray-800 mt-3">
            Premium Furniture Collection
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-8">
            Discover our exclusive collection of premium-quality furniture,
            designed to bring elegance, comfort, and functionality to your
            home. From luxurious sofas to stylish dining tables, we have
            everything you need.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-amber-500 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-600 transition">
            All
          </button>

          <button className="bg-white border border-gray-300 px-6 py-3 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition">
            Sofas
          </button>

          <button className="bg-white border border-gray-300 px-6 py-3 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition">
            Chairs
          </button>

          <button className="bg-white border border-gray-300 px-6 py-3 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition">
            Tables
          </button>

          <button className="bg-white border border-gray-300 px-6 py-3 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition">
            Beds
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-800">
            Can't Find What You're Looking For?
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Browse our complete catalog or contact our team for personalized
            furniture recommendations.
          </p>

          <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold transition duration-300">
            View More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;