import {BrowserRouter,Route } from 'react-router-dom'
import Meals from "./views/MealsList/Meals";
import MealDetails from "./MealDetails";
import Browse from "./views/BrowseList/Browse";
import Ingredient from "./Ingredient";
function App() {
  return (
    <BrowserRouter>
<div className='container'>
    <Route exact path='/'><Meals/></Route>
    <Route path='/meal/:id'><MealDetails/></Route>
    <Route path='/browse/:name'><Browse/></Route>
    <Route path='/ingredient/:ingredient'><Ingredient/></Route>
</div>
    </BrowserRouter>
  );
}

export default App;
