import { NavLink } from "react-router-dom";

const NavLinkComp = () => {
    const activeLink ={
        color:'red'
    }


    return ( 
    <div style={{ display:'flex' , gap :'10px'}}>
        <NavLink to='/home' style={({ isActive}) => (isActive ? activeLink : null)}>Home</NavLink>
        <NavLink to='/contact' style={({ isActive}) => (isActive ? activeLink : null)}>Contact</NavLink>
        <NavLink to='/about' style={({ isActive}) => (isActive ? activeLink : null)}>About</NavLink>

    </div>
     );
}
 
export default NavLinkComp;