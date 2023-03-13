function Header(){
    let style={color:"white",textDecoration:"none",fontSize:"17px"}
    let divstyle={color:"black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"30%"}
    return <div style={{height:"13vh",backgroundColor:"black",display:"flex",justifyContent:'space-between'}} >
    <div style={{width:"30vw",display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}} ><h3 style={{color:"white",fontSize:"2rem"}} >Cars Business Pro 😉</h3></div>
    <div style={{display:"flex",justifyContent:"space-evenly",width:"45vw",alignItems:"center"}}>
        <a style={style} href="#">Home</a>
        <a style={style} href="#">About Us</a>
        <a style={style} href="#">Styleguide</a>
        <a style={style} href="#">Blog</a>
        <a style={style} href="#">Contact Us</a>
        </div>
    </div>
}
export default Header