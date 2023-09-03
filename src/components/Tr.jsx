function Tr({item,data,setData}){
    return(
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                <button onClick={()=>{
                    setData(data.filter((newItem)=>newItem.id !== item.id ))
                    }}>
                    刪除
                </button>
            </td>
        </tr>
    )

}

export default Tr;