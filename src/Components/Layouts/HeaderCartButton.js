import React,{useState} from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) =>{
const [cart,setCart]=useState(false);
    const count = 0;


    return (
<button className={classes.button} onClick={()=>{setCart(true);
props.onclick(cart)}}>
    <span className={classes.icon}><CartIcon/></span>
    <span>Your Cart</span>
    <span className={classes.badge}> {count}</span>
</button>
    )
}

export default HeaderCartButton;