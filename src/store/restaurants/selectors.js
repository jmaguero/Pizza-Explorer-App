export const selectRestaurants = (reduxState) => [...reduxState.restaurants.all].sort((a, b) => {
  return a.name.localeCompare(b.name);
})

export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  //gets the restaurants already ordered alphabetically
  // return reduxState.restaurants.all.filter((r) => r.pizzas.includes(pizzaId));

  const list = reduxState.restaurants.all;


  const RestoWithCertainPizza = [...list].filter(resto => {
    return resto.pizzas.includes(pizzaId)
  })
  return RestoWithCertainPizza

}