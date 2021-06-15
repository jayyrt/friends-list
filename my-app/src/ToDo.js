import React, { Component } from 'react';

class ToDo extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            toDos: []
        }
    }

    render(){
        return (
            <>
                <h1>My TO DO list</h1>
                <input />
                <button>Add to List</button>
                <ul>
                    <li>our to dos</li>
                </ul>
           </> 
        )
    }
}

export default ToDo;