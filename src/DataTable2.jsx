import { useEffect, useState } from "react";
import Tr from "./components/Tr";
const initialData = [
    {
        id: 1,
        name: '珍珠奶茶',
        price: 50
    },
    {
        id: 2,
        name: '冬瓜檸檬',
        price: 45
    },
    {
        id: 3,
        name: '翡翠檸檬',
        price: 55
    },
    {
        id: 4,
        name: '四季春茶',
        price: 45
    },
    {
        id: 5,
        name: '阿薩姆奶茶',
        price: 50
    },
    {
        id: 6,
        name:'檸檬冰茶',
        price: 45
    },
    {
        id: 7,
        name:'芒果綠茶',
        price: 55
    },
    {
        id: 8,
        name:'抹茶拿鐵',
        price: 60
    }                                                        
]


function App(){
    const [data, setData] = useState(initialData)
    const [newName,setNewName] = useState('')
    const [price, setPrice] = useState('')
    const [total, setTotal] = useState(0)
    
    //callbackFunction,[條件]
    //當條件data改變時，就重新計算總金額
    useEffect(()=>{
        setTotal(data.reduce((pre,curr)=>pre+curr.price,0))
    },[data])

    //透過input輸入的數字為字串型別，故需要轉換型別
    return(
        <>
        <input type="text" value={newName} onChange={(e)=>{
            setNewName(e.target.value)
        }}/>
        
        <input type="number" value={price} onChange={(e)=>{
            setPrice(Number(e.target.value))
        }}/>

        <button type="button" onClick={()=>{
            setData(
                [
                    ...data,
                    {
                        id: new Date().getTime(),
                        name:newName,
                        price,
                    }
                ]
            )

            setNewName('')
            setPrice('')
        }} >新增</button>
        <table>
            <thead>
                <tr>
                    <th>名稱</th>
                    <th>價格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>{
                    return (
                        <Tr key={item.id} item={item} data={data} setData={setData}/>
                    )
                })}
            </tbody>
        </table>
        總計:{total}
        </>
    )
}

export default App;