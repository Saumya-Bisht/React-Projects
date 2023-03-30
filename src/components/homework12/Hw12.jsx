import {useState,useEffect} from 'react';

function Hwtwelve(){

    const [fake,setFake]=useState([])
    // console.log(fake);

    useEffect(()=>{
        fakestore()
    },[])

    const fakestore=async()=>{
        const res=await fetch ("https://fakestoreapi.com/products")
        const data=await res.json()
        setFake(data)
        
    }
    

    return (
        <div className='body'>
            <h1>Product Gallery </h1>
            <div className="container">
              {fake.map((val)=>{
                return (
                    <div className="box">
                  
                    <div className="childiv">
                    <h5>{val.title}</h5>
                        <p>{val.price}$</p>
                        <img src={val.image}></img>
                    <button>Buy Now</button>
                    </div>
                    
                </div>
                
                )
              })}  
               
               
              
            </div>
        </div>
    )
}

export default Hwtwelve