import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const Browse  = () =>{
const [searchMeals,setSearchMeals] = useState([])
    const searchMealsParams = useParams()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealsParams.name}`)
            .then(({data}) => setSearchMeals(data.meals))
    },[searchMealsParams])

   return (
       <div>

           {
            searchMeals.map( item =>
                <div>
                    <img src={item.strMealThumb} alt='#' width='200'/>
                    {item.strMeal}
                </div>

            )
           }
       </div>
   )
}

export default Browse