import React from 'react'
import classes from './Form.module.css'

const Form =()=>{

    return (
        <form className={classes.input}>
            <label htmlFor='count'>Amount</label>
            <input id='count' value={1} disabled/>
        </form>
    )
}

export default Form;