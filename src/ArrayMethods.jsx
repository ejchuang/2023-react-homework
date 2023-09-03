
function ArrayMethods(){
    
    const arr = [1,2,3]

    return (<div>
    {/* arr 渲染 */}
   
    {/* Map 可以建立新陣列，此陣列包含div */}
    { arr.map((item)=>{
        return(<div key={item}>
            {item}
        </div>
        )
    })}
    </div>

    )
}

export default ArrayMethods;