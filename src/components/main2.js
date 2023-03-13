import { FaUserCheck } from "react-icons/fa";
import { FaRecycle } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';
function Main2(){
    let divstyle={color:"black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"30%"}
    return <div style={{backgroundColor:"white", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"70vh"}}>
        <h1 style={{fontSize:"3rem"}}>Our Features</h1><br/>
        <div style={{textAlign:"center",display:"flex",justifyContent:"space-evenly"}}>
            <div style={divstyle}>
                <i style={{fontSize:"2rem",backgroundColor:"blue",borderRadius:"50%",padding:"25px",textAlign:"center",color:"white"}} class="bi bi-laptop"><FaLaptop/></i>
                <h3 style={{fontSize:"1.5rem"}}>Fully Responsive</h3>
                <p style={{fontSize:"1.2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus praesentium aliquid? Optio commodi nihil voluptatibus dolorum laudantium nostrum voluptate.</p>
                <a href="#" style={{color:"blue",textDecoration:"none"}}>Read More</a>
            </div>
            <div style={divstyle}>
                <i style={{fontSize:"2rem",backgroundColor:"blue",borderRadius:"50%",padding:"25px",textAlign:"center",color:"white"}} class="bi bi-person-fill-check"><FaUserCheck/></i>
                <h3 style={{fontSize:"1.5rem"}}>Trusted Author</h3>
                <p style={{fontSize:"1.2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus praesentium aliquid? Optio commodi nihil voluptatibus dolorum laudantium nostrum voluptate.</p>
                <a href="#" style={{color:"blue",textDecoration:"none"}}>Read More</a>
                </div>
            <div style={divstyle}><i style={{fontSize:"2rem",backgroundColor:"blue",borderRadius:"50%",padding:"25px",textAlign:"center",color:"white"}} class="bi bi-recycle"><FaRecycle/></i>
                <h3 style={{fontSize:"1.5rem"}}>Reusable Elements</h3>
                <p style={{fontSize:"1.2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus praesentium aliquid? Optio commodi nihil voluptatibus dolorum laudantium nostrum voluptate.</p>
                <a href="#" style={{color:"blue",textDecoration:"none"}}>Read More</a></div>
        </div>
        </div>
}
export default Main2