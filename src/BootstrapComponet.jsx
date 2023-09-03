import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Narbar from "./components/Narbar";

function BootstrapComponet(){
    return(
        <>
        
<header>
  <Narbar/>
</header>
 
<main>
  <Header/>          
  <div className="album py-5 bg-light">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
            [1,2,3,4,5,6].map((item)=>{
                return (
                <div className="col" key={item}>
                    <Card/>            
                </div>
                )
            })
        }                                    
      </div>
    </div>
  </div>
</main>

<Footer/>
        </>
    )
}

export default BootstrapComponet;