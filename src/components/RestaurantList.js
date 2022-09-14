import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectPizzasSoldByRestaurant, selectRestaurantsWithPizzas } from "../store/selectors"


const compare_name = (character_a, character_b) => {
  return character_a.name.localeCompare(character_b.name);
}

function RestaurantList() {
  const RestoWithPizzas = useSelector(selectRestaurantsWithPizzas)
  const alphabeticalRestaurants = RestoWithPizzas.sort(compare_name)
  const [restoId, setRestoId] = useState()
  const restoPizzas = useSelector(selectPizzasSoldByRestaurant(restoId)) // undefined => 



  return (
    <div>
      <h1>Restaurants</h1>
      <div>
        <h2>Who does
          <select value={restoId} onChange={(e) => { setRestoId(parseInt(e.target.value)) }}
          >
            <option value=""></option>
            {alphabeticalRestaurants.map((resto) => { return <option key={resto.id} value={resto.id}>{resto.name}</option> })}
          </select>
          sells?
        </h2>

        {!restoPizzas ? (<div>Choose a restaurant</div>) : (<div><ul>{
          restoPizzas.pizzas.map(
            p => (<li key={p.id}>{p.name}</li>))


        }</ul></div>)}


        {/* <ul>
          {alphabeticalRestaurants.map(resto => (
            <li key={resto.id}>
              <strong>{resto.name}</strong>
              <ul>
                {resto.pizzas.map(f => (<li key={f.id}>{f.name}</li>))}
              </ul>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  )
}

export default RestaurantList