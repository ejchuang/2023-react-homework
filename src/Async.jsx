import { useEffect, useState } from "react";
import axios from "axios";

function Async(){

    const [count, setCount] = useState(0);

    //會重複觸發
    (async()=>{
            const res = await axios.get('https://randomuser.me/api/');
            console.log(1,res);        
        }
    )();

    //避免重複觸發
    useEffect(()=>{
        (async()=>{
            const res = await axios.get('https://randomuser.me/api/');
            console.log(1,res);        
        }
    )()
    },[])
    return (
        <>
            <button onClick={()=>setCount(count+1)}>{count}</button>
        </>
    )
}

export default Async;