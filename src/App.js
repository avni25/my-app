import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import React from "react";


let MYNUM = 10;

const styleCounter = {
  backgroundColor: 'red',
  color: 'white',
  font: 'inherit',
  border: '1px solid blue',
};
const styleToggleDisplay ={
  backgroundColor: 'blue',
  color: 'white',
  font: 'inherit',
  border: '1px solid blue',
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>huseyin avni</h1>
        {/* <Fruits /> */}
        <ShoppingCart date={Date()}/>
        <Person name={"qwe"} eyeColor={"qweq"}/>
        <Camper />
        <ShoppingList/>
        <Counter/>
        <ControlledInput />
        <MyForm />
        <ToggleDisplay />
        <DisplayMessages />
        <div id="mydiv"></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart {props.date}</h1>
      <p>{props.fx}</p>
    </div>
  )
};

ShoppingCart.defaultProps = {fx:"qwer"};

class ShoppingList extends React.Component{
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}



const Person = (props)=> {  
    return (
      <div>
        <p> Name: {props.name} </p>
        <p>EyeColor: {props.eyeColor}</p>
        <p>Age : {props.age} </p>
      </div>
    )  
};
  
Person.defaultProps = {
  name: "huseyin",
  eyeColor: "green",
  age: "37"
}

const Camper = (props) => {
  return(
    <div>
      <p> {props.name} </p>
      <input type="text"></input>
      <button>Click me</button>
    </div>
  );
}
Camper.defaultProps = {
  name: "CamperBot"
};
Camper.propTypes = {
  name: PropTypes.string.isRequired
};

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count: 0,
      q:500
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  increment(){
    MYNUM++;
    this.setState((s)=>({
      count: s.count+1
    }));
  }

  decrement(){
    if(this.state.count > 0){
      this.setState(s => ({
        count: s.count-1
      }));
    }      
  }

  reset(){
    this.setState(()=>({
      count: 0
    }));
  }
  shouldComponentUpdate(nextProps, nextState){
    // it shows the count value until it reaches 10. after 10 it doesnt update.
    return nextState.count >= 10 ? false:true;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(s=> ({
        q: s.q+10
      }));
    }, 1000);
  }
    
  render(){
    return(
      <div style={styleCounter}>
        <button className='inc' onClick={this.increment}>Inc</button>
        <button className='dec' onClick={this.decrement} >Dec</button>
        <button className='res' onClick = {this.reset}>Reset</button>
        <h1>{this.state.count}</h1>
        <h2>Global variabla: {MYNUM}</h2>
        <h1>componentDidMount: {this.state.q}</h1>
      </div>
    );
  }

}

class ControlledInput extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      input: ""
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event){
    console.log(event);
    this.setState({
      input: event.target.value
    });
  }

  render(){
    return(
      <div>
        <input value={this.state.input}  onChange= {this.handleChange} ></input>
        <p> {this.state.input} </p>
      </div>
    )
  }

}



class MyForm extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          input:"",
          state: ""
      }
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
      this.setState({
          input: event.target.value
      });
  }

  handleSubmit(event){
      this.setState({
          state: this.state.input
      })
  }

  render(){
      return(
          <div>
              <form onSubmit={this.handleSubmit}> 
                  <input value={this.state.input} onChange={this.handleChange} />
                  <button type="submit" >Submit</button>
              </form>
              <h1>{this.state.input}</h1>
          </div>
      )
  }


}


class ToggleDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state={
      display:true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.setState(s=>({
      display: !s.display
    }));
  }

  render(){    
      return(
        <div style={styleToggleDisplay}>
          <button onClick={this.handleChange}>Hide</button>
          {this.state.display && <h1>hide me</h1>}
        </div>
      )
  }    

}


class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    });
  }
  
  submitMessage(){
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input]
    });  
  }
  

  render() {
    const mylist = this.state.messages.map((item)=>{
      return <li key={item}> {item} </li>;
    });

    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
          <input value={this.state.input} onChange={this.handleChange}/>
          <button onClick={this.submitMessage}>click</button>
          <ul>{mylist}</ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};

 




export default App;
