import React, {Component} from 'react';

//this is a class compo using state
class D extends Component {
    constructor() {
        super();
        this.state={
            counter:0
        }
    }

    incrementCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }),()=>{console.log(this.state.counter)});
    };

    decrementCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1,
        }),()=>{console.log(this.state.counter)});
    };

    resetCounter = () => {
        this.setState((pre)=>({
            counter:0
        }),()=>{console.log(this.state.counter)});
    };
    render() {
        return (
            <div>
                <h1> the value of the counter is {this.state.counter}</h1>
                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        );
    }
}

export default D;
