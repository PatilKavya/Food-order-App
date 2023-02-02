import React,{useState} from 'react'
import Header from "./Components/Layouts/Header";
import Cart from './Components/Cart/Cart'
import MainMeal from './Components/Meals/MainMeal';
import CartProvider from './Store/CartProvider';

function App() {
const [cartOpen,setCartOpen]=useState('')


const cartButtonHandler=(cart)=>{
setCartOpen(cart);
}

const cancelHandler=(val)=>{
setCartOpen(val)
}

  return (
    <CartProvider>
      <Header onclick={cartButtonHandler}/>
      <main>
      <MainMeal/>
      </main> 
     {(cartOpen&&<Cart oncancel={cancelHandler}/>)}
    </CartProvider>
  );
}

export default App;
