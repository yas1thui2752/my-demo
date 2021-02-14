import React from 'react';

//import styled from 'styled-components';

//import Radium from 'radium';

import classes from './_Person.module.css';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//         width : 450px;
//         background-color: orange;
//     }
// `; use these if using styled-components

const person = (props) => {

    //use this for radium package
    // const personStyles = {
    //     '@media (min-width: 500px)': {
    //         width : '450px',
    //         backgroundColor: 'orange'
    //     }
    // };
    return(
        <div className={classes.Person}>
            
            {/* If you want to states method in to a staless or a function component then refer that as html attribute and in the functional componet 
            refer its attribute name(click --> name of attr in app.js file  */}

            <p onClick={props.click}>i'm {props.name} and class {props.study} </p>

            <span>{props.children}</span> 
            {/* something present in 2nd person tag can be accessed by childern property */}
            <br />
            
            <input type="text" onChange={props.changed} value={props.name} />
           
        </div>
    );
};

export default person;
