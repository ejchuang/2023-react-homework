import axios from "axios";
import { useState } from "react";

const host = 'https://todolist-api.hexschool.io';

function Todo(){

    const[form, setForm] = useState({
        email:'',
        password:'',
        nickname:'',
    })
    
    const[token, setToken] = useState('')

    function handleInput(e){
        console.log(e.target.name); 
        setForm({
         ...form,
         [e.target.name]:e.target.value
     })
    }


    const signUp = ()=>{
        console.log(form);

        (async()=>{
            //伺服器+路由
            //axios [method] , api path, data
            console.log(host);
            const res = await axios.post(`${host}/users/sign_up`,form)
            console.log(res);
        })()
    }

    const signIn = ()=>{
        console.log(form);

        (async()=>{
            const res = await axios.post(`${host}/users/sign_in`,form)
            console.log(res);
        })()
    }

    const checkout = ()=>{

        console.log(token);

        (async()=>{
            const res = await axios.get(`${host}/users/checkout`,{
                headers:{
                    authorization:token
                }
            })
            console.log(res);
        })()      
    }

    return(
    <>
     <div className="container">
        <h2>註冊</h2>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleInput}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handleInput}/>
        </div>
        <div>
            <label htmlFor="nickname">nickname</label>
            <input type="nickname" id="nickname" name="nickname" onChange={handleInput}/>
        </div>
        <button onClick={()=>{signUp()}}>註冊</button>
        <hr/>
        <h2>登入</h2>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleInput}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handleInput}/>
        </div>
        <button onClick={()=>{signIn()}}>登入</button>
        <hr/>
        <h2>驗證</h2>
        <div>
            <label htmlFor="Token">Token</label>
            <input type="Token" id="Token" name="Token" onChange={(e)=>{
                setToken(e.target.value)
            }}/>
        </div>
        <button onClick={()=>{checkout()}}>驗證</button>
    </div>
    </>
    )
}

export default Todo;