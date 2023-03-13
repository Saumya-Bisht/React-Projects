import grid1 from './images/grid1.jpg';
import grid2 from './images/grid2.jpg';
import grid3 from './images/grid3.jpg';
import grid4 from './images/grid4.jpg';
import grid5 from './images/grid5.jpg';
import grid6 from './images/grid6.jpeg';
import grid7 from './images/grid7.jpg';
import grid8 from './images/grid8.jpg';


let div3={width:"20%"}
        let h2={color:"white",fontSize:"1.5rem"}
        let p1={color:"white"
        ,fontSize:"1.2rem",paddingTop:"6%"
        }
        let p2={color:"white"

        }
        let imgstyle={width:"80px",height:"80px"}
        function Footer(){
            return <div style={{backgroundColor:"black",height:"60vh",display:"flex",justifyContent:"space-evenly"}}>
                    <div style={div3}>
                        <h2 style={h2}>ABOUT CARS BUSINESS PRO</h2>
                        <p style={p1}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum natus dolorum at deserunt nihil architecto eveniet delectus fuga, inventore autem cum et iusto labore reiciendis dignissimos debitis vitae, incidunt quaerat vero nostrum dicta sed nobis pariatur? A illum nostrum dolorum.</p>
                        </div>
                    <div style={div3}>
                        <h2 style={h2}>RECENT POSTS</h2>
                        <div><p style={p1}>Fly to London</p><p style={p2}>February,2023</p></div>
                        <div><p style={p1}>Stair Communication</p><p style={p2}>February,2023</p></div>
                        <div><p style={p1}>Do you want to buy a car!?</p><p style={p2}>February,2023</p></div>
                        </div>
                    <div style={div3}><h2 style={h2}>GALLERIES</h2>
                        <div  style={{width:"140%",height:"50%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",padding:"5px",margin:"5px"}}>
            
                            <img style={imgstyle} src={grid1}/>
                            <img style={imgstyle} src={grid2}/>
                            <img style={imgstyle} src={grid3}/>
                            <img style={imgstyle} src={grid4}/>
                            <img style={imgstyle} src={grid5}/>
                            <img style={imgstyle} src={grid6}/>
                            <img style={imgstyle} src={grid7}/>
                            <img style={imgstyle} src={grid8}/>
                            
                        </div>
                        </div>
                </div>
        }

        export default Footer