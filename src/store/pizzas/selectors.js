export const selectPizzas = (reduxState) => {
  const PizzasOrderedByBought = [...reduxState.pizzas.allPizzas].sort((a, b) => a.bought < b.bought)
  return PizzasOrderedByBought;
}

