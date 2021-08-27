import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import {Link,useHistory} from "react-router-dom";


const Ingredient = () => {
    const [ingredient,setIngredient] = useState([])
    const ingParams = useParams()
    const history = useHistory()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingParams.ingredient}`)
            .then(({data}) =>setIngredient(data.meals))
    },[])

    const Back = () => {
        history.goBack()
    }

    return (
        <div>
            <button onClick={Back}><i className='bx bx-arrow-back'></i></button>
<div>
    <img src={`https://www.themealdb.com/images/ingredients/${ingParams.ingredient}.png`} alt='#' width='50'/>
</div>
            {
                ingredient.map(el =>
                <Link to={`/meal/${el.strMeal}`}>
                    <img src={el.strMealThumb} alt='#' width='200'/>
                 <h3>
                     {el.strMeal}
                 </h3>
                </Link>
                )
            }
        </div>
    )
}

export default Ingredient