import Category from "./Category";

function Categories({ categories }) {
  console.log(categories);
  return (
    <main className="bg-gray-100 px-4">
      <div className="m-auto max-w-6xl">
        {categories.map(
          (category) =>
            category.meals.length > 0 && (
              <Category
                key={category.name}
                name={category.name}
                meals={category.meals}
              />
            ),
        )}
      </div>
    </main>
  );
}

export default Categories;
