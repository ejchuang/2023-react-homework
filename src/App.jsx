import { useEffect, useState } from "react";
import { Routes, Route , NavLink} from 'react-router-dom';
import Home from './views/Home'
import About from './views/About'
import Auth from './views/Auth'
import SignUp from './views/SignUp'
import Login from './views/Login'
import Todo from './views/Todo'
import NotFound from './views/NotFound'


function App(){
    
  //加入樣式
  const style = ({ isActive }) => {
    return {
      color: isActive ? 'red' : null
    }
  }
    return(
        <>

      <nav>導覽列
        {/* a 連結 */}
        <NavLink to="/" style={style}>首頁</NavLink> | 
        <NavLink to="/about" style={style}>About</NavLink> |
        <NavLink to="/auth/sign_up" style={style}>註冊</NavLink> | 
        <NavLink to="/auth/login" style={style}>登入</NavLink> |
        <NavLink to="/todo" style={style}>Todo</NavLink>
      </nav>
      <Routes>
        {/* {路由表} 路徑/元件 */}
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/>  } />

        {/* /auth 共用版型 */}
        {/* /auth/sign_up */}
        {/* /auth/sign_in */}
        <Route path="/auth" element={ <Auth/> }>
          <Route path="sign_up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/todo" element={ <Todo/>  }/>

         {/*都找不到就跑這個 */}
        <Route path="*" element={ <NotFound/>} />
      </Routes>
        </>
    )
}

export default App;