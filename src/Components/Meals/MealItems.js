import React from 'react'
import classes from './MealItems.module.css'


const MealItems=(props)=>{



    return (
        <div className={classes.meal}>
          <li>
           <h3>{props.name}</h3>
            <p className={classes.description}>{props.details}</p>
            <p className={classes.price}>{props.price}</p>
            </li>
        </div>
    )
}
export default MealItems;