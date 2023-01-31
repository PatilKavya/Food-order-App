import React from 'react'
import Header from "./Components/Layouts/Header";
import Cart from './Components/Cart/Cart'
import MainMeal from './Components/Meals/MainMeal';

function App() {


  return (
    <React.Fragment>
      <Header/>
      <main>
      <MainMeal/>
      </main> 
      <Cart/>
    </React.Fragment>
  );
}

export default App;
