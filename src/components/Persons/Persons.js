import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {


    shouldComponentUpdate(nextProps, nextState){
            console.log('persons.js shouldComponentUpdate');
            if(nextProps.persons !== this.props.persons){
                return true;
            } else {
                return false;
            }
        }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    // componentWillUpdate() {

    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    
    render() {
        return this.props.persons.map((person, index) => {
            return(
                <Person 
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    study={person.study} 
                    key = {person.id}
                    changed = {(event) => this.props.changed(event, person.id)} 
                />
            ); 
        });
    }
}

export default Persons;

// since this is functional component we can write using return method or not. 
//you can use directly (); in place of return if writing in single line.
