import React from 'react'
import Addingitems from './Addingitems'
import { useState } from 'react'

function Todo() {
    let[inputvalue,setInputvalue]=useState()
    let[buttonvalue,setButtonvalue]=useState([])

    

    function addItem(){
        var newItem={
            title:inputvalue,
            status:false,
        }
        setButtonvalue([...buttonvalue,newItem])
    }

    const deleteItem=((ind)=>{
        var filteredData=buttonvalue.filter((e,i)=>{
            return ind!=i
        })
        setButtonvalue(filteredData)
    })

    const toggle=((ind)=>{
        var newarr=buttonvalue.map((ele,i)=>{
            return ind===i?{...ele,status:!ele.status}:ele;
        })
        setButtonvalue(newarr)
    })

  return (
    <div>
        <h2 style={{textAlign:"center",color:"white"}}>TODO LIST</h2>
        <input value={inputvalue} onChange={(e)=>setInputvalue( e.target.value)} type="text" placeholder='Enter an activity or item...'/>
        <button onClick={addItem}>Add Item</button>
        <Addingitems todo={buttonvalue} deleteItem={deleteItem} toggle={toggle}/>
    </div>
  )
}

export default Todo