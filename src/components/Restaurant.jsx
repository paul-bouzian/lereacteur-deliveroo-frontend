function Restaurant({ restaurant }) {
  return (
    <div className="m-auto max-w-6xl px-4 py-8">
      <div className="tablet:flex-row flex flex-col-reverse items-center gap-3">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <p className="text-lg text-gray-500">{restaurant.description}</p>
        </div>
        <img
          src={restaurant.picture}
          alt=""
          className="tablet:w-350px max-tablet:h-200px h-full w-full rounded object-cover"
        />
      </div>
    </div>
  );
}

export default Restaurant;
