import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { BiShuffle } from 'react-icons/bi';



function Addingitems({todo,deleteItem,toggle}) {
  return (
    <div><h3>Items added below:</h3>
    <ol>
    {todo.map((ele,ind)=>{
        return <div>
            <li className='li'>{ele.title} <span style={{color:"maroon",fontWeight:"bolder",marginLeft:"1rem"}}>{ele.status?"Completed":"Pending"}</span> <button onClick={()=>{toggle(ind)}}><BiShuffle/> </button>&nbsp;
            <button onClick={()=>{deleteItem(ind)}}> <FaTrashAlt/></button></li>
            
            </div>

    })}</ol>
    </div>
  )
}

export default Addingitems