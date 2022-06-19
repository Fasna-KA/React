import React from "react";
import './style.css'//import css file

const Styling = () => {

    const styleObj = {backgroundColor:'pink' , color:'black'}

    return ( 
        <>
        <h1>CSS STYLING</h1>
        <h2 style={{backgroundColor:'Yellow' , color:'brown'}}>Inline Styling</h2>
        <h2 style={styleObj}>Styling with const declaration before return</h2>
        <h2 className="h2">External CSS Styling</h2>
        </>
     );
}
 
export default Styling;