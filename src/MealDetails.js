import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import {Link,useHistory} from "react-router-dom";


const MealDetails = () => {
    const [mealDetails,setMealDetails] = useState({})
    const [ingredient,setIngredient] = useState([])
    const mealDetailsparsms = useParams()
    const [youTube,setYouTube] = useState('')
    const history = useHistory()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealDetailsparsms.id}`)
            .then(({data}) => {
                const obj = data.meals[0]
                const str = obj.strYoutube
                setMealDetails(obj)
                const strIngredient = Array(20).fill(0).reduce((acc,item, idx) =>{
                    if(obj[`strIngredient${idx + 1}`]){
                        return[...acc,obj[`strIngredient${idx + 1}`]]
                    }
                    return  acc
                },[])

                setIngredient(strIngredient)
                setYouTube(str.slice(str.indexOf('v=')+2,str.length))

            })
    },[mealDetailsparsms])


    const Back = () => {
     history.goBack()
    }

return (
    <div>
<button onClick={Back}><i className='bx bx-arrow-back'></i></button>
        {
           <div>
               <div className='mealDetails-title'>
                   <h3>{ mealDetails.strMeal}</h3>
               </div >
             <div className='mealDetails-right-left-side'>
                 <div className='mealDetails-left-side'>
                     <img src={mealDetails.strMealThumb} alt='#' width='200'/>
                 </div>
                 {
                     ingredient.map(item =>

                         <div className='mealDetails-ingredients'>
                             <Link  to={`/ingredient/${item}`}>
                                 <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt='#' width='50'/>
                                 <p>{item}</p>
                             </Link>
                         </div>

                     )
                 }
                 <div className='mealDetails-right-side'>
                     <p>Instructions: {mealDetails.strInstructions}</p>
                 </div>
             </div>


           </div>

        }
        {
            ingredient.map(item =>

                    <Link  to={`/ingredient/${item}`}>
                        <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt='#' width='50'/>
                        <p>{item}</p>
                    </Link>

            )
        }
<div>
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youTube}`} title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>

    </iframe>
</div>
    </div>
)
}

export default MealDetails