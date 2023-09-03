function NewApp(){
    const num = 100;
    return <div>     
      {num === 100 ? '剛好100':'不是100'}
      <div style={{color:'red',backgroundColor:'yellow'}}>元件 </div>
    </div>
}

export default NewApp;