import React from 'react'
import MealItems from './MealItems'
import classes from './Meals.module.css'
import Card from '../UI/Card/Card'

const Meals = () => {
let arr=[{name:'Sushi',details:'Finest fishes and veggies',price:60},
{name:'Dosa',details:'Breakfast',price:50},
{name:'Idli',details:'two piece per plate',price:20 },
{name:'Roti',details:'South Indian',price:30}]

return (
    <Card>
        <div className={classes.meals}>       
            <ul>
        {
            arr.map(item=>{
                return <MealItems name={item.name}
                details={item.details}
                price={item.price}
                key={item.name}/>
            })
        }
        </ul>
        </div>
        </Card>
)
}

export default Meals;