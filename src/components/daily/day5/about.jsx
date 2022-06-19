import { useNavigate} from 'react-router-dom'

const About = () => {

    const navigate = useNavigate()

    return ( <>
    <h1>About page</h1>
    <button onClick={() => navigate ('/home')}> Home </button>
    <button onClick={() => navigate ('/contact')}> Contact </button>
    </> );
}
 
export default About;