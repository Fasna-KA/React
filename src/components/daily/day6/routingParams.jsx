import { useParams } from "react-router-dom";


const RoutingParams = () => {
    const params = useParams()
    console.log(params);
    

    const getDynamicData = () =>{
        const appliance = params.appliance
    
    
    if(appliance === 'mixer'){
        return <h1>Current appliance is {appliance}, and it is used in Home </h1>
    }
    else if(appliance === 'phone'){
        return <h1>Current appliance is {appliance}, and it is used for calling </h1>
    }
    else{
        return <h1>Current appliance : {appliance} </h1>
    }
    };

    return ( <>
    {/* <h1>Routing Params</h1>  */}
    {getDynamicData()}
    </> );
}
 
export default RoutingParams;