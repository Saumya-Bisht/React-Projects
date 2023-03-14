import rocket from './images/rocketicon.png'
import news from './images/newsfeed.png'
import people from './images/peopleicon.png'
let imgStyle={height:"100px",width:"100px",marginTop:"10%"}
let divstyle={display:"flex",flexDirection:"column",justifyContent:"center",

alignItems:"center"}
let p1={fontWeight:"bolder",fontSize:"1.7rem"}
let p2={color:"gray",fontWeight:"bold",marginTop:"-2%"}
function Footer(){
    return <div style={{height:"35vh",display:"flex",justifyContent:"space-evenly"}}>
        <div style={divstyle}>
            <img style={imgStyle} src={rocket}/>
            <p style={p1}>2,500</p>
            <p style={p2}>enterprise organizations successfullly launched</p>
        </div>
        <div style={divstyle}>
        <img style={imgStyle} src={news}/>
            <p style={p1}>45,000</p>
            <p style={p2}>enterprise users onboarded seamlessly</p>
        </div>
        <div style={divstyle}>
        <img style={imgStyle} src={people}/>
            <p style={p1}>200,000+</p>
            <p style={p2}>professionals trained on product and strategy</p>
        </div>
    </div>
}
export default Footer