import React from "react";

class LifeCycleComp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 1
        }
        this.id = null
    }

   componentDidMount() {
    console.log('Component Did Mount')
    this.id = setInterval(() => {
        console.log('Set Interval');
    }, 2000);
   } 

   componentDidUpdate(){
    console.log('Component Did Update');
   }

   componentWillUnmount() {
    console.log('Component Did Unmount');
    clearInterval(this.id)
   }

   handleClick = () => {
    this.setState({ counter: this.state.counter + 1})
   }


  render(){
    return(

        <>
        <h1>Counter : {this.state.counter}</h1>
        <button onClick={this.handleClick}>click</button>
        </>
    )
  } 


}

export default LifeCycleComp