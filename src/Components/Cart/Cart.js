import React,{useState,useContext} from 'react'
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css'
import CartContext from '../../Store/Cart-Context';



const Cart=(props)=>{

    const ct=useContext(CartContext);
    const [cancel,setCancel]=useState(false);
    // const cartItems=[];
    let Amount=ct.items.reduce((curNumber,item)=>{
        return curNumber+item.price*item.quantity;
    },0);

const nameList=ct.items.map(item=>item.quantity>1&&<li key={Math.random().toString()}>{item.name}-{item.quantity}-{item.price}</li>)
  


const cancelButtonHandler =()=>{
    setCancel(true);
   props.oncancel(cancel)
  }
    
    return (
        <Modal>
            <ul>
           {nameList}
           </ul>
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