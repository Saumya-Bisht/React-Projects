import { FaTrophy } from 'react-icons/fa';
import {FaBriefcase } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
let div2style={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"15%"}
let iconStyle={fontSize:"3rem",color:"white"}
let pstyle={fontSize:"2rem",color:"white"}
let p2style={fontSize:"1.2rem",color:"white",marginTop:"-15%"}
function Main3(){
    return <div style={{backgroundImage:"url(https://wallpapercave.com/wp/wp5060306.jpg)",backgroundSize:"cover",display:"flex",justifyContent:"space-evenly",alignItems:"center",height:"60vh"}}>
            <div style={div2style}>
                <i style={iconStyle} class="bi bi-trophy-fill"><FaTrophy/></i>
                <p style={pstyle}>30</p>
                <p style={p2style}>Awards Winning</p></div>
            <div style={div2style}>
                <i style={iconStyle} class="bi bi-briefcase-fill"><FaBriefcase/></i>
                <p style={pstyle}>150</p>
                <p style={p2style}>Finished Projects</p></div>
            <div style={div2style}>
                <i style={iconStyle} class="bi bi-car-front-fill"><FaCar/></i>
                <p style={pstyle}>80</p>
                <p style={p2style}>Products Sold</p></div>
            <div style={div2style}>
                <i style={iconStyle} class="bi bi-twitter"><FaTwitter/></i>
                <p style={pstyle}>99999</p>
                <p style={p2style}>Twitter Fans</p></div>
        </div>
}
export default Main3