import React,{useState} from 'react'
import Header from "./Components/Layouts/Header";
import Cart from './Components/Cart/Cart'
import MainMeal from './Components/Meals/MainMeal';

function App() {
const [cartOpen,setCartOpen]=useState('')


const cartButtonHandler=(cart)=>{
setCartOpen(cart);
}

const cancelHandler=(val)=>{
setCartOpen(val)
}

  return (
    <React.Fragment>
      <Header onclick={cartButtonHandler}/>
      <main>
      <MainMeal/>
      </main> 
     {(cartOpen&&<Cart oncancel={cancelHandler}/>)}
    </React.Fragment>
  );
}

export default App;
