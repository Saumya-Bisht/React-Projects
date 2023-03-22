import{useState} from 'react'
function Counter(){
    let[count,setCount]=useState(0)
    
    function countadd(){
        // if(count>=0){
        // setCount(count+1);}
        return (count>=0) ? setCount(count+1): "";
    
    }
    function countsub(){
        if(count>0){

        setCount(count-1);}
    }
    return (<div>
        <p>{count}</p>
        <button onClick={countadd}>Increase count</button>
        <button onClick={countsub}>Decrease count</button>
    </div>)
}
export default Counter