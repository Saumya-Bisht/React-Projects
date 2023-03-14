import logo from "./images/Hootsuite-Logo.png"
function Header(){
    return <div style={{height:"15vh",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <div>
            <img style={{height:"80px",width:"200px"}} src={logo} />
        </div>
        <div style={{width:"35vw",display:"flex",justifyContent:"space-evenly",marginLeft:"-7%",fontWeight:"bolder"}}>
            <a>Platform</a>
            <a> Plans</a>
            <a> Enterprise</a>
            <a> Resources</a>
            <a> Education</a>
        </div>
        <div style={{width:"20vw",display:"flex",justifyContent:"space-evenly",alignItems:"center",color:"gray"}}><a>Contact Us</a>
        <a>Login</a>
        <button style={{color:"white",backgroundColor:"green",border:"0",height:"35px",width:"80px"}}>Sign Up</button>
        </div>
    </div>
}
export default Header