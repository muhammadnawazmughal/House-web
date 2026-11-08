const About = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
        
          <div>
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
              alt="Furniture Store"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

     
          <div>
            <span className="text-amber-600 font-semibold uppercase tracking-widest">
              About FurniStore
            </span>

            <h1 className="text-5xl font-bold text-gray-800 mt-4 leading-tight">
              Modern Furniture For Your Dream Home
            </h1>

            <p className="text-gray-600 mt-6 leading-8">
              FurniStore is dedicated to providing premium-quality furniture
              that combines elegance, comfort, and durability. Our collection
              includes sofas, chairs, dining tables, beds, office furniture,
              and home décor designed to transform your living space.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              We believe every home deserves stylish furniture at affordable
              prices. That's why we focus on quality craftsmanship, modern
              designs, and excellent customer service.
            </p>

           
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="bg-white p-5 rounded-xl shadow text-center">
                <h2 className="text-3xl font-bold text-amber-500">10K+</h2>
                <p className="text-gray-600 mt-2">Happy Customers</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow text-center">
                <h2 className="text-3xl font-bold text-amber-500">500+</h2>
                <p className="text-gray-600 mt-2">Furniture Designs</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow text-center">
                <h2 className="text-3xl font-bold text-amber-500">15+</h2>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>
            </div>

            <button className="mt-10 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;