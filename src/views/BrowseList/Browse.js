import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import MealsList from "../MealsList/MealsList";

const Browse  = () =>{
const [searchMeals,setSearchMeals] = useState([])
    const [error,setError] = useState('')
    const searchMealsParams = useParams()
    const history = useHistory()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealsParams.name}`)
            .then(({data}) => {
                if(  data.meals){
                  setSearchMeals(data.meals)
                }else {
                setError('This dish was not found!')
                }


            })
    },[searchMealsParams])

    const Back = () => {
        history.goBack()
    }
   return (
       <div>
           <button className='browse-back' onClick={Back}><i className='bx bx-arrow-back'></i></button>
        <div className='row'>
            {
                searchMeals.map( item =>
                    <Link to={`/meal/${item.strMeal}`}>
                        <div className='box'>
                            <img  className='menu browse-img' src={item.strMealThumb} alt='#' width='150'/>
                           <div className='browse-title'>
                               {item.strMeal}
                           </div>
                        </div>
                    </Link>

                )

            }
        </div>



<div>{error}</div>
       </div>
   )
}

export default Browse