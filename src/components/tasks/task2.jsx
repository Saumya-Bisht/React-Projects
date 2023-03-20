import {useState} from 'react';
function Task2(){
            let[list,setList]=useState("---Display area---")

            // function Listitem(){
            //     let a=document.getElementById('inp')
            //     setList(a.value);
                
            // }
            const ListItem=()=>{
                let a=document.getElementById('inp')
                setList(a.value);
            }

    return <div className='container2'>
        <h2>Task 2</h2>
        <input onChange={e=>setList(e.target.value)} id='inp' type="text" placeholder='Start Typing...'/>
        <button onClick={Listitem} id='button'>Submit</button>
        <p  id='para'><ol><li>{list}</li></ol></p>
    </div>

}
export default Task2