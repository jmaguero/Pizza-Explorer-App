import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPizzas } from "../store/pizzas/selectors"
import { selectUsers } from "../store/user/selectors"
import { toggleFavorite } from "../store/user/slice"
import { selectRestaurantsThatSellPizza } from "../store/restaurants/selectors"

function PizzaList() {
  const dispatch = useDispatch();
  const pizzas = useSelector(selectPizzas)
  const user = useSelector(selectUsers)
  const [selectedPizza, setSelectedPizza] = useState(0)
  // REMEMBER TO PASS THE PARAMETER WHEN NESTING FUNCTIONS/PARAMETERIZED SELECTORS
  const RestoPizzas = useSelector(selectRestaurantsThatSellPizza(selectedPizza))


  return (
    <div>
      <div><h2>PizzaList</h2></div>
      <h2>Who Sells
        <select value={selectedPizza} onChange={(e) => { setSelectedPizza(parseInt(e.target.value)) }}
        >
          <option value=""></option>
          {pizzas.map((pizza) => { return <option key={pizza.id} value={pizza.id}>{pizza.name}</option> })}
        </select>
        ?
      </h2>
      <div><ul>{RestoPizzas.map(resto => {
        return <li key={resto.id}>{resto.name}</li>
      })}</ul></div>
      <p>Total Pizzas: {pizzas.length}</p>
      <ul>
        {!pizzas ? <p> Loading</p> : pizzas.map(pizza => {
          return <li style={{ border: "2px solid green", margin: "20px", padding: "20px" }} key={pizza.id}>
            <img style={{ border: "2px solid red", width: "200px" }} src={pizza.image} alt={pizza.name} />
            <div>
              <p>Favorite pizza</p>
              <button onClick={() => dispatch(toggleFavorite(pizza.id))}>
                {user.favorites.includes(pizza.id) ? "♥️" : "♡"}
              </button>
            </div>
            <h4>{pizza.name}</h4>
            <p>{pizza.description}</p>
          </li>

        })}</ul>
    </div >)
}

export default PizzaList;