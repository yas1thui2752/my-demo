import React from 'react';

import classes from './_Person.module.css';


const person = (props) => {

    return(
        <div className={classes.Person}>
            
            {/* If you want to states method in to a staless or a function component then refer that as html attribute and in the functional componet 
            refer its attribute name(click --> name of attr in app.js file  */}

            <p onClick={props.click}>i'm {props.name} class in {props.study} </p>

            <span>{props.children}</span> 
            {/* something present in 2nd person tag can be accessed by childern property */}
            <br />
            
            <input type="text" onChange={props.changed} value={props.name} />
           
        </div>
    );
};

export default person;
