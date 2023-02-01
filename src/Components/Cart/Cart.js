import React,{useState} from 'react'
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css'



const Cart=(props)=>{

    const [cancel,setCancel]=useState(false);
    const cartItems=[];
    let Amount=100;

  const cancelButtonHandler =()=>{
    setCancel(true);
   props.oncancel(cancel)
  }
    
    return (
        <Modal>
            {cartItems}
           <div className={classes.total}>
           <span >Total Amount</span>
           <span>{Amount}</span>
           </div>
           <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={cancelButtonHandler} >Close</button>
            <button className={classes.button}>Order</button>
           </div>
        </Modal>
    )
}

export default Cart ;