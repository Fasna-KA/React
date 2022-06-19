import React , { Component } from "react";

class StateClass extends Component {
    constructor() {
        super()
        this.state = {
            counter : 0
        }
    }
    handleClick = () => {
        this.setState({
            counter:this.state.counter+1,
        })
        
    }

render(){
    const {counter}=this.state
    

    return (
        <div>
            <h1>This is Class State</h1>
            {/* <h2>Class COunter : {this.state.counter}</h2> */}
            <h2>Class COunter : {counter}</h2>
            <button onClick={this.handleClick}>Increment class counter</button>
        </div>
    )
}
}
export default StateClass

//if not default export
//use same var name {myS} in import
//in render write like -- {myS} !not <myS/>

export const myS = "DEFAULT"





