import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return ( 
    <div style={{display:'flex' , gap:'10px'}}>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/landingPage'>Landing</Link>
        <a href='contact'>Contact</a> 
        {/* anchor tag take time to load,Link will load fastly */}
    </div>
        );
}
 
export default NavigationBar;