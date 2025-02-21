import React, { Component } from 'react';

class ToDo extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            toDoList: [],
            toDo: '',
        }
    }

    handleChange(event){
        this.setState({ toDo: event.target.value})
    }

    handleClick = () => {
        const toDoCopy = this.state.toDoList.slice();
        toDoCopy.push(this.state.toDo);
        this.setState({ toDoList: toDoCopy })
    }

    render(){
        console.log(this.state.toDoList);
        return (
            <>
                <h1>My TO DO list</h1>
                <input onChange={(event) => this.handleChange(event)}/>
                <button onClick={this.handleClick}>Add to List</button>
                <ul>
                    {this.state.toDoList.map((toDo) => <li>{toDo}</li>)}
                </ul>
           </> 
        )
    }
}

export default ToDo;