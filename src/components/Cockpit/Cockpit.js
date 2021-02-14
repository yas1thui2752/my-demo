import React, { useEffect } from 'react';

import classes from './_Cockpit.module.css';

const Cockpit = (props) => {

    useEffect(() => {
        console.log("useeffect");
    }, []);

    const cssClasses =[];
    var btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
     
    if(props.persons.length <= 2 ){
        cssClasses.push(classes.red); //pushing red class as css module
    }
    if( props.persons.length <= 1) {
        cssClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>
              {props.demoTitle}
            </h1>
            <p className={cssClasses.join(' ')}>start from here</p>
            {/* binding onclick event to change text using function return. if decleared in the same line we can skip return statement */}

            <button className={btnClass}
              onClick={ props.clicked }>switch person</button>
        </div>
        
    );
}

export default Cockpit;