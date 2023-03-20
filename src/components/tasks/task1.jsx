
import {useState} from 'react';
function Task1(){
            let [para,setPara]      =useState("---Display Area---");

            

    return <div className='container'>
        <h2>Task 1</h2>
        <input id="inp"  onChange={(e)=>setPara(e.target.value)} type="text" placeholder="Start Typing..." />
        <p id="para">{para}</p>
    </div>
}
export default Task1

