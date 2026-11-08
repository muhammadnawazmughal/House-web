import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1 className="text-center mt-20">Product Not Found</h1>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="text-amber-500 text-3xl mt-5 font-bold">
            ${product.price}
          </p>

          <p className="text-gray-600 mt-6">
            Premium quality furniture made with durable wood and modern design.
            Perfect for your home and office.
          </p>

          <div className="mt-8 space-y-3">
            <p><strong>Availability:</strong> In Stock</p>
            <p><strong>Delivery:</strong> Free Delivery All Over Pakistan</p>
            <p><strong>Payment:</strong> Cash on Delivery Available</p>
            <p><strong>Location:</strong> Karachi, Pakistan</p>
          </div>

          <button className="mt-8 bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600">
            Order Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductDetails;