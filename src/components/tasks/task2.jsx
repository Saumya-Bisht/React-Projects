import {useState} from 'react';
function Task2(){
            let[list,setList]=useState("----Display Area----")
            let[buttonvalue,setButtonvalue]=useState([])

            const ListItem=()=>{
                setButtonvalue([...buttonvalue,list])
            }
            function Addingitems({todo}) {
                return (
                  <div>
                  <ol>
                  {todo.map((ele)=>{
                      return <li>{ele}</li>
                  })}</ol>
                  </div>
                )
              }

    return <div className='container2'>
        <h2>Task 2</h2>
        <input onChange={e=>setList(e.target.value)} id='inp' type="text" placeholder='Start Typing...'/>
        <button onClick={ListItem} id='button'>Submit</button>
        <p  id='para'>{list}</p>
        <Addingitems todo={buttonvalue}/>
    </div>

}
export default Task2