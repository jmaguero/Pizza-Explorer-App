export const selectRestaurantsWithPizzas = (reduxState) => {
  const restaurants = reduxState.restaurants.all;
  const pizzas = reduxState.pizzas.allPizzas;

  const restaurantsWithPizzaFlavors = restaurants.map((resto) => {

    const replacePizzas = resto.pizzas.map((pId) => (
      pizzas.find((fullPizza) => pId === fullPizza.id)
    ))

    return { ...resto, pizzas: replacePizzas }
  });
  return restaurantsWithPizzaFlavors;

}

export const selectPizzasSoldByRestaurant = (restaurantId) => (reduxState) => {
  const list = reduxState.restaurants.all;
  //get restaurants with pizza names!
  const restaurantsWithPizzas = selectRestaurantsWithPizzas(reduxState)

  const restoById = restaurantsWithPizzas.find(resto => resto.id === restaurantId);
  console.log(restoById)


  return restoById
  // your logic goes here - it will be slightly more complex than the previous exercise
};