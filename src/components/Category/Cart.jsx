function Cart({ cart, setCart }) {
  const removeFromCart = (item) => {
    const newCart = [...cart];
    const index = newCart.findIndex((cartItem) => cartItem.id === item.id);

    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      newCart[index].totalPrice -= item.price;
    } else {
      newCart.splice(index, 1);
    }

    setCart(newCart);
  };

  const addToCart = (item) => {
    const newCart = [...cart];
    const index = newCart.findIndex((cartItem) => cartItem.id === item.id);

    if (index === -1) {
      return;
    } else {
      newCart[index].quantity++;
      newCart[index].totalPrice += item.price;
    }

    setCart(newCart);
  };

  return (
    <div className="w-[350px]">
      <div className="sticky top-0 pt-6">
        <div className="flex w-full flex-col items-center rounded bg-white p-3 shadow-md">
          <button
            className={`w-full cursor-not-allowed rounded bg-gray-300 py-3 font-bold text-gray-500 ${cart.length > 0 && "cursor-pointer bg-teal-400 text-white"}`}
          >
            Valider mon panier
          </button>
          {cart.length > 0 ? (
            <div className="flex w-full flex-col gap-4 divide-y divide-gray-300">
              <div className="mt-4 flex w-full flex-col gap-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex w-full items-center justify-between gap-6 text-gray-600"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <i
                          className="icon-minus cursor-pointer text-xl text-teal-400"
                          onClick={() => removeFromCart(item)}
                        ></i>
                        <p>{item.quantity}</p>
                        <i
                          className="icon-plus cursor-pointer text-xl text-teal-400"
                          onClick={() => addToCart(item)}
                        ></i>
                      </div>
                      <p>{item.title}</p>
                    </div>
                    <p>{item.totalPrice.toFixed(2)}&nbsp;€</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-4 text-gray-600">
                <div className="flex items-center justify-between">
                  <p>Sous-total</p>
                  <p>
                    {cart
                      .reduce((acc, item) => acc + item.totalPrice, 0)
                      .toFixed(2)}
                    &nbsp;€
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Frais de livraison</p>
                  <p>2,50 &nbsp;€</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4 text-xl font-medium">
                <p>Total</p>
                <p>
                  {(
                    Number(
                      cart.reduce((acc, item) => acc + item.totalPrice, 0),
                    ) + 2.5
                  ).toFixed(2)}
                  &nbsp;€
                </p>
              </div>
            </div>
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
