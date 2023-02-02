import CartContext from "./Cart-Context";
import React,{useState} from 'react'


const CartProvider=(props)=>{
const [items,setItems]=useState([{name:'Sushi',details:'Finest fishes and veggies',price:60,quantity:0},
{name:'Dosa',details:'Breakfast',price:50,quantity:0},
{name:'Idli',details:'two piece per plate',price:20,quantity:0 },
{name:'Roti',details:'South Indian',price:30,quantity:0}])


const updateQuantity=(item)=>{
items.forEach(each=>
   each.name===item.name ? setItems([...items,{...each,quantity:each.quantity++} ]): setItems([...items])
)  

}
console.log(items)


const removeItemHandler=id=>{};


const cartContext={
      items:items,
    totalAmount:0,
    // addItem:addItemToCartHandler,
    removeItem:removeItemHandler,
    updateItem:updateQuantity
}



    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;