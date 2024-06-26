import Articles from "./Cart/Articles/Articles";

function MinusCart({ cart, setCart, cartClosed, setCartClosed }) {
  const buttonColor =
    cart.length > 0 ? "bg-fuchsia-900 hover:bg-fuchsia-800" : "bg-gray-300";

  const calculateQuantities = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.totalPrice, 0);
  };

  return (
    <div className="sticky bottom-0 flex flex-col items-center gap-2 bg-white p-4 shadow-up-lg tablet:hidden">
      {!cartClosed && (
        <Articles
          cart={cart}
          setCart={setCart}
          minusCartScroll={true}
          setCartClosed={setCartClosed}
        />
      )}
      <button
        className={`flex h-[60px] w-full cursor-default items-center justify-center rounded p-4 text-sm text-white ${buttonColor} ${cart.length > 0 && "justify-between hover:cursor-pointer"}`}
        onClick={() => setCartClosed(!cartClosed)}
        disabled={cart.length === 0}
      >
        {cart.length > 0 && (
          <span className="bg-fuchsia-950 px-3 py-2">
            {calculateQuantities()}
          </span>
        )}

        <span>{cartClosed ? "Voir le panier" : "Valider mon panier"}</span>
        {cart.length > 0 && (
          <span>{(calculateTotalPrice() + 2.5).toFixed(2)}&nbsp;€</span>
        )}
      </button>
    </div>
  );
}

export default MinusCart;
