// import logo from "./logo.svg";
import "./App.css";
// import Message from "./components/daily/day1/message";//day1

// import States from "./components/daily/day2/states";
// import StateClass,{myS} from "./components/daily/day2/stateClass";//day2

// import Styling from "./components/daily/day3/Styling";
// import ReactProps from "./components/daily/day3/reactProps";
// import Cards from "./components/daily/day3/cards";
// import { useState } from "react";
// import CounterComp from "./components/daily/day3/counterComp";
// import ConditionalRentering from "./components/daily/day3/conditionalRendering";//day3

// import EventHandling from './components/daily/day4/eventHandling'
// import LifeCycleComp from './components/daily/day4/lifeCycle'

// import {BrowserRouter , Routes , Route} from 'react-router-dom'
// import Landing from "./components/daily/day5/landingPage";
// import Home from "./components/daily/day5/home";
// import Contact from "./components/daily/day5/contact";
// import About from "./components/daily/day5/about";
// import NotFound from "./components/daily/day5/notFound";
// import NavigationBar from "./components/daily/day5/navigationBar";
// import RoutingParams from "./components/daily/day6/routingParams";
// import SearchParams from "./components/daily/day6/searchParams";
// import NavLinkComp from './components/daily/day6/navLink'

import { useState } from "react";
import UseEffectComp from './components/daily/day7/useEffectComp'


function App() {

  const [showLifeCycleComp,setShowLifeCycleComp] = useState(true)

  // const [counter, setCounter] = useState([10, 20, 30]);

  // const fruit = ["Apple", "Mango", "banana", "guava", "pappaya", "pineapple"];
  // const fruits = [
  //   { name: "Apple", description: "Color is red", season: "Winter" },
  //   { name: "Mango", description: "Color is yellow", season: "Winter" },
  //   { name: "guava", description: "Color is green", season: "Summer" },
  //   { name: "Pappaya", description: "Color is Yellow", season: "Winter" },
  // ];

  // const handleClick = (index) => {
  //   const copyCounter = [...counter];
  //   copyCounter[index] = copyCounter[index] + 10;
  //   setCounter(copyCounter);
  // };


  //day4
  // const [showLifeCycleComp,setShowLifeCycleComp]= useState(true)

  return (
    <div className="App">


      {/* day1
    <h1>Im Fasna ,Here to learn REACT</h1>
      <h2>I NEED TO LEARN,I WILL</h2>
      <h1>BE CONFIDENT</h1>

      <pre>FASNA AZEEZ</pre>

    <Message/>
    <Message/> */}

      {/* day2
       <States />
      <StateClass/>
      {myS} */}

      {/* <Styling />
      <ReactProps name="Iam from Parent*" id={1} />
      <ReactProps name="Iam from Parent+" id={2} /> */}
      {/* props in parent */}
      {/* {fruit.map((FruitName) => (
        <ReactProps fname={FruitName} />
      ))} */}
      {/*js in jsx should be inside {} --here map  */}

      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {fruits.map((fruitObj) => {
          const { name, description, season } = fruitObj;
          return (
            <Cards name={name} description={description} season={season} />
          );
        })}
      </div>

      {counter.map((counter, i) => (
        <CounterComp value={counter} handleClick={handleClick} index={i} />
      ))}

      <ConditionalRentering/> */}

      {/* <EventHandling/>

      {showLifeCycleComp ? <LifeCycleComp/> : null }
      <button onClick={() => setShowLifeCycleComp(!showLifeCycleComp)}>UNmount</button>
 */}


    {/* <BrowserRouter>

    <NavigationBar/>

    <NavLinkComp/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/electronics/:appliance' element={<RoutingParams/>}/>
      <Route path='/cars' element={<SearchParams/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<NotFound/>}/>


    </Routes>

    </BrowserRouter> */}

    {showLifeCycleComp ? <UseEffectComp/> : null }
    <button onClick={() => setShowLifeCycleComp(!showLifeCycleComp)}>Show/Hide</button>
      
    </div>
  );
}

export default App;
