import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";


const MealDetails = () => {
    const [mealDetails,setMealDetails] = useState({})
    const [ingredient,setIngredient] = useState([])
    const mealDetailsparsms = useParams()
    console.log(mealDetailsparsms)
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealDetailsparsms.id}`)
            .then(({data}) => {
                const obj = data.meals[0]
                setMealDetails(obj)
                const strIngredient = Array(20).fill(0).reduce((acc,item, idx) =>{
                    if(obj[`strIngredient${idx + 1}`]){
                        return[...acc,obj[`strIngredient${idx + 1}`]]
                    }
                    return  acc
                },[])
                setIngredient(strIngredient)
            })
    },[mealDetailsparsms])


return (
    <div>

        {
           <div>
               <img src={mealDetails.strMealThumb} alt='#' width='200'/>
               <h3>{ mealDetails.strMeal}</h3>
               <p>Instructions: {mealDetails.strInstructions}</p>

           </div>

        }
        {
            ingredient.map(item =>
                <div>
<img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt='#' width='50'/>
                    <p>{item}</p>
                </div>
            )
        }

    </div>
)
}

export default MealDetails