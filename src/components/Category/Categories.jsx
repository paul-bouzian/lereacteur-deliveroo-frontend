import { useState } from "react";
import Cart from "./Cart";
import Category from "./Category";

function Categories({ categories }) {
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <main className="bg-gray-100 px-4">
      <div className="m-auto flex max-w-7xl gap-8">
        <div className="flex-1">
          {categories.map(
            (category) =>
              category.meals.length > 0 && (
                <Category
                  key={category.name}
                  name={category.name}
                  meals={category.meals}
                  cart={cart}
                  setCart={setCart}
                />
              ),
          )}
        </div>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </main>
  );
}

export default Categories;
