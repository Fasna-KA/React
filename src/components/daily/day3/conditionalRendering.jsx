import { useState } from "react";


const ConditionalRentering = () => {
    const [showApple,setShowApple] = useState(true)

    setInterval(() => {
        setShowApple(!showApple)
    }, 3000);
    return ( <>
    {showApple ? <h1>Apple is showing</h1> : <h2>Banana is showing</h2>}
        </> );
}
 
export default ConditionalRentering;