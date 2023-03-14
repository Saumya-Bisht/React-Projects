import { FaFacebookF} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Header(){
    return <div style={{backgroundColor:"lightgray",display:"flex",justifyContent:"space-evenly",alignItems:"center",height:"12vh"}}>
        <div style={{width:"100px",fontSize:"1.3rem",height:"90%",display:"flex",alignItems:"center",color:"gray"}}><h1>logo</h1></div>
        <div style={{width:"350px",display:"flex",justifyContent:"space-between",fontWeight:"bolder",fontSize:"1.2rem"}}>
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
        </div>
        <div style={{width:"130px",fontSize:"2rem",display:"flex",justifyContent:"space-between",color:"gray"}}>
        <FaFacebookF/>
        <FaTwitter/>
        <FaInstagram/>
        </div>
    </div>
}
export default Header