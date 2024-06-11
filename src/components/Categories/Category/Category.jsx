function Categories({ name, meals, cart, setCart }) {
  const addToCart = (meal) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === meal.id);

    if (index === -1) {
      newCart.push({
        id: meal.id,
        title: meal.title,
        price: Number(meal.price),
        totalPrice: Number(meal.price),
        quantity: 1,
      });
    } else {
      newCart[index].quantity++;
      newCart[index].totalPrice += Number(meal.price);
    }

    setCart(newCart);
  };

  return (
    <section className="flex flex-col gap-4 pt-6">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="flex flex-col gap-4 xl:grid xl:grid-cols-2">
        {meals.map((meal) => (
          <article
            className="flex h-card items-center justify-between gap-3 rounded-lg bg-white p-4 shadow-sm transition-shadow duration-300 hover:cursor-pointer hover:shadow-xl"
            onClick={() => addToCart(meal)}
            key={meal.title}
          >
            <div className="flex h-full flex-col items-start gap-2">
              <h3 className="text-xl">{meal.title}</h3>
              {meal.description && (
                <p className="h-10 overflow-hidden text-ellipsis text-sm text-gray-500">
                  {meal.description}
                </p>
              )}
              <div className="flex gap-4">
                <p className="text-gray-500">{meal.price} €</p>
                <p className="flex items-center gap-2 font-bold text-orange-500">
                  <i className={`${meal.popular ? "icon-STAR_FILL" : ""}`}></i>
                  {meal.popular && "Populaire"}
                </p>
              </div>
            </div>
            {meal.picture && (
              <img
                src={meal.picture}
                alt={meal.title}
                className="h-130px w-130px rounded object-cover"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Categories;
