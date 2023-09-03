import { useEffect, useState } from "react";

//main.jsx移除嚴謹模式 (影響運行次數)
//useState看到原始值，無法取到最新狀態
//useEffect再條件更新後觸發，可取到最新狀態
//useEffect[]預設觸發一次 (mounted) ->非同步
let num = 0;

function WhyUseEffect(){
    num++
    console.log('元件運行次數',num)

    const [text,setText] = useState('EJ')
    const [qty,setQty] = useState(0)

    //當qty更新時觸發
    // useEffect(()=>{
        // console.log('useEffect:',num)
    // },[qty])

    //[qty,text] 參照qty,text的更新
    useEffect(()=>{
        console.log('useEffect:',num)
    },[qty,text])

    return (
        <>
            <input type="text" onChange={(e)=>{
                setText(e.target.value)
                //此console是看到原始值，無法取到最新狀態
                console.log('元件運行次數',num,text) 
            }} />
            {text}
            <button onClick={()=>{
                setQty(qty+1)
            }}>{qty}
            </button>        
        </>
    )   
}
export default WhyUseEffect;