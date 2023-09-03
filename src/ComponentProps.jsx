import { useState } from "react";
import PropType from 'prop-types';

//傳入狀態
function InputWithLabel({text,setText}){ //props解構
    return(
       <>
       <div>
        <label htmlFor="text">標題 {text}</label>
        <input type="text" id="text" value={text} onChange={(e)=>{
            setText(e.target.value)
        }}/>
       </div>
       </>
    );
}

//使用prop-types工具定義元件的props型別
InputWithLabel.propTypes = {
    text:PropType.string.isRequired,
    setText:PropType.func
}

//React Props 驗證 1.加入驗證 2.關掉錯誤提示
//加入驗證:npm i prop-types
function ComponentProps(){
    const [text,setText] = useState('EJ')
    const [text2,setText2] = useState('卡斯伯')
    return(
        <>
        <div className="container">
            <InputWithLabel text={text} setText={setText}/>
            <InputWithLabel text={text2} setText={setText2}/>
            外層的:{text}{text2}
        </div>
        </>
    )
}

export default ComponentProps;