import { useState } from "react";

function SubmitFormx(){

    const[form,setForm] = useState({
        email:'',
        password:'',
        checkList:[]
    })
    

    function handleInput(e){
       console.log(e.target.name); //checkList
       setForm({
        ...form,
        [e.target.name]:e.target.value
    })
    }
    function handleCheck(e){
        console.log(e.target.name);
        const {name, value} = e.target;

        if(e.target.checked){
            setForm({
                ...form, //原始值
                [name]:[...form[name], value]
            })
        }else{
            setForm({
                ...form,
                [name]:form[name].filter((item)=>item !== value)
            })
        }
    }

    return(
        <>
        <div className="container">
        <div>
            <label htmlFor="email">Email{form.email}</label>
            <input type="email" id="email" name="name" onChange={handleInput}/>
        </div>
        <div>
            <label htmlFor="password">Password{form.password}</label>
            <input type="password" id="password" name="password" onChange={handleInput}/>
        </div>
        <div>
        <h2>多選</h2>
        <label htmlFor="check">checkbox {form.checkList.toString()}</label>
        <br/>
        <input type="checkbox" value="卡斯伯" name="checkList" onChange={handleCheck} /> 卡斯伯  
        <input type="checkbox" value="小明" name="checkList" onChange={handleCheck} /> 小明  
        <input type="checkbox" value="杰倫" name="checkList" onChange={handleCheck} /> 杰倫 
        </div>
        </div>
      
       
        </>
    )
}


export default SubmitFormx;