import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Browse from "./Browse";

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [smeals, setSMeals] = useState({})
    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data.meals))
    }, [])
const handaleInput = (e) => {
        setSMeals(e.target.value)

}
    return (
        <div >
            <h1 className='menu-title'>Menu</h1>

            <div className='search'>
                <input onChange={handaleInput} type='text' placeholder='Search...'/>
                <Link to={`/browse/${smeals}`} className='search-link'>Search</Link>

            </div>
            <div className='row'>
                {
                    meals.map(item =>

                        <Link to={`/meal/${item.strMeal}`}>
                            <div key={item.idMeal} className='box'>
                                <img className='menu' src={item.strMealThumb} width='150'/>
                            <div>
                                <h3 >{item.strArea}</h3>
                            </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Meals


