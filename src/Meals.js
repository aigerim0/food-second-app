import {useEffect, useState} from "react";
import axios from "axios";
import {Link,useHistory} from "react-router-dom";


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
            <div className='row'>
                {
                    meals.map(item =>

                        <Link to={`/meal/${item.strMeal}`}>
                            <div key={item.idMeal} className='box'>
                                <img className='menu ' src={item.strMealThumb} alt='#' width='150'/>
                            <div >
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


