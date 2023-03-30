import React,{useEffect, useState} from 'react'
import './card.css'
import {Button, Card} from 'react-bootstrap'
 function CardDisplay(){
    const [user,setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData =()=>{
    setIsLoading(true);
    fetch('https://randomuser.me/api/?results=20')
    .then((response) =>{
        return response.json();
    }).then((data)=>{
        let userdata = data.results
        setUser(userdata)
        setIsLoading(false)
    })
  }

  useEffect(()=>{
      fetchData();
  },[])
    return (
    
        <div>
          {isLoading ? 
          <div className='text-center mt-5'>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
    
           : 
          
           <div className='pt-4'>
            <div className='text-center'>
              <h2 className='ProjectTitle'>Random User API</h2>
              <h4>Mini Project</h4>
            </div>
       
           
            {user.map(data => (
              
              <div className='center-card'>
              
                <div className=''>
                  <div className="" key={data.id.value}>
                    <Card>
    
                      <Card.Img variant="top" src={data.picture.large} />
    
                      <Card.Body>
                        <Card.Title>{data.name.first +" " +data.name.last}</Card.Title>
                        <p>{data.location.city +", " +data.location.state}</p>
                        <p><i className="fa fa-phone"></i> {data.phone}</p>
                        <h6><i className="fa-solid fa-envelope"></i> {data.email}</h6>
    
                        {/*<Button variant="primary">New User</Button>*/}
                      </Card.Body>
    
                    </Card>
                  </div>
                </div>
              </div>
            ))}
              <div className='text-center'>
                <Button className='btn btn-lg' variant="dark" onClick={fetchData} disabled={isLoading}>New User</Button> 
              </div>
              
           </div>
            }
        </div>
      );
 }
 export default CardDisplay