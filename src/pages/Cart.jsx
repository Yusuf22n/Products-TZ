import { useDispatch, useSelector } from "react-redux";

import { clearCart,removeFromCart } from "../store/slices/cartSlice";
import { Header } from "../widgets/header";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <Header />

      <h1 className="text-4xl font-bold mb-6 text-center mt-16">Корзина:</h1>

      {cart.length === 0 ? (
        <p className="text-2xl text-gray-500 text-center mt-12">Корзина пуста 🫤</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg mb-6 flex justify-between items-center">
              <p className="text-lg font-semibold">{item.title} x {item.quantity}</p>
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                Удалить
              </button>
            </div>
          ))}
          <p className="text-xl font-semibold mb-4">Общая сумма: ${totalPrice.toFixed(2)}</p>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-4 bg-red-500 text-white px-6 py-3 rounded-full w-full md:w-auto text-lg hover:bg-red-600 transition-colors"
          >
            Очистить корзину
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
