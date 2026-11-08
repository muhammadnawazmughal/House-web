import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
          />

          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-4 right-4 bg-white p-3 rounded-full shadow"
          >
            <FaHeart />
          </button>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold">{product.name}</h3>

          <div className="flex text-yellow-500 my-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-amber-500">
              ${product.price}
            </h2>

            <button
              onClick={(e) => e.preventDefault()}
              className="bg-amber-500 text-white px-4 py-2 rounded-lg"
            >
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;