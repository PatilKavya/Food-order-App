import React from 'react'
import classes from './MealItems.module.css'
import Form from '../UI/Form/Form'
import Button from '../UI/Button/Button'

const MealItems=(props)=>{



    return (
        <div className={classes.meal}>
          <li>
            <div>
           <h3>{props.name}</h3>
            <div className={classes.description}>{props.details}</div>
            <div className={classes.price}>{props.price}</div>
            </div>
            </li>
            <div>
            <Form/>
            <Button>+ Add</Button>
            </div>
        </div>
    )
}
export default MealItems;