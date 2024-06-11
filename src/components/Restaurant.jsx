function Restaurant({ restaurant }) {
  return (
    <div className="m-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col-reverse items-center gap-3 tablet:flex-row">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <p className="text-lg text-gray-500">{restaurant.description}</p>
        </div>
        <img
          src={restaurant.picture}
          alt=""
          className="h-full w-full rounded object-cover max-tablet:h-200px tablet:w-350px"
        />
      </div>
    </div>
  );
}

export default Restaurant;
