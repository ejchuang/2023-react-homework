import { useState } from "react";

function SubmitForm(){

    const[email,setEmail] = useState('')
    //單選
    const[check,setCheck] = useState(false)
    //多選
    const[checkList,setCheckList] = useState([])

    function handleCheck(e){
        if(e.target.checked){
            setCheckList([...checkList,e.target.value])
        }else{
            setCheckList(
                checkList.filter((item)=>item !== e.target.value)
            )
        }
    }

    return(
        <>
        <div className="container">
        <div>
            <label htmlFor="email">Email{email}</label>
            <input type="email" id="email" onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
        </div>
        Checkbox (true, false, 多選)
        <div>
        <h2>單選</h2>
        <label htmlFor="check">checkbox {check.toString()}</label>
        <br/>
        <input type="checkbox" id="check" onChange={(e)=>{
            setCheck(e.target.checked)
        }} />
        </div>
        <hr/>
        <div>
        <h2>多選</h2>
        <label htmlFor="check">checkbox {checkList.toString()}</label>
        <br/>
        <input type="checkbox" value="卡斯伯" onChange={handleCheck} /> 卡斯伯  
        <input type="checkbox" value="小明" onChange={handleCheck} /> 小明  
        <input type="checkbox" value="杰倫" onChange={handleCheck} /> 杰倫 
        </div>
        </div>
      
       
        </>
    )
}


export default SubmitForm;