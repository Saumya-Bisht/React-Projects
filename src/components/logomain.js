import dots from './images/dots.png'
import girl from './images/girlimage.jpg'
function Mainlogo(){
    return <div style={{display:"flex",height:"65vh",justifyContent:"space-evenly"}}>
        <div style={{width:"30%",height:"80%",marginTop:"3%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}><h1 >Header</h1>
        <h1 style={{marginTop:"-5%"}}>Footer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dignissimos perferendis nesciunt, qui quam nostrum autem doloremque asperiores, repudiandae aut dolore quae expedita nihil nobis quisquam corporis reiciendis, exercitationem earum.

        </p>
        <img src={dots}/>
        </div>
        <div style={{display:"flex",justifyContent:"center",padding:"2%"}}>
        <img src={girl}/>
        </div>
    </div>
}
export default Mainlogo