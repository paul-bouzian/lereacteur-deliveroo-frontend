import Articles from "./Articles/Articles";

function Cart({ cart, setCart, setCartClosed }) {
  return (
    <div className="w-[350px] max-tablet:hidden">
      <div className="sticky top-0 pt-6">
        <div className="flex w-full flex-col items-center rounded bg-white p-3 shadow-md">
          <button
            className={`w-full cursor-not-allowed rounded bg-gray-300 py-3 font-bold text-gray-500 ${cart.length > 0 && "cursor-pointer bg-teal-400 text-white"}`}
          >
            Valider mon panier
          </button>
          {cart.length > 0 ? (
            <Articles
              cart={cart}
              setCart={setCart}
              minusCartScroll={false}
              setCartClosed={setCartClosed}
            />
          ) : (
            <div className="flex h-[110px] w-full items-center justify-center">
              <p className="text-gray-400">Votre panier est vide</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
