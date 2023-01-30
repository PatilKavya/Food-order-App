import React from 'react';

import classes from './Summary.module.css'
const Summary = () =>{


    return (
        <React.Fragment>
        <div className={classes.summary}>
         <h1>Delicious Food,Delivered To You</h1>
            <p>
                Choose your favorite meal from our broad selection of available meals and enjoy a delicious
                                             lunch or Dinner at Home.<br/>
                   All our meals are cooked with high-quality ingredients,just-in-time and of course by 
                                                Experianced cheifs.
            </p>
        </div>
        </React.Fragment>
    )
}

export default Summary;