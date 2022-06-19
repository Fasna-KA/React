import { useEffect,useState } from "react";

const EventHandling = () => {
    const [inputVal,setInputVal]= useState('')

    const handlechange = (event) =>{
        setInputVal(event.target.value)
        console.log(event)
        console.log(event.target.value)//to show value in input
    }
    const handleclick = () =>{
        console.log('clicked')

    }

    useEffect(()=>{
        document.addEventListener('keydown',handlekeyDown)
    },[])
    const handlekeyDown= (event)=> console.log('keydown',event.keyCode)
    return ( <>
    <button onClick={handleclick}>Click</button>
    <input value={inputVal} onChange={handlechange}></input>

    <h1 onMouseOver={()=>console.log('onMouseover')}>Welcome</h1>

    <h1>This is On key Down</h1>
    </> );
}
 
export default EventHandling;