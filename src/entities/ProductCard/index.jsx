import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const checkIfInCart = (cart, productId) => {
    return cart.some((item) => item.id === productId);
  };

  const isProductInCart = checkIfInCart(cart, product.id);

  const handleCartToggle = () => {
    if (isProductInCart) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={handleCartToggle}
        className={`mt-2 px-6 py-2 rounded-lg w-full transition-colors ${
          isProductInCart ? "bg-red-500 text-white hover:bg-red-400" : "bg-blue-500 text-white hover:bg-blue-400"
        }`}
      >
        {isProductInCart ? "Удалить" : "Добавить в корзину"}
      </button>
    </div>
  );
};
