import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  const cartCount = cartItems.length;

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 p-4 sm:p-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-3xl font-bold @media(max-width:500px):text-xl">
          <Link
            to="/"
            className="hover:text-blue-500 transition-colors"
            style={{ fontSize: "clamp(1rem, 5vw, 1.9rem)" }}
          >
            Каталог 🛍️
          </Link>
        </h1>

        <Link
          to="/cart"
          className="text-2xl sm:text-2xl text-gray-700 hover:text-blue-500 transition-colors flex items-center font-bold @media(max-width:500px):text-lg"
          style={{ fontSize: "clamp(1rem, 5vw, 1.5rem)" }}
        >
          Корзина 🛒
          {cartCount > 0 && (
            <span className="ml-1 bg-red-500 text-white text-sm sm:text-xs px-2 py-0.5 rounded-full @media(max-width:500px):text-xs">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};