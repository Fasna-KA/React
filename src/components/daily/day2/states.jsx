import React,{useState} from 'react'

const States = () => {
    // let counter=0//use let instead of const
    const [counter,setCounter] = useState(0)

    const  handleClick=()=>{
        // counter++//for const it shows error,we cant update value in const
        setCounter(counter+1)
        console.log('counter:'+counter);
    }


  return (
    <div>
      <h1>STATES</h1>
      <h2>Counter:{counter} </h2>
      <button onClick={handleClick}>Increment</button>

    </div>
  );
};
export default States;

//setCounter-setting value to some other value
//counter increment with help of setCounter guided by useState (0)-initial value

