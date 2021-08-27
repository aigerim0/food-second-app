import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import {Link} from "react-router-dom";

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
           <button onClick={Back}><i className='bx bx-arrow-back'></i></button>
           {
               searchMeals.map( item =>
                   <Link to={`/meal/${item.strMeal}`}>
                       <div>
                           <img src={item.strMealThumb} alt='#' width='200'/>
                           {item.strMeal}
                       </div>
                   </Link>

               )

           }
<div>{error}</div>
       </div>
   )
}

export default Browse