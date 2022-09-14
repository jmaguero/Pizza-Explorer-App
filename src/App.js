import './App.css';
import { AddPizzaForm } from './components/AddPizzaForm';
import PizzaList from './components/PizzaList';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <div className="App">
      <RestaurantList />
      <PizzaList />
      <AddPizzaForm />
    </div>
  );
}

export default App;
