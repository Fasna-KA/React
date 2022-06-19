import {useSearchParams} from 'react-router-dom'

const SearchParams = () => {
const [searchParams , setSearchParams] = useSearchParams();

console.log(setSearchParams);
console.log(searchParams.get('name'));

// const getDynamicData = () =>{
//     const cars = searchParams.company


// if(company === 'tesla'){
//     return <h1>Car Company is {company}, and it is used by rich </h1>
// }
// else if(company === 'suzuki'){
//     return <h1>Car company is {company}, and it is used by poor </h1>
// }
// else{
//     return <h1>Car company : {company} </h1>
// }
// };



    return ( <>
    <h1>Car Company: {searchParams.get('company')}</h1>
    <h1>Car Model: {searchParams.get('name')}</h1>

    {/* {getDynamicData()} */}
    </> );
}
 
export default SearchParams;