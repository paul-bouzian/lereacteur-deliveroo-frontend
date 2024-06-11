function Articles({ cart, setCart, minusCartScroll, setCartClosed }) {
  const removeFromCart = (item) => {
    const newCart = [...cart];
    const index = newCart.findIndex((cartItem) => cartItem.id === item.id);

    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      newCart[index].totalPrice -= item.price;
    } else {
      newCart.splice(index, 1);
      if (newCart.length === 0) setCartClosed(true);
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

  const calcTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.totalPrice, 0);
  };

  return (
    <div
      className={`flex w-full flex-col gap-4 divide-y divide-gray-300 ${minusCartScroll ? "max-h-[50vh]" : "max-h-[80vh]"}`}
    >
      <div className="mt-4 flex w-full flex-col gap-6 overflow-auto">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-shrink-0 justify-between gap-6 text-gray-600"
          >
            <div className="flex gap-2">
              <div className="flex gap-1">
                <i
                  className="icon-minus cursor-pointer text-xl text-teal-400"
                  onClick={() => removeFromCart(item)}
                ></i>
                <p className="pt-[2px]">{item.quantity}</p>
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
            {calcTotalPrice().toFixed(2)}
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
          {(calcTotalPrice() + 2.5).toFixed(2)}
          &nbsp;€
        </p>
      </div>
    </div>
  );
}

export default Articles;
