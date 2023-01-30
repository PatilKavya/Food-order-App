import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = () =>{

    const count = 0;


    return (
<button className={classes.button}>
    <span className={classes.icon}><CartIcon/></span>
    <span>Your Cart</span>
    <span className={classes.badge}> {count}</span>
</button>
    )
}

export default HeaderCartButton;