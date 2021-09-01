import {useEffect, useState} from "react";
import axios from "axios";
import {Link,useHistory} from "react-router-dom";
import MealsList from "./MealsList";



const Meals = () => {
    const [meals, setMeals] = useState([])
    const [smeals, setSMeals] = useState('')
    const history = useHistory()
    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data.meals))
    }, [])
const handaleInput = (e) => {
        setSMeals(e.target.value)

}
const handalSearch  = () => {
        if (smeals.trim()){
            history.push(`/browse/${smeals}`)
        }
}
    return (
        <div >
            <h1 className='menu-title'>Menu</h1>

            <div className='search'>
                <input className='search-input' onChange={handaleInput} type='text' placeholder='Search...'/>
                <button onClick={handalSearch} className='search-link'><i className='bx bx-search-alt-2'></i></button>

            </div>

<MealsList  meals={meals}/>
        </div>
    )
}

export default Meals


