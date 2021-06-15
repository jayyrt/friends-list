import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.secondHandle = this.secondHandle.bind(this);
  }

  handleClick(){
    this.setState({ counter: this.state.counter + 1 })
  }

  secondHandle(){
    this.setState({ counter: this.state.counter - 1})
  }

  render(){
    return(
      <div className="App">
      <h1>Hello World</h1>
      <h2>This is my first React app</h2>
      <div>{this.state.counter}</div>
      <button onClick={this.handleClick}>Increase</button>
      <button onClick={this.secondHandle}>Decrease</button>
      </div>
    )
  }
} 

export default App;