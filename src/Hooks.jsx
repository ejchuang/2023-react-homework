import { useState } from "react";


function Hooks(){
    //let a = 1
    //const [值,寫入的方法] = useState(預設值);
    const [a, setA] = useState(1);

    const [text,setText] = useState('卡斯伯');

    //將函式拉出來，通常以handle開頭命名
    function handleOnClick(){
        setA(a + 1);
        console.log(a);
    }

    const handleOnChange = (event) =>{
        console.log(event.target.value); //輸入的值
        setText(event.target.value)
    }
    
    return(
        <div>
            Hooks
            <button onClick={handleOnClick}>{a}</button>
            {text}
            <input type="text" value={text} onChange={handleOnChange}/>
        </div>
    )
}

export default Hooks;