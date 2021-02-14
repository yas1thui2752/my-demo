import React, { Component } from 'react';
import classes from './App.module.css';

//import styled from 'styled-components';

//import Radium, { StyleRoot } from 'radium';

//import Person from '../components/Persons/Person/Person';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// const ButtonStyles = styled.button`
//   background-color: ${props => props.anyattr ? 'red' : 'green'};
//   color: black;
//   font: inherit;
//   border: 1px solid #ccc;
//   padding: 8px;
//   cursor: pointer;

//   &:hover  {
//     background-color : ${props => props.anyattr ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;
//passing props in the bacground-color with anyattr as attribute on the StyledButton component checks the showPersons value in states and display red if true


class App extends Component {
  state = {
    persons : [
      { id:'agadg1', name: 'some', study:'phd'},
      { id:'qwerq3', name: 'angular', study: 'masters'},
      { id:'zxvcx3', name: 'react', study:'mba'},
      { id:'sdfcx3', name: 'ADA', study:'sherwin'}
    ],
    showPersons: false
  }

  // switchSomehandler = (newName) => {
  //   //console.log("button clicked");
  //   // if you need to change anything from the states properties in the handler function from the states properties then you have to copy the that property
  //   // into the function and then change it there, (react will compare both states and merge with new chages and reflect in DOM)
  //   this.setState({// manuplating data using setState feature is only available in class based components.
  //     persons : [
  //       { name: newName, study:'phd'},
  //       { name: 'angular', study: 'masters'},
  //       { name: 'react', study:'MSIT'}
  //     ]
  //   })
  // }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex]}; //coping persons object with specific index into person

    person.name = event.target.value; // accessing entered value from input

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons : persons
    });
    
    // this.setState({// manuplating data using setState feature is only available in class based components.
    //   persons : [
    //     { name: 'changed name', study:'phd'},
    //     { name: event.target.value, study: 'masters'},
    //     { name: 'react', study:'MSIT'}
    //   ]
    // })
  }

  //delete handler function for button
  deleteHandler = (personIndex) => {
    // By assigning persons array to new variable persons then (in JS for arrays and objects when copied it points to its pointer) 
    //by splicing we are mutating the original array. its not a good practice 
    //const persons = this.state.persons; 
    //so, you can do like these
    //const persons = this.state.persons.slice(); //slicing the array without any arguments will copy the full array. or

    const persons = [...this.state.persons]; //using spread operator to copy the array elements and including in array will result in same array.
    persons.splice(personIndex,1); //removing the elements in the array by factor of 1 by index
    this.setState({persons:persons})
  }

  togglePersonHandler = () => {
    // when button is pressed it will toggle all the persons in DOM
    const doesShow = this.state.showPersons; // accessing showPersons property (false) from above state
    this.setState({
      showPersons: !doesShow //toggling the condition of showPersons.
    });
  }

  render(){

    // const someStyles = {
    //   backgroundColor: 'green',
    //   color:'black',
    //   font: 'inherit',
    //   border: '1px solid #ccc',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // in order to use psudeo styles import radium package and since it starts witk colon(:) so we pass it as string in b/w quotes ('')
    //   ':hover' : {
    //     backgroundColor : 'lightgreen', 
    //     color: 'black'
    //   }
    // };

    //adding JS condition before return and placing persons div in the if condition.
    var persons = null;
    //var btnClass = [classes.Button];

    if(this.state.showPersons) {
      persons = <Persons 
          persons= {this.state.persons}
          clicked = {this.deleteHandler}
          changed = {this.nameChangeHandler}
          />;

          // {/* Using array map function to map dynamically each and every element in the array present in the state person array
          // and mapping with Person component and displaying in DOM. */}
          // {/* Removing below code because persons list is moved into new Persons component.
          // {this.state.persons.map((person, index) => {
          //   return <Person 
          //             click={() => this.deleteHandler(index)}
          //             name={person.name}
          //             study={person.study} 
          //             key = {person.id}
          //             changed = {(event) => this.nameChangeHandler(event, person.id)} />
          //   })} */}
          //     {/* below is the hardcoding part for each and every element in the state person array */}


          //     {/* <Person name={this.state.persons[0].name} study={this.state.persons[0].study} /> */}

          //     {/* on click of paragraph element text should change to data visual that is passed on click */}
          //     {/* <Person
          //       name={this.state.persons[1].name} 
          //       study={this.state.persons[1].study}
          //       click={this.switchSomehandler.bind(this,'data visual')}
          //       changed={this.nameChangeHandler}>something here
          //     </Person>

          //     <Person name={this.state.persons[2].name} study={this.state.persons[2].study} /> */}
        
      
      // someStyles.backgroundColor = 'red'; //since it is JS, so we can add or change styles dynamically(when the person cards seen it will change to red)
      // someStyles[':hover'] = { // using radium package for psudeo styles
      //   backgroundColor : 'salmon',
      //   color: 'white'
      // }

      //btnClass.push(classes.Red);
    }

    //const cssClasses = ['red', 'bold'].join(' '); //output will red bold which are class with styles in app.css

    //pushing red and bold classes to cssClasses variables based on length of persons variable.
    // const cssClasses =[];

    // if(this.state.persons.length <= 2 ){
    //   cssClasses.push('classes.red'); //pushing red class as css module
    // }
    // if( this.state.persons.length <= 1) {
    //   cssClasses.push('classes.bold');
    // }


    return (
     
        <div className={classes.App}>
          <Cockpit
            demoTitle = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonHandler} />
          {persons} 
        </div>
      
    );
  } 
}

export default App;

// {/*  <StyleRoot> </StyleRoot> is using radium package then place these styleroot tags above div */}
//             {/* if using media queries then wrap entire pplication in StyleRoot tags */}
//             {/* Moved below code into cockpit component
//             <h1 className="App-header">
            
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn Reactjs
//             </a>
//             </h1>
//             <p className={cssClasses.join(' ')}>start from here</p>
//             {/* binding onclick event to change text using function return. if decleared in the same line we can skip return statement */}
//             {/* <button className={btnClass.join(' ')}
//               onClick={ this.togglePersonHandler }>switch person</button>  */}

//               {/* if using styled-components and decleared styles in sperate componet then use that here as <ButtonStyles> </ButtonStyles> with anyattr = {this.state.showPersons} */}

//             {/* if you need to add traditional if condition in JSX its not possible. So, you can access JS in jsx by adding code in b/w {}
//             so add a ternary condition inside curly brackets, inorder to execute js conditions. */}
//             {/* { this.state.showPersons ?
//               <div>some html code to display</div> : null
//             } */}
          
//           {/* refering persond variable in here to display */}
