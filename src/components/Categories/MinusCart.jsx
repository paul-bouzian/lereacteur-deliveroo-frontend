import { useState } from "react";
import Articles from "./Cart/Articles/Articles";

function MinusCart({ cart, setCart }) {
  const [cartClosed, setCartClosed] = useState(true);

  const calculateQuantities = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.totalPrice, 0);
  };

  return (
    <div className="shadow-up-lg sticky bottom-0 flex flex-col items-center gap-2 bg-white p-4 tablet:hidden">
      {!cartClosed && <Articles cart={cart} setCart={setCart} />}
      <button
        className={`flex h-[60px] w-full cursor-default items-center justify-center rounded bg-gray-300 p-4 text-sm text-white ${cart.length > 0 && "justify-between bg-fuchsia-800 hover:cursor-pointer hover:bg-fuchsia-700"}`}
        onClick={() => setCartClosed(!cartClosed)}
        disabled={cart.length === 0}
      >
        {cart.length > 0 && (
          <span className="bg-fuchsia-950 px-2 py-1">
            {calculateQuantities()}
          </span>
        )}

        <span>{cartClosed ? "Voir le panier" : "Valider mon panier"}</span>
        {cart.length > 0 && (
          <span>{calculateTotalPrice().toFixed(2)}&nbsp;€</span>
        )}
      </button>
    </div>
  );
}

export default MinusCart;
