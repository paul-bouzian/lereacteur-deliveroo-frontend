function Categories({ name, meals }) {
  return (
    <section className="flex flex-col gap-4 pt-6">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
        {meals.map((meal) => (
          <article
            className="h-card flex items-center justify-between gap-3 rounded-lg bg-white p-4"
            key={meal.title}
          >
            <div className="flex h-full flex-col items-start gap-3">
              <h3 className="text-xl">{meal.title}</h3>
              {meal.description && (
                <p className="overflow-hidden text-sm text-gray-500">
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

// <section className="flex flex-col gap-4">
//   <h2 className="text-2xl font-bold">Brunchs</h2>
//   <div className="flex gap-4">
//     <article className="flex gap-3 rounded-lg bg-white p-4">
//       <div className="flex flex-col gap-3">
//         <h3 className="text-xl">Brunch authentique 1 personne</h3>
//         <p className="text-gray-500">
//           Assiette de jambon cuit, jambon fumeì, terrine, comté bio &
//           camembert bio, salade jeunes pousses, oeuf poché bio, pain bio &
//         </p>
//         <div className="flex gap-4">
//           <p className="text-gray-500">25,00 €</p>
//           <p className="font-bold text-orange-500">Populaire</p>
//         </div>
//       </div>
//       <img
//         src={meals[0].picture}
//         alt=""
//         className="w-130px h-130px rounded object-cover"
//       />
//     </article>
//   </div>
// </section>

export default Categories;
