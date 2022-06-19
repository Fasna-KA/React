import { useEffect, useState } from "react";


const UseEffectComp = () => {
    const [counter,setCounter] = useState(0)
    const [decrementCounter,setDecrementCounter] = useState(100)

    useEffect(()=>{
        document.addEventListener('keydown',handleKeydown)
        console.log('Increment');
        return() => {
            document.addEventListener('keydown',handleKeydown)
        }
    },[counter])

    useEffect(()=>{
        console.log('Decrement');
        return() => {console.log('Return-Decrement');}

    },[decrementCounter])

    useEffect(()=>{
        return() => {console.log('Compound Unmounted');}

    },[])

    const handleKeydown = (e) => {
        console.log('key pressed',e.keyCode);
    }

    return ( <>
    <h1>Increment Counter : {counter}</h1>
    <button onClick={()=> setCounter(counter+1)}>Increment</button>
    <h1>Decrement Counter : {decrementCounter}</h1>
    <button onClick={()=> setDecrementCounter(decrementCounter -1)}>Decrement</button>
    </> );
}
 
export default UseEffectComp;